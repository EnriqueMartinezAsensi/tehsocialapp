import Cards from "../components/PostGridComponents/Cards";
import SearchInput from "../components/PostGridComponents/SearchInput";
import { getPostsList } from "../../api/posts";
import { getUsersList } from "../../api/user";
import Spinner from "../../assets/components/svg/spinner";
import { ChangeEvent, useEffect, useState } from "react";

import "./styles.css";

const PostGrid = () => {
  const [fullCardList, setFullCardList] = useState<MiniaturePostList>();
  const [filteredCardList, setFilteredCardList] = useState<MiniaturePostList>();
  const [isLoading, setIsloading] = useState(true);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleImput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value);
  };

  const getPostsOnLoad = () =>
    getPostsList().then((postData) => {
      const allFoundUsers = postData.map((posts) => posts.userId);
      const usersNotRepeated = [...new Set(allFoundUsers)];
      getUsersList(usersNotRepeated).then((userdata) => {
        const miniaturePostList: MiniaturePostList = {
          userList: userdata,
          postList: postData,
        };
        setFullCardList(miniaturePostList);
        setIsloading(false);
      });
    });

  const searchPostByUser = () => {
    const users = fullCardList!.userList.filter((eachUser) =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (users) {
      const userPosts: PostData[] = fullCardList!.postList.filter((eachPost) =>
        users.some((user) => user.id === eachPost.userId)
      );
      const searchResult: MiniaturePostList = {
        postList: userPosts,
        userList: users,
      };
      setFilteredCardList(searchResult);
      console.log(searchResult);
    }
  };

  useEffect(() => {
    getPostsOnLoad();
  }, []);

  useEffect(() => {
    if (searchInput && !isLoading) {
      searchPostByUser();
    } else if (!isLoading) {
      setFilteredCardList(fullCardList);
    }
  }, [searchInput, isLoading]);

  return isLoading || !filteredCardList ? (
    <Spinner />
  ) : (
    <section className="PostGrid">
      <SearchInput onChangeUserInput={handleImput} />
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
