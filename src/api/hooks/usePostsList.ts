import { useContext, useEffect, useState } from "react";
import { getPaginatedPostsList } from "../../api/posts";
import { getUsersList } from "../../api/user";
import { CardContext } from "../../providers/CardProvider";

const usePostsList = (page: number, postsPerPage: string) => {
  const { cardList, setCardList } = useContext(CardContext);
  const [paginatedCards, setPaginatedCards] = useState<MiniaturePostList>({
    postList: [],
    userList: [],
  });

  const paginationToIds = () => {
    let idList: number[] = [];
    let x;
    for (x = 0; x < Number(postsPerPage); x++) {
      idList = [...idList, page * Number(postsPerPage) - x];
    }
    return idList;
  };

  const findPostByIds = () => {
    const ids = paginationToIds();
    const cacheCards = cardList.postList.filter(({ id }) => id && ids.includes(id));
    const missingIds = ids.filter((sampleId) => cacheCards.every(({ id }) => sampleId != id));
    if (missingIds.length != 0) getPaginatedCards();
    else {
      const newPaginatedCards: MiniaturePostList = {
        userList: cardList.userList,
        postList: cacheCards,
      };
      setPaginatedCards(newPaginatedCards);
    }
  };

  const getPaginatedCards = () => {
    getPaginatedPostsList(page, postsPerPage).then((postData) => {
      const allFoundUsers = postData?.map((posts) => posts.userId);
      const usersNotRepeated = [...new Set(allFoundUsers)];
      getUsersList(usersNotRepeated).then((userdata) => {
        const databaseMiniaturePostList: MiniaturePostList = {
          userList: userdata,
          postList: postData,
        };
        setPaginatedCards(databaseMiniaturePostList);
        const existingPostIDs = cardList.postList.map(({ id }) => id) || [];
        const existingUserIDs = cardList.userList.map(({ id }) => id) || [];
        const newPostList = [
          ...cardList.postList,
          ...databaseMiniaturePostList.postList.filter(({ id }) => !existingPostIDs.includes(id)),
        ];
        const newUserList = [
          ...cardList.userList,
          ...databaseMiniaturePostList.userList.filter(({ id }) => !existingUserIDs.includes(id)),
        ];
        const newCardList: MiniaturePostList = {
          userList: newUserList,
          postList: newPostList,
        };
        setCardList(newCardList);
      });
    });
  };

  useEffect(() => {
    findPostByIds();
  }, [page, postsPerPage]);

  return { paginatedCards };
};

export default usePostsList;
