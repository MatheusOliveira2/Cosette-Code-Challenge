import type { Meta, StoryObj } from "@storybook/react";

import CatalogueItem from "./CatalogueItem";

const meta = {
  title: "Catalogue Item",
  component: CatalogueItem,
  tags: ["autodocs"],
} satisfies Meta<typeof CatalogueItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "https://cdn.shopify.com/s/files/1/0790/5008/0540/products/Main_c8ff0b5d-c712-429a-be00-b29bd55cbc9d.jpg?v=1689582653",
    vendor: "PRADA",
    title: "Teste de title",
    newArrival: true,
    currentPrice: 2008,
  },
};
