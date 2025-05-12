import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/reques";

export const useCatalog = () => {
  return useQuery({
    queryKey: ["catalog"],
    queryFn: () =>
      request.get("/catalog").then((res) => {
        return res.data;
      }),
  });
};
