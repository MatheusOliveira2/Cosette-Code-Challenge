import { useEffect, useRef, useState } from "react";
import CatalogueItem from "../../catalogue-item/CatalogueItem";
import * as S from "./style";
import { Button, Grid } from "@mui/material";
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

  const previousPageParams = useRef(null);
  const nextPageParams = useRef(null);

  const nextPage = async () => {
    const response = await axios.get("products", {
      params: nextPageParams.current,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    setProducts(response.data.products);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    previousPageParams.current = response.data.previousPageParams;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    nextPageParams.current = response.data.nextPageParams;
  };

  const previousPage = async () => {
    const response = await axios.get("products", {
      params: previousPageParams.current,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    setProducts(response.data.products);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    previousPageParams.current = response.data.previousPageParams;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    nextPageParams.current = response.data.nextPageParams;
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("products");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setProducts(response.data.products);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      previousPageParams.current = response.data.previousPageParams;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      nextPageParams.current = response.data.nextPageParams;
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
      <Button onClick={() => void nextPage()}>Next Page</Button>
      <Button onClick={() => void previousPage()}>Previous Page</Button>
    </S.Center>
  );
}
