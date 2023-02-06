/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Search from "./components/home/Search";
import Favourites from "./components/home/Favourites";
import PlayList from "./components/home/PlayList";
import PlayListDetails from "./pages/PlayListDetails";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import PrivateRoute from "./helpers/PrivateRoutes";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/search"
            element={
              <PrivateRoute>
                <Search />
              </PrivateRoute>
            }
          />
          <Route
            path="/favourites"
            element={
              <PrivateRoute>
                <Favourites />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlist"
            element={
              <PrivateRoute>
                <PlayList />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlistDetails/:title"
            element={
              <PrivateRoute>
                <PlayListDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
