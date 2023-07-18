import { styled } from "styled-components";

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;

  .currentPrice {
    font-weight: bold;
    font-size: 18px;
  }

  .comparePrice {
    display: flex;

    .price {
      text-decoration: line-through;
    }

    .discount {
      margin-left: 12px;
    }
  }
`;
