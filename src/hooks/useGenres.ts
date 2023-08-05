import ApiClient from "../services/api-client";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { results: genres },
  });

export default useGenres;
