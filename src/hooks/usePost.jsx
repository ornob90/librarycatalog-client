import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePost = (queryKeys, endpoint) => {
  const queryClient = useQueryClient();

  const axiosSecure = useAxios();

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post(endpoint, data);
      return res.data;
    },
    onSuccess: () => {
      queryKeys.forEach((queryKey) => {
        queryClient.invalidateQueries(queryKey);
      });
    },
  });

  return mutateAsync;
};

export default usePost;
