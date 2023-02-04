/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/dashboard/Sidebar";
import Home from "./components/home/Home";
import Search from "./components/home/Search";
import Favourites from "./components/home/Favourites";
import PlayList from "./components/home/PlayList";

function App() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/playlist" element={<PlayList />} />
      </Routes>
    </>
  );
}

export default App;
