import { Header } from "../components/heaerFile/header";
import { Banner } from "../components/banners/banner";
import { useCatalog } from "../service/query/useCatalog";
import { CatalogCard } from "../components/card/catalog-card";
import { Container, Grid, Typography } from "@mui/material";
import { ProductBanner } from "../components/banners/product-banner";
import { AdsBanner } from "../components/banners/adsBanner";
import { MixCard } from "../components/card/mix-card";
import BrandCard from "../components/card/brand-card";

export const Home = () => {
  const { data, isLoading } = useCatalog();
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <Grid
        style={{
          overflowX: "auto", // Horizontal scrollni faollashtirish
          flexWrap: "nowrap", // Elementlarni bir qatorda joylashtirish
          padding: "26px 0px 26px 50px", // Ixtiyoriy, padding qo‘shish
        }}
        container
        spacing={"20px"}
      >
        {data?.map((item) => (
          <Grid minWidth={"241px"} height={"124px"} key={item.id} size={2}>
            <CatalogCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Container maxWidth={"xl"}>
        <section style={{ marginTop: "42px", padding: "0px 40px" }}>
          <Typography
            variant="h3"
            pb={"24px"}
            sx={{
              fontFamily: "var(--font-family)",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "150%",
              color: "#333",
            }}
          >
            Смартфоны и планшеты
          </Typography>
          <ProductBanner path="phones" />
        </section>
        <section
          style={{
            marginTop: "32px",
            padding: "16px 40px",
            width: "100%",
            background: "#00cbfe",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-family)",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "150%",
              color: "var(--m3-sys-light-on-tertiary-container)",
              mb: "24px",
            }}
          >
            Акции
          </Typography>
          <AdsBanner path="ads" />
        </section>

        <section>
          <MixCard paths={"phones"} />
        </section>

        <section style={{ marginTop: "32px", padding: "0px 40px" }}>
          <Typography
            variant="h3"
            pb={"24px"}
            sx={{
              fontFamily: "var(--font-family)",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "150%",
              color: "#333",
            }}
          >
            Sport
          </Typography>
          <ProductBanner path="sport" />
        </section>
        <section>
          <Typography
            variant="h3"
            pb={"24px"}
            sx={{
              fontFamily: "var(--font-family)",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "150%",
              color: "#333",
            }}
          >
            Популярные бренды
          </Typography>
          <BrandCard path="brand" />
        </section>
      </Container>
    </div>
  );
};
