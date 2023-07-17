import { Card, CardMedia, CardMediaProps } from "@mui/material";
import { styled } from "styled-components";

export const ItemCard = styled(Card)<CardMediaProps>`
  height: 430px;
  width: 250px;
  background-color: green;

  &:hover {
    cursor: pointer;
  }
`;

export const CardImage = styled(CardMedia)<CardMediaProps>`
  height: 250px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  width: 100%;
  background-color: yellow;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Info = styled.div`
  .vendor {
    font-size: 18px;
    font-weight: bold;
  }

  .title {
    font-size: 14px;
  }

  .newArrival {
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Price = styled.div``;
