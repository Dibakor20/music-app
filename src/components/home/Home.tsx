import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FavouritePlayList from "../carousel/FavouritePlayList";
import UserPlayList from "../carousel/UserPlayList";
import Layout from "../Layout";

const Home = () => {
  const allPlayList = useSelector(
    (state: RootState) => state.playlists.playlists
  );

  return (
    <Layout>
      {allPlayList.length !== 0 ? (
        <div>
          <UserPlayList />
          <FavouritePlayList />
        </div>
      ) : (
        <div>
          
        </div>
      )}
    </Layout>
  );
};

export default Home;
