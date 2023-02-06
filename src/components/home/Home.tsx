import React from "react";
import FavouritePlayList from "../carousel/FavouritePlayList";
import UserPlayList from "../carousel/UserPlayList";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <UserPlayList />
      <FavouritePlayList />
    </Layout>
  );
};

export default Home;
