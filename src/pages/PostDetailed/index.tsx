import FullPostRender from "../components/PostDetailedComponents/FullPost/index";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/components/svg/spinner";
import usePost from "../../api/hooks/usePost";
import { PostDetailedHolder } from "./PostDetailed.styled";

const PostDetailed = () => {
  const { postID } = useParams();
  const { getFullPost } = usePost(Number(postID));

  const fullPost = getFullPost(Number(postID));

  if (!fullPost) {
    return <Spinner />;
  }

  return (
    <PostDetailedHolder>
      <FullPostRender post={fullPost} />
    </PostDetailedHolder>
  );
};

export default PostDetailed;
