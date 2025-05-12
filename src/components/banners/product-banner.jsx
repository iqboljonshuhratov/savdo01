import { Box, Button, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft as LeftIcon } from "../../assets/arrow-left";
import { ArrowRight as RightIcon } from "../../assets/arrow-right";
// import { UseBanner } from "../../service/query/useBanner";
import { useSingleCategory } from "../../service/query/useSingleCategory";
import { ProductCard } from "../card/product-card";
import likeicon2 from "../../assets/likeicon2";
import Likeicon from "../../assets/likeicon";

const ArrowLeft = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20px;
  cursor: pointer;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
`;

const ArrowRight = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  cursor: pointer;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
`;

export const ProductBanner = ({ path }) => {
  const { data } = useSingleCategory(path);

  return (
    <Stack>
      <Box position={"relative"} maxWidth={"100%"} mb={"32px"}>
        <Swiper
          // pagination={{ clickable: true, el: ".swiper-pagination" }}
          loop
          modules={[Navigation]}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          spaceBetween={"24px"}
          slidesPerView={6}
        >
          {data?.map((item) => (
            <SwiperSlide
              key={item.id}
              // style={{ height: "323px" }}
              style={{ minWidth: "214px" }}
            >
              <ProductCard {...item} path={path} />
            </SwiperSlide>
          ))}
          <ArrowLeft className="arrow-left arrow">
            <LeftIcon />
          </ArrowLeft>
          <ArrowRight className="arrow-right arrow">
            <RightIcon />
          </ArrowRight>
          {/* <div className="swiper-pagination"></div> */}
        </Swiper>
      </Box>
    </Stack>
  );
};
