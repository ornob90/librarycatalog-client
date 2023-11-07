import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useDelete = (queryKeys, endpoint) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxios();

  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const res = await axiosSecure.delete(endpoint);
      return res.data;
    },
    onSuccess: () => {
      if (queryKeys) {
        queryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries(queryKey);
        });
      }
    },
  });

  return { mutateAsync };
};

export default useDelete;
