import React from "react";
import Sidebar from "../dashboard/Sidebar";

const PlayList = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <h1>This is play list page</h1>
        </div>
      </div>
    </>
  );
};

export default PlayList;
