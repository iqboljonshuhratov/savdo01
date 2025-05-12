import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import MenuIcon from "../../assets/menuicon";

const HeaderSearch = () => {
  return (
    <Stack flexGrow={1} direction={"row"} gap={"32px"}>
      <Button variant="contained" startIcon={<MenuIcon />}>
        Каталог
      </Button>
      <Stack flexGrow={1}>
        <TextField placeholder="Поиск" />
      </Stack>
    </Stack>
  );
};

export default HeaderSearch;
