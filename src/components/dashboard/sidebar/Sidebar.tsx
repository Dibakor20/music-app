import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.global.scss";

const Sidebar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sidebar d-none d-md-block">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="list-unstyled">
            <div>
              <li>
                <Link className="nav-link" to="/">
                  <h3 className="ro-title">Ro-Music</h3>
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/home">
                  <i className="fa-solid fa-house mx-2"></i> Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/search">
                  <i className="fa-solid fa-magnifying-glass mx-2"></i> Search
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/favourites">
                  <i className="fa-solid fa-star mx-2"></i>Favourites
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/playlist">
                  <i className="fa-solid fa-play mx-2"></i>Playlists
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
