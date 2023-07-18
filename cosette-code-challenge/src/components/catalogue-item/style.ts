import { Card, CardMedia, CardMediaProps } from "@mui/material";
import { styled } from "styled-components";

export const ItemCard = styled(Card)<CardMediaProps>`
  height: 370px;
  width: 250px;

  &:hover {
    cursor: pointer;
  }
`;

export const CardImage = styled(CardMedia)<CardMediaProps>`
  height: 250px;

  &:hover {
    transform: scale(1);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
`;

export const Info = styled.div`
  padding: 8px 4px;
  .vendor {
    font-size: 18px;
    font-weight: bold;
  }

  .title {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .newArrival {
    font-size: 12px;
    font-weight: bold;

    &.hidden {
      visibility: hidden;
    }
  }
`;

export const Price = styled.div`
  padding: 8px 4px;
`;
