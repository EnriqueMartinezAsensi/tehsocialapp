import { useQuery } from "@tanstack/react-query";
import { getComents } from "../coments";

const useComments = (postId?: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComents(postId!),
    enabled: postId !== undefined,
  });
  return { coments: data, isPendingComments: isPending, isErrorComments: isError };
};

export default useComments;
