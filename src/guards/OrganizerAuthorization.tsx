import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { PrivateRoutes } from "../constants/routes";

function OrganizerAuthorization() {
  const user = useSelector((state: RootState) => state.user);

  if (user.rol == "admin") {
    return <Outlet />;
  }
  
  return <Navigate to={PrivateRoutes.PRIVATE} replace={true} />;
}

export default OrganizerAuthorization;
