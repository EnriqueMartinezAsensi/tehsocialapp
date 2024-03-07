import Cards from "../components/PostGridComponents/Cards";
import SearchInput from "../components/uiComponents/SearchInput";
import PaginationManager from "../components/uiComponents/PaginationManager";
import Spinner from "../../assets/components/svg/spinner";
import usePostsList from "../../api/hooks/usePostsList";
import { useState } from "react";

import "./styles.css";

const PostGrid = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
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
        currentPage={pageNumber}
        setCurrentPage={setPageNumber}
        itemsPerPage={postsPerPage}
        setItemsPerPage={setPostsPerPage}
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
        currentPage={pageNumber}
        setCurrentPage={setPageNumber}
        itemsPerPage={postsPerPage}
        setItemsPerPage={setPostsPerPage}
      />
    </section>
  );
};

export default PostGrid;
