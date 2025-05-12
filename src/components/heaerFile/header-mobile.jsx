import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import UserIcon from "../../assets/usericon";
import Likeicon from "../../assets/likeicon";
import logo from "../../assets/logo.svg";
import Karzinkaicon from "../../assets/karzinkaicon";
import MenuIcon from "../../assets/menuicon";

export const HeaderMobile = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        pt={"20px"}
      >
        <Box>
          <IconButton>
            <UserIcon />
          </IconButton>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <img src={logo} alt="img" />
        </Box>
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton>
            <Likeicon />
          </IconButton>
          <IconButton>
            <Karzinkaicon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack pb={"20px"} direction={"row"}>
        <Button variant="contained">
          <MenuIcon />
        </Button>
        <Stack flexGrow={1}>
          <TextField size="small" placeholder="Поиск" />
        </Stack>
      </Stack>
    </>
  );
};
