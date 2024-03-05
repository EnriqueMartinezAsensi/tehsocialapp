import { useNavigate } from "react-router-dom";
import PostComment from "./PostComments";

import UserIcon from "../../../assets/images/ProfileIcon.svg";
import BackArrow from "../../../assets/images/arrow.png";

import "./styles.css";

type FullPostRenderProps = {
  post: CompletePost;
};

//https://www.facebook.com/aurelio.beutblasco/posts/2622048241290105

const FullPostRender = ({ post }: FullPostRenderProps) => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="header">
        <img src={UserIcon} />
        <h5>{post.user.name}</h5>
        <h3>{post.post.title}</h3>
        <img
          className="backbutton"
          src={BackArrow}
          onClick={() => navigate(`/`)}
        />
      </div>
      <div>
        <p>{post.post.body}</p>
      </div>
      <hr></hr>
      <hr></hr>
      <ul>
        <h4>View more coments</h4>
        {post.comentList.map((eachComent) => (
          <PostComment key={eachComent.id} line={eachComent} />
        ))}
      </ul>
    </section>
  );
};

export default FullPostRender;
