import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { slug, id } = useParams(); // URLdan parametrlani olish

  return (
    <Container maxWidth="xl">
      <h1>Mahsulot nomi (slug): {slug}</h1>
      <p>ID: {id}</p>
    </Container>
  );
};
