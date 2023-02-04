/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sidebar">
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
                <Link className="nav-link text-white" to="/">
                  <i className="fas fa-cart-plus"></i> Home
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/search">
                  <i className="fas fa-cart-plus"></i> Search
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/favourites">
                  <i className="fas fa-cart-plus"></i>Favourites
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/playlist">
                  <i className="fas fa-cart-plus"></i>Playlists
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