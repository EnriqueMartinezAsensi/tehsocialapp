import { ReactNode, createContext, useState } from "react";

type PostContextType = {
  posts: CompletePost[];
  setPosts: React.Dispatch<React.SetStateAction<CompletePost[]>>;
};

const PostContext = createContext<PostContextType>({
  posts: [],
  setPosts: () => {},
});

const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<CompletePost[]>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostsProvider, PostContext };
