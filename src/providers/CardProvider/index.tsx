import { ReactNode, createContext, useState } from "react";

type CardContextType = {
  cardList: MiniaturePostList;
  setCardList: React.Dispatch<React.SetStateAction<MiniaturePostList>>;
};

const CardContext = createContext<CardContextType>({
  cardList: {
    postList: [],
    userList: [],
  },
  setCardList: () => {},
});

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cardList, setCardList] = useState<MiniaturePostList>({
    postList: [],
    userList: [],
  });

  return (
    <CardContext.Provider value={{ cardList, setCardList }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardProvider, CardContext };
