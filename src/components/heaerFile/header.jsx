import { Container, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.svg";
import { HeaderMobile } from "./header-mobile";
import HeaderSearch from "./header-search";
import HeaderButtons from "./header-buttons";

export const Header = () => {
  const md = useMediaQuery("(min-width: 768px)");
  return (
    <Container maxWidth="xl">
      {md ? (
        <Stack
          gap={{ xs: "15px", lg: "32px" }}
          alignItems={"center"}
          direction={"row"}
          py={"18px"}
        >
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="img" />
          </a>
          <HeaderSearch />
          <HeaderButtons />
        </Stack>
      ) : (
        <HeaderMobile></HeaderMobile>
      )}
    </Container>
  );
};
