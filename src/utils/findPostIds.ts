const findPostIds = (postList?: PostData[]) => {
  const allFoundPosts = postList?.map((posts) => posts.id!);
  return [...new Set(allFoundPosts)];
};

export default findPostIds;
