import { useEffect, useRef, useState } from "react";
import CatalogueItem from "../../catalogue-item/CatalogueItem";
import * as S from "./style";
import { Alert, CircularProgress, Grid, Pagination } from "@mui/material";
import axios from "../../../axios/axios";
import { AxiosRequestConfig } from "axios";

type ProductType = {
  id: number;
  title: string;
  vendor: string;
  image: {
    alt: string;
    src: string;
  };
};

type GetProductsResponseType = {
  products: ProductType[];
  previousPageParams: AxiosRequestConfig;
  nextPageParams: AxiosRequestConfig;
};

export default function Catalogue() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const previousPageParams = useRef<AxiosRequestConfig | null>(null);
  const nextPageParams = useRef<AxiosRequestConfig | null>(null);
  const currentPage = useRef(1);

  const getProducts = async (
    params: AxiosRequestConfig | null
  ): Promise<void> => {
    let response;
    try {
      setIsLoading(true);
      response = await axios.get<GetProductsResponseType>("products", {
        params,
      });
      if (response.status === 400) {
        setLoadingError(true);
      } else {
        updateProducts(response.data);
      }
    } catch (_) {
      setLoadingError(true);
    }
  };

  const updateProducts = (result: GetProductsResponseType) => {
    setIsLoading(false);

    setProducts(result.products);

    previousPageParams.current = result.previousPageParams;

    nextPageParams.current = result.nextPageParams;
  };

  const nextPage = async () => {
    await getProducts(nextPageParams.current);
  };

  const previousPage = async () => {
    await getProducts(previousPageParams.current);
  };

  const handlePageChange = async (page: number) => {
    if (page > currentPage.current) {
      await nextPage();
    } else {
      await previousPage();
    }

    currentPage.current = page;
  };

  useEffect(() => {
    void getProducts(null);
  }, []);

  if (loadingError) {
    return (
      <S.Center>
        <Alert severity="error" data-testid="error">
          Error on loading products
        </Alert>
      </S.Center>
    );
  }
  return (
    <S.Center>
      {isLoading ? (
        <CircularProgress color="primary" data-testid="loading" />
      ) : (
        <Grid container spacing={2} justifyContent="center" maxWidth={900}>
          {products?.map((product) => (
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
      )}
      <Pagination
        className="pagination"
        count={2}
        color="secondary"
        onChange={(_, page) => void handlePageChange(page)}
      ></Pagination>
    </S.Center>
  );
}
