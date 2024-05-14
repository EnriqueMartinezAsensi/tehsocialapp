import { useQuery } from "@tanstack/react-query";
import { getComentCount } from "../coments";

const useCommentCount = (postIds?: string[]) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["commentCount", postIds],
    queryFn: () => getComentCount(postIds!),
    enabled: postIds?.length !== 0,
  });
  return { comentCount: data, isPendingCommentCount: isPending, isErrorCommentCount: isError };
};

export default useCommentCount;
