import CatalogueItem, {
  CatalogueItemProps,
} from "../../catalogue-item/CatalogueItem";
import * as S from "./style";
import { Grid } from "@mui/material";

type CatalogueProps = {
  items: Array<CatalogueItemProps>;
};

export default function Catalogue({ items }: CatalogueProps) {
  return (
    <S.Center>
      <Grid container spacing={2} justifyContent="center" maxWidth={900}>
        {items.map(() => (
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            style={{
              maxWidth: 300,
            }}
          >
            <CatalogueItem
              src="https://cdn.shopify.com/s/files/1/0790/5008/0540/products/Main_c8ff0b5d-c712-429a-be00-b29bd55cbc9d.jpg?v=1689582653"
              vendor="PRADA"
              title="Teste de title"
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
