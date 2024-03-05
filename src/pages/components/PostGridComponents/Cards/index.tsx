import { useNavigate } from "react-router-dom";
import UserIcon from "../../../../assets/images/ProfileIcon.svg";
import "./style.css";

type CardsProps = {
  post: PostData;
  user: UserData;
};

//https://www.facebook.com/

const Cards = ({ post, user }: CardsProps) => {
  const navigate = useNavigate();

  return !post || !user ? (
    <div></div>
  ) : (
    <div className="cards" onClick={() => navigate(`/post/${post.id}`)}>
      <div className="cards">
        <img src={UserIcon} />
        <h3>{post!.title}</h3>
        <h5>{user!.name}</h5>
      </div>
      <p>{post.body}</p>
      <hr></hr>
    </div>
  );
};

export default Cards;
