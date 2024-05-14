import Cards from "../components/PostGridComponents/Cards";
import SearchInput from "../components/uiComponents/SearchInput";
import PaginationManager from "../components/uiComponents/PaginationManager";
import Spinner from "../../assets/components/svg/spinner";
import usePostsList from "../../api/hooks/usePostsList";
import PostCreator from "../components/uiComponents/PostCreator";
import { useState } from "react";

import { PostGridHolder } from "./PostGrid.styled";
import useUsers from "../../api/hooks/useUsers";
import findUserIds from "../../utils/findUserIds";
import findPostIds from "../../utils/findPostIds";
import useCommentCount from "../../api/hooks/useCommentCount";

const CardList = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<string>("10");
  const { postsList, isPendingPostsList, isErrorPostsList } = usePostsList(pageNumber, postsPerPage);

  const usersKeys = findUserIds(postsList);

  const { usersList, isPendingUsers, isErrorUsers } = useUsers(usersKeys);

  const postIds = findPostIds(postsList);

  const { comentCount, isPendingCommentCount, isErrorCommentCount } = useCommentCount(postIds);
  const isLoading = isPendingPostsList || isPendingUsers || isPendingCommentCount;
  const isError = isErrorPostsList || isErrorUsers || isErrorCommentCount;

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
        <Cards
          key={eachPost.id}
          post={eachPost}
          user={usersList?.find(({ id }) => id === eachPost.userId)!}
          comentCount={comentCount?.find(({ postId }) => postId === eachPost.id)?.commentNumber || 0}
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

export default CardList;
