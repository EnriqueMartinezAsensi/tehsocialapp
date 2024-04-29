import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "../user";

const useUsers = (userIndexList?: number[]) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["userList", userIndexList],
    queryFn: () => getUsersList(userIndexList!),
    enabled: userIndexList && userIndexList.length !== 0,
  });
  return { usersList: data, isPendingUsers: isPending, isErrorUsers: isError };
};

export default useUsers;
