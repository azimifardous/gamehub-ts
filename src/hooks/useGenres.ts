import ApiClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
