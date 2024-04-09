import { Navigate, Outlet } from "react-router-dom";
import { pb } from "../pocketBase";

function ProtectedRoute() {
  if (pb.authStore.isValid) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
}

export default ProtectedRoute;
