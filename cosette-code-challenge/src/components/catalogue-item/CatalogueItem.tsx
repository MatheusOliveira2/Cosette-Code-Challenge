import * as S from "./style";
import noImage from "../../assets/no-image-available.jpeg";
import { CardContent } from "@mui/material";

type CatalogueItemProps = {
  src: string;
  vendor: string;
  title: string;
  newArrival: boolean;
};
export default function CatalogueItem({
  src,
  vendor,
  title,
  newArrival,
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
            {newArrival && <div className="newArrival">New Arrival</div>}
            <div className="vendor">{vendor}</div>
            <div className="title">{title}</div>
          </S.Info>
          <S.Price></S.Price>
        </S.Content>
      </S.ItemCard>
    </>
  );
}
