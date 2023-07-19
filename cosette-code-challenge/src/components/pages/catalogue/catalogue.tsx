import { useEffect, useState } from "react";
import CatalogueItem, {
  CatalogueItemProps,
} from "../../catalogue-item/CatalogueItem";
import * as S from "./style";
import { Grid } from "@mui/material";
import axios from "../../../axios/axios";

type ProductType = {
  id: number;
  title: string;
  vendor: string;
  image: {
    alt: string;
    src: string;
  };
};

export default function Catalogue() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("products");
      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setProducts(response.data.products);
      console.log(products);
    };
    void loadData();
  }, []);
  return (
    <S.Center>
      <Grid container spacing={2} justifyContent="center" maxWidth={900}>
        {products.map((product) => (
          <Grid
            key={product.id}
            item
            md={4}
            sm={6}
            xs={12}
            style={{
              maxWidth: 300,
            }}
          >
            <CatalogueItem
              src={product.image?.src || ""}
              vendor={product.vendor}
              title={product.title}
              newArrival={true}
              currentPrice={2008}
              comparePrice={2500}
            ></CatalogueItem>
          </Grid>
        ))}
      </Grid>
    </S.Center>
  );
}
