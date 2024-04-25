import { useContext, useEffect, useState } from "react";
import { getComents } from "../coments";
import { getPost } from "../posts";
import { getUser } from "../user";
import { PostContext } from "../../providers/PostProvider";

const usePost = (postID: number) => {
  const { posts, setPosts } = useContext(PostContext);
  const [currentPost, setCurrentPost] = useState<CompletePost>();

  const getFullPost = (postID: number) => {
    const desiredPost = posts.find(({ post }) => postID == post.id);
    if (desiredPost) setCurrentPost(desiredPost);
    fetchFullPost(Number(postID)).then((completePost) => {
      setPosts([...posts, completePost]);
      setCurrentPost(completePost);
    });
  };

  const fetchFullPost = (postID: number) => {
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

  useEffect(() => {
    getFullPost(Number(postID));
  }, [postID]);

  return { currentPost };
};

export default usePost;
