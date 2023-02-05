import React from "react";
import UserPlayList from "../carousel/UserPlayList";
import CreatePlayList from "../dashboard/CreatePlayList";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";

const PlayList = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-2 px-0">
          <Sidebar />
        </div>
        <div className="col-md-10 px-0">
          <Navbar />
          <UserPlayList />
          <div className="mt-5">
          <CreatePlayList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayList;
