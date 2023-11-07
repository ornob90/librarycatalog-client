import React from "react";
import useGet from "../hooks/useGet";
import useAuth from "../hooks/useAuth";
import Loading from "../components/shared/Loading";
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { validAdmin } = useAdmin();

  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  } else if (validAdmin()) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
