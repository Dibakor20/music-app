import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { AppDispatch, RootState } from "../store/store";
import { makeFavourite } from "../store/storeAction";

const PlayListDetails = () => {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => setPlaying(!playing);
  const { title } = useParams();
  const allPlayList = useSelector(
    (state: RootState) => state.playlists.playlists
    );
    const dispatch = useDispatch<AppDispatch>()

    const data = allPlayList.find((item) => item.title === title);
    
    const handleFavourite = (isFavourite:boolean,songId:string) => {
        const dataPayload = {
            isFavourite,
            playListId: data?.id as string,
            songId,
        }
        console.log(songId)
        dispatch(makeFavourite(dataPayload))
    }
    console.log(allPlayList)

  return (
    <>
      <div className="row">
        <div className="col-md-2 px-0">
          <Sidebar />
        </div>
        <div className="col-md-10 px-0">
          <Navbar />

          <div className="detailsCard mt-5">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div>
                  <img
                    src="https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg"
                    alt=""
                    className="w-100 d-block my-auto"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-12">
                <div className="detailsContent">
                  <h3 className="detailsTitle">{data?.title}</h3>

                  <div className="d-flex flex-wrap mt-3 ">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Play</th>
                          <th scope="col">Title</th>
                          <th scope="col">Favourite</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.songs?.map((item) => (
                          <tr>
                            <th scope="row">
                              <audio
                                src={item.mp3Url}
                                controls={true}
                                onPlay={togglePlaying}
                                onPause={togglePlaying}
                              />
                            </th>
                                <td>{item.songTitle}</td>
                            <td>
                              <i onClick={()=>handleFavourite(!item.isFavourite,item.id)} className={`${item.isFavourite?"fa-solid":"fa-regular"} fa-star`}></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayListDetails;
