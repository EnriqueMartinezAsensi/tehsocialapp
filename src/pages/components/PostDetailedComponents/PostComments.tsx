type PostCommentProps = {
  line: ComentData;
};

const PostComment = ({ line }: PostCommentProps) => {
  return (
    <li className="facecoment">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg" />
      <div>
        <h5>{line.email}</h5>
        <p>{line.body}</p>
      </div>
    </li>
  );
};

export default PostComment;
