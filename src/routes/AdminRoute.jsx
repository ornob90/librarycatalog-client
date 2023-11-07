import React from "react";
import useGet from "../hooks/useGet";
import useAuth from "../hooks/useAuth";
import Loading from "../components/shared/Loading";
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { validAdmin, adminLoading } = useAdmin();

  const { user, loading } = useAuth();

  if (loading || adminLoading) {
    return <Loading />;
  } else if (user && validAdmin("librarian")) {
    return children;
  }

  return <Navigate to="/"></Navigate>;
};

export default AdminRoute;
