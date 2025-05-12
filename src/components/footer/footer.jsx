import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import Group from "../../assets/Group.svg";

const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "80px 0px 0px 0px" }}>
      <Stack width={"100%"} sx={{ background: "#f5f5f6" }}>
        <Stack padding={"40px"} direction={"row"} gap={"150px"}>
          <Box>
            <Box>
              <img src={logo} alt="img" />
            </Box>
            <Box>
              <Typography>+99 893 374-66-44</Typography>
              <Typography>справочная служба</Typography>
            </Box>
            <Box>
              <Typography>+99 893 374-66-44</Typography>
              <Typography>справочная служба</Typography>
            </Box>
            <Box>
              <Typography>справочная служба</Typography>
              <Box>
                <img src={Group} alt="img" />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography>Условия обмена и возврата</Typography>
            <Typography>Каталог</Typography>
            <Typography>О компании</Typography>
            <Typography>Контакты</Typography>
            <Typography>Контакты</Typography>
            <Typography>Контакты</Typography>
          </Box>
          <Box>
            <Typography>О компании</Typography>
            <Typography>Контакты</Typography>
            <Typography>Контакты</Typography>
            <Typography>Контакты</Typography>
          </Box>
          <Box>
            <Typography>Условия обмена и возврата</Typography>
            <Typography>Каталог</Typography>
            <Typography>О компании</Typography>
          </Box>
        </Stack>
        <Stack
          width={"100%"}
          height={"70px"}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ background: "#eaeaea" }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#333",
            }}
          >
            © 2022 Любое использование контента без письменного разрешения
            запрещено
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
