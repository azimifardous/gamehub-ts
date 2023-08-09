import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Game>(`/games`);

const UseGameDetails = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default UseGameDetails;
