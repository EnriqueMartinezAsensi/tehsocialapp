import Cards from "../components/PostGridComponents/Cards";
import SearchInput from "../components/uiComponents/SearchInput";
import PaginationManager from "../components/uiComponents/PaginationManager";
import Spinner from "../../assets/components/svg/spinner";
import usePostsList from "../../api/hooks/usePostsList";
import { useState } from "react";

import "./styles.css";

const PostGrid = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<string>("1");
  const [postsPerPage, setPostsPerPage] = useState<string>("10");
  const { filteredCardList, isLoading } = usePostsList(
    searchInput || "",
    pageNumber,
    postsPerPage
  );

  if (isLoading || !filteredCardList) {
    return <Spinner />;
  }

  return (
    <section className="PostGrid">
      <SearchInput
        onChangeUserInput={({ target }) => setSearchInput(target.value)}
      />
      <PaginationManager
        placeholder={pageNumber}
        onChangeUserInput={({ target }) => setPageNumber(target.value)}
        add={() => setPageNumber(String(Number(pageNumber) + 1))}
        substract={() =>
          setPageNumber(String(Math.abs(Number(pageNumber) - 1) || 1))
        }
        changePostPerPage={({ target }) => setPostsPerPage(target.value)}
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
      <PaginationManager
        placeholder={pageNumber}
        onChangeUserInput={({ target }) => setPageNumber(target.value)}
        add={() => setPageNumber(String(Number(pageNumber) + 1))}
        substract={() =>
          setPageNumber(String(Math.abs(Number(pageNumber) - 1) || 1))
        }
        changePostPerPage={({ target }) => setPostsPerPage(target.value)}
      />
    </section>
  );
};

export default PostGrid;
