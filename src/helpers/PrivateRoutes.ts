import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }:{children:React.ReactElement}) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak?.authenticated;

 return isLoggedIn ? children : null;
};

export default PrivateRoute;