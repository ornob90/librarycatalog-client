import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useDelete = (endpoint, queryKey) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxios();

  const { mutateAsync } = useMutation({
    mutationFn: async (param) => {
      const res = await axiosSecure.delete(endpoint);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return { mutateAsync };
};

export default useDelete;
