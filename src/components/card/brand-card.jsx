import { Box, Stack } from "@mui/material";
import React from "react";
import { useSingleCategory } from "../../service/query/useSingleCategory";

const BrandCard = ({ path }) => {
  const { data } = useSingleCategory(path);
  return (
    <Stack gap={"16px"} direction={"row"} flexWrap={"wrap"}>
      {data?.map((item) => {
        return (
          <Box
            width={"180px"}
            height={"90px"}
            key={item.id}
            sx={{ background: "#f8f8f8" }}
          >
            <Box
              p={"25px"}
              width={"180px"}
              height={"90px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={item.img} alt="img" />
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

export default BrandCard;
