import { getPaginatedPostsList } from "../../api/posts";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import findUserIds from "../../utils/findUserIds";
import { prefetchUsers } from "./tools/prefetchUsers";
import findPostIds from "../../utils/findPostIds";
import { prefetchComentCount } from "./tools/prefetchComentCount";

const usePostsList = (page: number, postsPerPage: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["postsList", page, postsPerPage],
    queryFn: () => getPaginatedPostsList(page, postsPerPage),
  });

  const queryClient = useQueryClient();

  const prefetchNexPage = (page: number, postsPerPage: string) => {
    queryClient
      .fetchQuery({
        queryKey: ["postsList", page, postsPerPage],
        queryFn: () => getPaginatedPostsList(page, postsPerPage),
        staleTime: 5000,
      })
      .then((postList) => {
        const users = findUserIds(postList);
        const posts = findPostIds(postList);
        prefetchUsers(users, queryClient);
        prefetchComentCount(posts, queryClient);
      });
  };

  prefetchNexPage(page + 1, postsPerPage);
  if (page !== 1) prefetchNexPage(page - 1, postsPerPage);

  return { postsList: data, isPendingPostsList: isPending, isErrorPostsList: isError };
};

export default usePostsList;
