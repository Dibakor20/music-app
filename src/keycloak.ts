import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "dev1",
    clientId: "ro-music",
});

export default keycloak;