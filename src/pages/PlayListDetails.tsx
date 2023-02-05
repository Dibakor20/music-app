import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { RootState } from "../store/store";

const PlayListDetails = () => {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => setPlaying(!playing);
  const { title } = useParams();
  const allPlayList = useSelector(
    (state: RootState) => state.playlists.playlists
  );

  const data = allPlayList.find((item) => item.title === title);

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
                                src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a"
                                controls={true}
                                onPlay={togglePlaying}
                                onPause={togglePlaying}
                              />
                            </th>
                            <td>Jhoome Jo Pathaan</td>
                            <td>
                              <i className="fa-regular fa-star"></i>
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
