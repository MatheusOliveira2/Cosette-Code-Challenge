import type { Meta, StoryObj } from "@storybook/react";

import ComparePrice from "./ComparePrice";

const meta = {
  title: "Compare Price",
  component: ComparePrice,
  tags: ["autodocs"],
} satisfies Meta<typeof ComparePrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comparePrice: 100,
    currentPrice: 80,
  },
};
