import { useEffect, useState } from "react";
import { getPostsList } from "../../api/posts";
import { getUsersList } from "../../api/user";

const usePostsList = (filterMask: string) => {
  const [fullCardList, setFullCardList] = useState<MiniaturePostList>();
  const [isLoading, setIsloading] = useState(true);

  const getPostsOnLoad = () =>
    getPostsList().then((postData) => {
      const allFoundUsers = postData.map((posts) => posts.userId);
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
    getPostsOnLoad();
  }, []);

  return { filteredCardList, isLoading };
};

export default usePostsList;
