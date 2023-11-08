import React from "react";
import useGet from "../hooks/useGet";
import useAuth from "../hooks/useAuth";
import Loading from "../components/shared/Loading";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { validAdmin, adminLoading } = useAdmin();

  const { user, loading } = useAuth();
  console.log("user", loading, "admin", adminLoading);
  console.log(user, validAdmin("librarian"));
  const { state } = useLocation();

  if (loading || adminLoading) {
    return <Loading />;
  } else if (user && validAdmin("librarian")) {
    return children;
  }
  console.log(state);

  return <Navigate to={state || "/"}></Navigate>;
};

export default AdminRoute;
