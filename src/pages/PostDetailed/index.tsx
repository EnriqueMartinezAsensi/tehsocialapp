import FullPostRender from "../components/PostDetailedComponents/FullPost/index";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/components/svg/spinner";
import usePost from "../../api/hooks/usePost";
import { PostDetailedHolder } from "./PostDetailed.styled";

const PostDetailed = () => {
  const { postID } = useParams();
  const { currentPost } = usePost(Number(postID));

  if (!currentPost) {
    return <Spinner />;
  }

  return (
    <PostDetailedHolder>
      <FullPostRender post={currentPost} />
    </PostDetailedHolder>
  );
};

export default PostDetailed;
