import { useCallback, useState } from "react";
import handleRequest from "../../utils/handleRequest";
import { IMovie } from "../../models/movie";

const useGetMovies = () => {
  const [data, setData] = useState<IMovie[] | []>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMovies = useCallback((page = 1) => {
    setIsLoading(true);
    handleRequest({
      method: "get",
      url: `/movie/now_playing?page=${page}`,
      onSuccess: (res) => {
        if (res.data.results) {
          setData(res.data.results);
          setTotalPages(res.data.total_pages);
          setIsLoading(false);
          return;
        }
        setIsLoading(false);
        alert("An error has occurred");
      },
      onError: () => {
        setIsLoading(false);
        alert("There is not connection to the server");
      },
    });
  }, []);

  return { getMovies, data, isLoading, totalPages };
};

export default useGetMovies;
