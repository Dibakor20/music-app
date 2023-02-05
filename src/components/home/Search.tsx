import React from "react";
import UserPlayList from "../carousel/UserPlayList";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../dashboard/Sidebar";

const Search = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-2 px-0">
          <Sidebar />
        </div>
        <div className="col-md-10 px-0">
          <Navbar />

          <div className="my-5">
            <UserPlayList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
