import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import "./HomePage.global.scss";

const HomePage = () => {
  const { keycloak } = useKeycloak();

  return (
    <>
      <div className="header-background">
        <div className="banner-content">
          <div className="banner">
            <h1 className="banner-title">Find Music And Create Album</h1>
            <p className="banner-description">
              Discover amzaing music at exclusive deals
            </p>
          </div>
          <div className="">
            {!keycloak?.authenticated && (
              <button
                type="button"
                className="login-button"
                onClick={() => {
                  keycloak?.login({
                    redirectUri: "http://localhost:3000/home",
                  });
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
