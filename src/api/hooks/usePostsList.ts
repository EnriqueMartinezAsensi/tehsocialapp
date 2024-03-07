import { useEffect, useState } from "react";
import { getPostsList, getAllPostsList } from "../../api/posts";
import { getUsersList } from "../../api/user";

const usePostsList = (
  filterMask: string,
  page: string,
  postsPerPage: string
) => {
  const [fullCardList, setFullCardList] = useState<MiniaturePostList>();
  const [isLoading, setIsloading] = useState(true);

  const getAllOrSomePosts = () => {
    if (filterMask || postsPerPage === "All") {
      return getAllPostsList().then((postData) => {
        return postData;
      });
    }
    return getPostsList(page, postsPerPage).then((postData) => {
      return postData;
    });
  };

  const getPosts = () => {
    getAllOrSomePosts().then((postData) => {
      const allFoundUsers = postData?.map((posts) => posts.userId);
      const usersNotRepeated = [...new Set(allFoundUsers)];
      getUsersList(usersNotRepeated).then((userdata) => {
        const miniaturePostList: MiniaturePostList = {
          userList: userdata,
          postList: postData,
        };
        setFullCardList(miniaturePostList);
        setIsloading(false);
      });
    });
  };

  const searchPostByUser = () => {
    const users = fullCardList?.userList.filter((eachUser) =>
      eachUser.name.toLowerCase().includes(filterMask.toLowerCase())
    );
    if (users) {
      const userPosts: PostData[] = fullCardList!.postList.filter((eachPost) =>
        users.some((user) => user.id === eachPost.userId)
      );
      const searchResult: MiniaturePostList = {
        postList: userPosts,
        userList: users,
      };
      return searchResult;
    }
    return fullCardList;
  };

  const filteredCardList = searchPostByUser();

  useEffect(() => {
    getPosts();
  }, [page, filterMask, postsPerPage]);

  return { filteredCardList, isLoading };
};

export default usePostsList;
