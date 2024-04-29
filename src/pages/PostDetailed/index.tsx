import FullPostRender from "../components/PostDetailedComponents/FullPost/index";
import { useParams } from "react-router-dom";
import Spinner from "../../assets/components/svg/spinner";
import usePost from "../../api/hooks/usePost";
import { PostDetailedHolder } from "./PostDetailed.styled";
import useUsers from "../../api/hooks/useUsers";
import useComments from "../../api/hooks/useComments";

const PostDetailed = () => {
  const { postID } = useParams();
  const { post, isPendingPost, isErrorPost } = usePost(Number(postID));
  const { usersList, isPendingUsers, isErrorUsers } = useUsers(post ? [post?.userId] : []);
  const { coments, isPendingComments, isErrorComments } = useComments(post?.id);

  const isLoading = isPendingPost || isPendingUsers || isPendingComments;
  const isError = isErrorPost || isErrorUsers || isErrorComments;

  const fullPost = {
    post,
    user: usersList ? usersList[0] : undefined,
    comentList: coments,
  } as CompletePost;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <PostDetailedHolder>
      <FullPostRender post={fullPost} />
    </PostDetailedHolder>
  );
};

export default PostDetailed;
