import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useDelete = (queryKey) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxios();

  const { mutateAsync } = useMutation({
    mutationFn: async (endpoint) => {
      const res = await axiosSecure.delete(endpoint);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return  mutateAsync ;
};

export default useDelete;
