import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/reques";

export const useProductDetail = (slug, id) => {
  return useQuery({
    queryKey: ["productDetail"],
    queryFn: () => request.get(`${slug}/${id}`).then((res) => res.data),
  });
};
