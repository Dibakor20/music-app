import React, { ChangeEvent } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {
  handleSearchQuery?: CallableFunction;
};

const Navbar = ({ handleSearchQuery }: NavbarProps) => {
  const { keycloak } = useKeycloak();
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand d-md-none d-block">
            Home
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/search"
                  className="nav-link d-md-none d-block"
                  aria-current="page"
                >
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favourites" className="nav-link d-md-none d-block">
                  Favourites
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/playlist" className="nav-link d-md-none d-block">
                  Playlist
                </Link>
              </li>
            </ul>
            {/* checking path name */}
            {location.pathname === "/search" && (
              <form className="d-flex">
                <input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSearchQuery?.(e.target.value)
                  }
                  className="form-control me-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            )}
            <div className="hover:text-gray-200">
              {!!keycloak?.authenticated && (
                <button
                  type="button"
                  className="login-button"
                  onClick={() =>
                    keycloak?.logout({
                      redirectUri: "http://localhost:3000",
                    })
                  }
                >
                  Logout ({keycloak?.tokenParsed?.preferred_username})
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
