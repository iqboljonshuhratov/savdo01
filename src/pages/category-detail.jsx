import React from "react";
import { useSingleCategory } from "../service/query/useSingleCategory";
import { ProductCard } from "../components/card/product-card";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { catalog } = useParams();

  const { data } = useSingleCategory(catalog);
  return (
    <div>
      {/* <Header /> */}
      <Container maxWidth="xl">
        <Grid container spacing={"20px"}>
          {data?.map((item) => (
            <Grid key={item.id} size={{ sm: 12, md: 4, lg: 2 }}>
              <ProductCard key={item.id} {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CategoryDetail;
