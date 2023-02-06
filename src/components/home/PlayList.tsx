import React from "react";
import UserPlayList from "../carousel/UserPlayList";
import CreatePlayList from "../dashboard/CreatePlayList";
import Layout from "../Layout";

const PlayList = () => {
  return (
    <Layout>
      <UserPlayList />
      <div className="mt-5">
        <CreatePlayList />
      </div>
    </Layout>
  );
};

export default PlayList;
