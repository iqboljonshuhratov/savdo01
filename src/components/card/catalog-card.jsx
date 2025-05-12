import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CatalogCard = ({ img, text, name }) => {
  return (
    <Stack
      sx={{
        pt: "14px", // top
        pb: "14px", // bottom
        pl: "16px", // left
        pr: "16px", // right
      }}
      direction={"row"}
      alignItems={"center"}
      gap={"16px"}
      height={"100%"}
      bgcolor={"#f6f6f6"}
    >
      <div>
        <img src={img} alt="img" />
      </div>
      <Link
        to={`/category-detail/${name}`}
        style={{
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "0.01em",
          textAlign: "center",
          color: "#333",
          textDecoration: "none", // agar underline bo‘lmasin desangiz
        }}
      >
        <Typography>{text}</Typography>
      </Link>
    </Stack>
  );
};
