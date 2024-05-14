import { QueryClient } from "@tanstack/react-query";
import { getComentCount } from "../../coments";

export const prefetchComentCount = (postList: string[], queryClient: QueryClient) => {
  queryClient.prefetchQuery({
    queryKey: ["commentCount", postList],
    queryFn: () => getComentCount(postList),
    staleTime: 5000,
  });
};
