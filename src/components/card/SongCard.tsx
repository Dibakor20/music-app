import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { addSong } from "../../store/storeAction";
import { SongProps } from "../home/Search";

const SongCard = ({
  coverImg,
  songTitle,
  id,
  url,
  isFavourite,
  mp3Url,
}: SongProps) => {
  const [playing, setPlaying] = useState(false);
    const togglePlaying = () => setPlaying(!playing);
    const[open,setOpen] = useState<boolean>(false)
  const allPlayList = useSelector(
    (state: RootState) => state.playlists.playlists
  );
  const dispatch = useDispatch<AppDispatch>();
  console.log(allPlayList);

    const handleAddSongs = (playListId: string) => {
     
    const payloadData = {
      playListId,
      song: {
        coverImg,
        songTitle,
        id,
        url,
        isFavourite,
        mp3Url,
        },
      
        };
        setOpen(false)
      dispatch(addSong(payloadData))
  };

  return (
    <>
      <div className="musicCard">
        <div>
          <img src={coverImg} alt="" className="card-img" />
        </div>
        <div className="cardHolder">
          <h3 className="musicTitle">{songTitle}</h3>
          <div className="d-flex justify-content-between">
            <button
                          type="button"
                          onClick={()=>setOpen(true)}
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add to playlist
            </button>

                      {
                          open &&     <div
                          className="modal d-block"
                          id="exampleModal"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                  Modal title
                                          </h5>
                                          <button
                            onClick={() => setOpen(false)}
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
            
                              <div className="modal-body">
                                {allPlayList.length ? (
                                  <>
                                    {allPlayList.map((list) => (
                                      <>
                                        <p onClick={()=>handleAddSongs(list?.id)}>{list?.title}</p>
                                      </>
                                    ))}
                                  </>
                                ) : (
                                  <>
                                    <p>Create a playlist first</p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
        }

            <div className="song-icon">
              <i className="fa-solid fa-star mx-2"></i>
            </div>
          </div>

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

export default SongCard;
