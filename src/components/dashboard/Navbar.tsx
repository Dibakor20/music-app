/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent } from "react";
import { useKeycloak } from "@react-keycloak/web";

type NavbarProps = {
  handleSearchQuery?: CallableFunction;
}

const Navbar = ({ handleSearchQuery }: NavbarProps) => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Favourites
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Playlist
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                onChange={(e:ChangeEvent<HTMLInputElement>)=>handleSearchQuery?.(e.target.value)}
                className="form-control me-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

            </form>
            <div className="hover:text-gray-200">

                 {!!keycloak?.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak?.logout({
                      redirectUri: "http://localhost:3000",
                    })}
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
