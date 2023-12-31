import React, { useEffect, useState } from "react";
import AdminContext from "../context/AdminContext";
import useGet from "../hooks/useGet";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import BASE_URL from "../api/api";
import { setLogLevel } from "firebase/app";

const AdminProvider = ({ children }) => {
  //   const { data: adminData, isLoading } = useGet(["AdminInfo"], "/admin");

  const [adminData, setAdminData] = useState([]);
  const [adminLoading, setAdminLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    setAdminLoading(true);
    if (user) {
      console.log("admin call");
      axios
        .get(BASE_URL + "/admin", { withCredentials: true })
        .then((res) => {
          setAdminData(res.data);
          setAdminLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setAdminLoading(false);
        });
    } else {
      setAdminLoading(false);
    }
  }, [user]);

  const validAdmin = (role) => {
    // console.log(user?.email);
    return adminData?.find(
      (admin) => admin?.email === user?.email && admin?.role === role
    );
  };

  const adminInfo = {
    adminData,
    validAdmin,
    adminLoading,
  };

  return (
    <AdminContext.Provider value={adminInfo}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
