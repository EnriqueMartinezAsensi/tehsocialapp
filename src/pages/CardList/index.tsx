import Cards from "../components/PostGridComponents/Cards";
import SearchInput from "../components/uiComponents/SearchInput";
import PaginationManager from "../components/uiComponents/PaginationManager";
import Spinner from "../../assets/components/svg/spinner";
import usePostsList from "../../api/hooks/usePostsList";
import PostCreator from "../components/uiComponents/PostCreator";
import { useState } from "react";

import { PostGridHolder } from "./PostGrid.styled";
import useUsers from "../../api/hooks/useUsers";
//import useCardList from "../../hooks/useCardList";

const CardList = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<string>("10");
  const { postsList, isPendingPostsList, isErrorPostsList } = usePostsList(pageNumber, postsPerPage);

  const findUserIds = () => {
    const allFoundUsers = postsList?.map((posts) => posts.userId);
    return [...new Set(allFoundUsers)];
  };

  const { usersList, isPendingUsers, isErrorUsers } = useUsers(findUserIds());
  const isLoading = isPendingPostsList || isPendingUsers;
  const isError = isErrorPostsList || isErrorUsers;

  const filterPosts = () => {
    const users = usersList?.filter((eachUser) => eachUser.name.toLowerCase().includes(searchInput.toLowerCase()));
    if (users && users.length !== 0) {
      const filteredPosts: PostData[] = postsList!.filter((eachPost) =>
        users.some((user) => user.id === eachPost.userId)
      );
      return filteredPosts;
    }
    return postsList || [];
  };

  if (isLoading) {
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

  if (isError) {
    return <h1>ERROR</h1>;
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
      {filterPosts().map((eachPost) => (
        <Cards key={eachPost.id} post={eachPost} user={usersList?.find(({ id }) => id === eachPost.userId)!} />
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

export default CardList;
