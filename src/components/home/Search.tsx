import React from "react";
import Sidebar from "../dashboard/Sidebar";

const Search = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <h1>This is search page</h1>
        </div>
      </div>
    </>
  );
};

export default Search;
