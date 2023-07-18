import * as S from "./style";
import noImage from "../../assets/no-image-available.jpeg";
import { CardContent } from "@mui/material";
import ComparePrice from "../compare-price/ComparePrice";

type CatalogueItemProps = {
  src: string;
  vendor: string;
  title: string;
  newArrival: boolean;
  currentPrice: number;
  comparePrice?: number;
};
export default function CatalogueItem({
  src,
  vendor,
  title,
  newArrival,
  currentPrice,
  comparePrice,
}: CatalogueItemProps) {
  return (
    <>
      <S.ItemCard variant="outlined">
        <S.CardImage
          content="img"
          image={src}
          onError={(e) => console.log(e)}
        ></S.CardImage>
        <S.Content>
          <S.Info>
            <div className={`newArrival ${newArrival ? "" : "hidden"}`}>
              NEW ARRIVAL
            </div>
            <div className="vendor" title={vendor}>
              {vendor.toUpperCase()}
            </div>
            <div className="title" title={title}>
              {title}
            </div>
          </S.Info>
          <S.Price>
            <ComparePrice
              currentPrice={currentPrice}
              comparePrice={comparePrice}
            ></ComparePrice>
          </S.Price>
        </S.Content>
      </S.ItemCard>
    </>
  );
}
