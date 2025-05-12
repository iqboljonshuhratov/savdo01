import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Likeicon2 from "../../assets/likeicon2";
import Likeicon from "../../assets/likeicon";
import Karzinkaicon from "../../assets/karzinkaicon";

export const ProductCard = ({ title, color, img, path, id, rame, price }) => {
  return (
    <Stack
      width={"214px"}
      direction={"row"}
      p={"4px"}
      pb={"14px"}
      height={"323px"}
      // border={1}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={img} alt="img" />
          <Typography>
            <Link
              to={`/product-detail/${path}/${id}`}
              style={{
                fontFamily: "var(--font-family)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                color: "#333",
                textDecoration: "none",
              }}
            >
              {title}
            </Link>
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#333",
            }}
          >
            {color}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#333",
              // marginBottom: "20px",
            }}
          >
            {rame}
          </Typography>
        </div>

        <Typography
          sx={{
            fontFamily: "var(--font-family)",
            fontWeight: 600,
            fontSize: "18px",
            color: "#333",
          }}
        >
          {price}
        </Typography>
      </div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        pr={"12px"}
      >
        <IconButton>
          <Likeicon2 />
        </IconButton>
        <Button
          sx={{
            minWidth: "36px",
            height: "36px",
            backgroundColor: "#FEEE00",
            display: "flex", // flexbox bilan kontentni markazlashtiradi
            justifyContent: "center", // ikonkani gorizontal markazlash
            alignItems: "center", // ikonkani vertikal markazlash
            transition: "transform 0.2s ease", // animatsiya
            "&:active": {
              transform: "scale(0.95)", // bosganda kichiklashish
            },
            "&:hover": {
              backgroundColor: "#FEEE00", // hoverda ham rangni o‘zgartirish
            },
          }}
        >
          <Karzinkaicon sx={{ fontSize: "20px" }} />
        </Button>
      </Box>
    </Stack>
  );
};
