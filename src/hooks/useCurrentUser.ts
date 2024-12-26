import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher); //swrはReactに似たデータフェッチ機構、変更がないとフェッチされない
  // console.log(data, error, isLoading, isValidating);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
export default useCurrentUser;
