import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import { Platform } from "./useGames";
import apiClient from "../services/api-client";
import platform from "../data/platform";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { results: platform },
  });

export default usePlatforms;
