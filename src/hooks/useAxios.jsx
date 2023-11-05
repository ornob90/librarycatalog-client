import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "",
  withCredentials: true,
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
