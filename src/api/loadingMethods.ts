import { LoaderFunctionArgs } from "react-router-dom";
import { getPostsList, getPost } from "./posts";
import { getUsersList, getUser } from "./user";
import { getComents } from "./coments";

export const GetMiniaturePostList = async () => {
  return getPostsList().then((postData) => {
    const allFoundUsers = postData.map((posts) => posts.userId);
    const usersNotRepeated = [...new Set(allFoundUsers)];
    return getUsersList(usersNotRepeated).then((userdata) => {
      const miniaturePostList: MiniaturePostList = {
        userList: userdata,
        postList: postData,
      };
      return miniaturePostList;
    });
  });
};

export const GetFullPost = async ({ params }: LoaderFunctionArgs) => {
  const postID = params.postID;
  return getPost(Number(postID)).then((postData) => {
    return getUser(postData.userId).then((userData) => {
      return getComents(postData.id).then((comentData) => {
        const fullPost: CompletePost = {
          post: postData,
          user: userData,
          comentList: comentData,
        };
        return fullPost;
      });
    });
  });
};
