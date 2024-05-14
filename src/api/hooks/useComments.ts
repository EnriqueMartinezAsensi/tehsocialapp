import { useQuery } from "@tanstack/react-query";
import { getComents } from "../coments";

const useComments = (postId?: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComents(postId!),
    enabled: postId !== undefined,
  });
  return { coments: data, isPendingComments: isPending, isErrorComments: isError };
};

export default useComments;
