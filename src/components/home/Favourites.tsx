import React from "react";
import FavouritePlayList from "../carousel/FavouritePlayList";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";

const Favourites = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-2 px-0">
          <Sidebar />
        </div>
        <div className="col-md-10 px-0">
          <Navbar />
          <FavouritePlayList/>
        </div>
      </div>
    </>
  );
};

export default Favourites;
