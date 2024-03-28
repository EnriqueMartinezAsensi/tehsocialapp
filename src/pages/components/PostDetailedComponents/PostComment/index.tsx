import {
  CommentIcon,
  PostCommentLine,
  CommentTextHolder,
  CommentUserName,
  CommentBody,
} from "./PostComment.styled";

type PostCommentProps = {
  line: ComentData;
};

const PostComment = ({ line }: PostCommentProps) => {
  return (
    <PostCommentLine>
      <CommentIcon src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg" />
      <CommentTextHolder>
        <CommentUserName>{line.email}</CommentUserName>
        <CommentBody>{line.body}</CommentBody>
      </CommentTextHolder>
    </PostCommentLine>
  );
};

export default PostComment;
