import { useMemo } from "react";
import * as S from "./style";

type ComparePriceProps = {
  currentPrice: number;
  comparePrice?: number;
};

export default function ComparePrice({
  currentPrice,
  comparePrice,
}: ComparePriceProps) {
  const discount: string | null = useMemo(() => {
    if (currentPrice && comparePrice) {
      const discountPercentage = (1 - currentPrice / comparePrice) * 100;
      return discountPercentage.toFixed(0);
    }
    return null;
  }, [currentPrice, comparePrice]);

  return (
    <>
      <S.PriceDiv>
        <div className="currentPrice">${currentPrice}</div>
        {discount && parseInt(discount) > 0 && (
          <div className="comparePrice">
            <div className="price">${comparePrice}</div>
            <div className="discount">Save {discount}%</div>
          </div>
        )}
      </S.PriceDiv>
    </>
  );
}
