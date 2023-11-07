import React, { useContext } from "react";
import AdminContext from "../context/AdminContext";

const useAdmin = () => {
  const adminData = useContext(AdminContext);
  return adminData;
};

export default useAdmin;
