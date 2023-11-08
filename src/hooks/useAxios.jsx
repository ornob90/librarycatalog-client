import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api/api";

const axiosSecure = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const useAxios = () => {
  const { signOutMethod } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        signOutMethod()
          .then(() => {
            navigate("/login");
          })
          .catch((err) => console.log(err));
      }
    }
  );

  return axiosSecure;
};

export default useAxios;
