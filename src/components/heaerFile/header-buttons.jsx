import { IconButton, Stack } from "@mui/material";
import React from "react";
import UserIcon from "../../assets/usericon";
import Likeicon from "../../assets/likeicon";
import Karzinkaicon from "../../assets/karzinkaicon";

const HeaderButtons = () => {
  return (
    <Stack direction={"row"} gap={"32px"}>
      <IconButton>
        <UserIcon />
      </IconButton>
      <IconButton>
        <Likeicon />
      </IconButton>
      <IconButton>
        <Karzinkaicon />
      </IconButton>
    </Stack>
  );
};

export default HeaderButtons;
