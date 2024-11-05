import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { fetchUser } from "./fetchers";

export const useUser = () => {
  return useQuery({
    queryKey: [queryKeys.user],
    queryFn: fetchUser,
    refetchOnWindowFocus: false,
  });
};
