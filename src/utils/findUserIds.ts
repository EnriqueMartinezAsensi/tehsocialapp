const findUserIds = (postList?: PostData[]) => {
  const allFoundUsers = postList?.map((posts) => posts.userId);
  return [...new Set(allFoundUsers)];
};

export default findUserIds;
