import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/reques";

export const useSingleCategory = (catalogName) => {
  return useQuery({
    queryKey: ["catalog", catalogName],
    queryFn: () =>
      request.get(`/${catalogName}`).then((res) => {
        return res.data;
      }),
  });
};
