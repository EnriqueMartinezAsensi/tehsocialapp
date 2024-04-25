import Cards from "../components/PostGridComponents/Cards";
import SearchInput from "../components/uiComponents/SearchInput";
import PaginationManager from "../components/uiComponents/PaginationManager";
import Spinner from "../../assets/components/svg/spinner";
import usePostsList from "../../api/hooks/usePostsList";
import PostCreator from "../components/uiComponents/PostCreator";
import { useState } from "react";

import { PostGridHolder } from "./PostGrid.styled";

const PostGrid = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<string>("10");
  const { paginatedCards } = usePostsList(pageNumber, postsPerPage);

  const searchPostByUser = () => {
    if (searchInput) {
      const users = paginatedCards?.userList.filter((eachUser) =>
        eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      if (users) {
        const userPosts: PostData[] = paginatedCards!.postList.filter((eachPost) =>
          users.some((user) => user.id === eachPost.userId)
        );
        const searchResult: MiniaturePostList = {
          postList: userPosts,
          userList: users,
        };
        return searchResult;
      }
      return paginatedCards;
    }
    return paginatedCards;
  };

  const paginatedAndFilteredCards = searchPostByUser();

  if (paginatedAndFilteredCards.postList.length === 0) {
    return (
      <PostGridHolder>
        <SearchInput onChangeUserInput={({ target }) => setSearchInput(target.value)} />
        <PaginationManager
          currentPage={pageNumber}
          setCurrentPage={setPageNumber}
          itemsPerPage={postsPerPage}
          setItemsPerPage={setPostsPerPage}
        />
        <Spinner />
      </PostGridHolder>
    );
  }

  return (
    <PostGridHolder>
      <SearchInput onChangeUserInput={({ target }) => setSearchInput(target.value)} />
      <PaginationManager
        currentPage={pageNumber}
        setCurrentPage={setPageNumber}
        itemsPerPage={postsPerPage}
        setItemsPerPage={setPostsPerPage}
      />
      <PostCreator />
      {paginatedAndFilteredCards.postList.map((eachPost) => (
        <Cards
          key={eachPost.id}
          post={eachPost}
          user={paginatedAndFilteredCards.userList.find(({ id }) => id === eachPost.userId)!}
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
