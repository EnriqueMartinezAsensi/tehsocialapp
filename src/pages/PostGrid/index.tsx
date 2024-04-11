import Cards from "../components/PostGridComponents/Cards";
import SearchInput from "../components/uiComponents/SearchInput";
import PaginationManager from "../components/uiComponents/PaginationManager";
import Spinner from "../../assets/components/svg/spinner";
import usePostsList from "../../api/hooks/usePostsList";
import PostCreator from "../components/uiComponents/PostCreator";
import { useState } from "react";

import { PostGridHolder } from "./PostGrid.styled";
import ThemeSwitch from "../components/uiComponents/ThemeSwitch";

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
    <PostGridHolder>
      <SearchInput
        onChangeUserInput={({ target }) => setSearchInput(target.value)}
      />
      <PaginationManager
        currentPage={pageNumber}
        setCurrentPage={setPageNumber}
        itemsPerPage={postsPerPage}
        setItemsPerPage={setPostsPerPage}
      />
      <PostCreator />
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
    </PostGridHolder>
  );
};

export default PostGrid;
