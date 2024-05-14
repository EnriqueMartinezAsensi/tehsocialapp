import { useQuery } from "@tanstack/react-query";
import { getPost } from "../posts";

const usePost = (postId: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
    enabled: postId !== undefined,
  });

  return { post: data, isPendingPost: isPending, isErrorPost: isError };
};

export default usePost;
