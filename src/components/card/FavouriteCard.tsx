import React, { useState } from "react";
import { SongProps } from "../home/Search";

const FavouriteCard = ({
  coverImg,
  songTitle,
  id,
  url,
  isFavourite,
  mp3Url,
}: SongProps) => {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => setPlaying(!playing);

  return (
    <>
      <div className="musicCard">
        <div>
          <img src={coverImg} alt="" className="card-img" />
        </div>
        <div className="cardHolder">
          <h3 className="musicTitle">{songTitle}</h3>

          <div className="mt-3">
            <audio
              src={mp3Url}
              controls={true}
              onPlay={togglePlaying}
              onPause={togglePlaying}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteCard;
