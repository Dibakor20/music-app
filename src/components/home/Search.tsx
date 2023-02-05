import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSongAsync } from "../../store/storeAction";
import SongCard from "../card/SongCard";
import UserPlayList from "../carousel/UserPlayList";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";

export type SongProps = {
  coverImg: string;
  id: string;
  songTitle: string;
  url: string;
  isFavourite?: boolean;
  mp3Url?:string
};

const Search = () => {
  const [searchResult, setSearchResult] = useState<SongProps[]>([]);
  console.log(searchResult)
  const handleSearchQuery = async (value: string) => {
    const response = await getSongAsync(value);
    if (response) {
      const allSongs = response.map((track: any) => {
        const songData = {
          coverImg: track?.track?.images?.coverart,
          id:Math.round(Math.random()*999999),
          songTitle: track?.track?.title,
          url: track?.track?.url,
          isFavourite: false,
          mp3Url:track?.track?.hub?.actions?.[1]?.uri
        };
        return songData;
      });
      setSearchResult(allSongs);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2 px-0">
          <Sidebar />
        </div>
        <div className="col-md-10 px-0">
          <Navbar handleSearchQuery={handleSearchQuery} />

          <div className="mt-2">
            {searchResult.length ? (
              <div className="row">
                {searchResult.map((song) => (
                  <div className="col-md-4">
                    <SongCard
                      coverImg={song?.coverImg}
                      songTitle={song?.songTitle}
                      url={song?.url}
                      id={song?.id}
                      isFavourite={song?.isFavourite}
                      mp3Url={song?.mp3Url}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">No song Found please Search your favourite song</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
