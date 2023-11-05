import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePut = (queryKey) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxios();

  const { mutateAsync } = useMutation({
    mutationFn: async (endpoint, data) => {
      const res = await axiosSecure.put(endpoint, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return mutateAsync;
};

export default usePut;
