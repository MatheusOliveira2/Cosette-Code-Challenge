import type { Meta, StoryObj } from "@storybook/react";

import CatalogueItem from "./CatalogueItem";

const meta = {
  title: "Catalogue Item",
  component: CatalogueItem,
  tags: ["autodocs"],
} satisfies Meta<typeof CatalogueItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://cdn.shopify.com/s/files/1/0790/5008/0540/products/YSLLOUCAMPOCKETGDBK14_e7ff8350-a1d7-4e6b-915b-c61573485dfd.webp?v=1689996454",
    vendor: "PRADA",
    title: "Teste de title",
    newArrival: true,
    currentPrice: 2008,
    comparePrice: 2500,
  },
};

export const NoImage: Story = {
  args: {
    src: "",
    vendor: "PRADA",
    title: "Teste de title",
    newArrival: true,
    currentPrice: 2008,
    comparePrice: 2500,
  },
};

export const NoNewArrival: Story = {
  args: {
    src: "",
    vendor: "PRADA",
    title: "Teste de title",
    newArrival: false,
    currentPrice: 2008,
    comparePrice: 2500,
  },
};

export const NoComparePrice: Story = {
  args: {
    src: "https://cdn.shopify.com/s/files/1/0790/5008/0540/products/YSLLOUCAMPOCKETGDBK14_e7ff8350-a1d7-4e6b-915b-c61573485dfd.webp?v=1689996454",
    vendor: "PRADA",
    title: "Teste de title",
    newArrival: false,
    currentPrice: 2008,
  },
};
