import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const HomePage = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <div className="hover:text-gray-200">
        {!keycloak?.authenticated && (
          <button
            type="button"
            className="text-blue-800"
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
  );
};

export default HomePage;
