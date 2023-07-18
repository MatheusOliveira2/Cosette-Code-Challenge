import * as S from "./style";
import noImage from "../../assets/no-image-available.jpeg";
import { CardContent } from "@mui/material";

type CatalogueItemProps = {
  src: string;
  vendor: string;
  title: string;
  newArrival: boolean;
  currentPrice: number;
};
export default function CatalogueItem({
  src,
  vendor,
  title,
  newArrival,
  currentPrice,
}: CatalogueItemProps) {
  return (
    <>
      <S.ItemCard>
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
            <div className="currentPrice">${currentPrice.toFixed(0)}</div>
          </S.Price>
        </S.Content>
      </S.ItemCard>
    </>
  );
}
