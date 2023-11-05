import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  } else if (user) {
    return children;
  }
  return <Navigate state={pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
