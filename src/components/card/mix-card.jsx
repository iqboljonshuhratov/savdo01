import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useSingleCategory } from "../../service/query/useSingleCategory";

export const MixCard = ({ paths }) => {
  const { data } = useSingleCategory(paths);

  return (
    <Box
      width="100%"
      height="630px"
      display="flex"
      gap={2}
      justifyContent="space-between"
      padding={"16px 40px"}
      marginTop={"32px"}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          variant="h3"
          pb={"24px"}
          sx={{
            fontFamily: "var(--font-family)",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "150%",
            color: "#333",
          }}
        >
          Смартфоны и планшеты
        </Typography>
        <Stack
          flex={1}
          spacing={2}
          sx={{ overflowY: "auto" }}
          alignItems="center"
        >
          {data?.map((item) => (
            <Box
              key={item.id}
              display={"flex"}
              border="1px solid #ccc"
              borderRadius={2}
              p={2}
              textAlign="center"
              sx={{
                width: "400px",
                height: "157px",
              }}
            >
              <img
                style={{
                  width: "140px",
                  //   objectFit: "cover",
                }}
                src={item.img}
              />
              <Stack justifyContent={"space-between"}>
                <div>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "var(--font-family)",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-family)",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#333",
                      textAlign: "start",
                    }}
                  >
                    {item.color} {item.rame}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontFamily: "var(--font-family)",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "156%",
                    color: "var(--m3-sys-light-shadow)",
                    textAlign: "start",
                    font: "600",
                  }}
                >
                  {item.price}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          variant="h3"
          pb={"24px"}
          sx={{
            fontFamily: "var(--font-family)",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "150%",
            color: "#333",
          }}
        >
          Смартфоны и планшеты
        </Typography>
        <Stack
          flex={1}
          spacing={2}
          sx={{ overflowY: "auto" }}
          alignItems="center"
        >
          {data?.map((item) => (
            <Box
              key={item.id}
              display={"flex"}
              border="1px solid #ccc"
              borderRadius={2}
              p={2}
              textAlign="center"
              sx={{
                width: "400px",
                height: "157px",
              }}
            >
              <img
                style={{
                  width: "140px",
                  //   objectFit: "cover",
                }}
                src={item.img}
              />
              <Stack justifyContent={"space-between"}>
                <div>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "var(--font-family)",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-family)",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#333",
                      textAlign: "start",
                    }}
                  >
                    {item.color} {item.rame}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontFamily: "var(--font-family)",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "156%",
                    color: "var(--m3-sys-light-shadow)",
                    textAlign: "start",
                    font: "600",
                  }}
                >
                  {item.price}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          variant="h3"
          pb={"24px"}
          sx={{
            fontFamily: "var(--font-family)",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "150%",
            color: "#333",
          }}
        >
          Смартфоны и планшеты
        </Typography>
        <Stack
          flex={1}
          spacing={2}
          sx={{ overflowY: "auto" }}
          alignItems="center"
        >
          {data?.map((item) => (
            <Box
              key={item.id}
              display={"flex"}
              border="1px solid #ccc"
              borderRadius={2}
              p={2}
              textAlign="center"
              sx={{
                width: "400px",
                height: "157px",
              }}
            >
              <img
                style={{
                  width: "140px",
                  //   objectFit: "cover",
                }}
                src={item.img}
              />
              <Stack justifyContent={"space-between"}>
                <div>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "var(--font-family)",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-family)",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#333",
                      textAlign: "start",
                    }}
                  >
                    {item.color} {item.rame}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontFamily: "var(--font-family)",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "156%",
                    color: "var(--m3-sys-light-shadow)",
                    textAlign: "start",
                    font: "600",
                  }}
                >
                  {item.price}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
