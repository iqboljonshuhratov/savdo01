import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/reques";

export const UseBanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: () =>
      request.get("/banners").then((res) => {
        return res.data;
      }),
  });
};
