import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePatch = (queryKeys, endpoint) => {
  const queryClient = useQueryClient();

  const axiosSecure = useAxios();

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.patch(endpoint, data);
      return res?.data;
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

export default usePatch;
