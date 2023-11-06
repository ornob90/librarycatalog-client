import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGet = (queryKeys, endpoint) => {
  const axiosSecure = useAxios();

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: queryKeys,
    queryFn: async () => {
      const res = await axiosSecure.get(endpoint);
      return res.data;
    },
  });

  return { data, isLoading, isFetching, refetch };
};

export default useGet;
