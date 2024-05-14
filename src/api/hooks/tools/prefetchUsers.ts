import { QueryClient } from "@tanstack/react-query";
import { getUsersList } from "../../user";

export const prefetchUsers = (users: string[], queryClient: QueryClient) => {
  queryClient.prefetchQuery({
    queryKey: ["userList", users],
    queryFn: () => getUsersList(users),
    staleTime: 5000,
  });
};
