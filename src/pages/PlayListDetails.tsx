import React from "react";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

const PlayListDetails = () => {
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
              <div className="col-lg-5 col-12">
                <div>
                  <img
                    src="https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="detailsContent">
                  <h3 className="detailsTitle">Playlist 1</h3>

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
                        <tr>
                          <th scope="row">
                            <i className="fa-solid fa-play"></i>
                          </th>
                          <td>Jhoome Jo Pathaan</td>
                          <td>
                            <i className="fa-regular fa-star"></i>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <i className="fa-solid fa-play"></i>
                          </th>
                          <td>Jhoome Jo Pathaan</td>
                          <td>
                            <i className="fa-regular fa-star"></i>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <i className="fa-solid fa-play"></i>
                          </th>
                          <td>Jhoome Jo Pathaan</td>
                          <td>
                            <i className="fa-regular fa-star"></i>
                          </td>
                        </tr>
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
