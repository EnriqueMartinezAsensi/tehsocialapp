import Cards from "../components/PostGridComponents/Cards";
import SearchInput from "../components/PostGridComponents/SearchInput";
import Spinner from "../../assets/components/svg/spinner";
import usePostsList from "../../api/hooks/usePostsList";
import { useState } from "react";

import "./styles.css";

const PostGrid = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { filteredCardList, isLoading } = usePostsList(searchInput || "");

  if (isLoading || !filteredCardList) {
    return <Spinner />;
  }

  return (
    <section className="PostGrid">
      <SearchInput
        onChangeUserInput={({ target }) => setSearchInput(target.value)}
      />
      {filteredCardList.postList.map((eachPost) => (
        <Cards
          key={eachPost.id}
          post={eachPost}
          user={
            filteredCardList.userList.find(({ id }) => id === eachPost.userId)!
          }
        />
      ))}
    </section>
  );
};

export default PostGrid;
