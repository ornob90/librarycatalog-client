import React, { useEffect, useState } from "react";
import AdminContext from "../context/AdminContext";
import useGet from "../hooks/useGet";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import BASE_URL from "../api/api";

const AdminProvider = ({ children }) => {
  //   const { data: adminData, isLoading } = useGet(["AdminInfo"], "/admin");

  const [adminData, setAdminData] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    axios.get(BASE_URL + "/admin").then((res) => setAdminData(res.data));
  }, []);

  const validAdmin = (role) => {
    return adminData?.find(
      (admin) => admin?.email === user?.email && admin?.role === role
    );
  };

  const adminInfo = {
    adminData,
    validAdmin,
  };

  return (
    <AdminContext.Provider value={adminInfo}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
