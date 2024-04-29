import { getPaginatedPostsList } from "../../api/posts";
import { useQuery } from "@tanstack/react-query";

const usePostsList = (page: number, postsPerPage: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["postsList", page, postsPerPage],
    queryFn: () => getPaginatedPostsList(page, postsPerPage),
  });

  return { postsList: data, isPendingPostsList: isPending, isErrorPostsList: isError };
};

export default usePostsList;
