import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewPost } from "../posts";

const useUploadPost = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: postNewPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postsList"] });
    },
  });

  return { mutateAsync, isPendingUpload: isPending, isErrorUpload: isError };
};

export default useUploadPost;
