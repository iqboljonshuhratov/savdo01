import React from "react";
import { Box, Stack } from "@mui/material";
import { useSingleCategory } from "../../service/query/useSingleCategory";

export const AdsBanner = ({ path }) => {
  const { data } = useSingleCategory(path);

  return (
    <Stack direction={"row"} gap={"22px"}>
      {data?.map((item) => {
        return (
          <Box>
            <img src={item.img} alt="" />
          </Box>
        );
      })}
    </Stack>
  );
};
