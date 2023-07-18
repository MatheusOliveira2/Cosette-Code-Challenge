import type { Meta, StoryObj } from "@storybook/react";

import Catalogue from "./Catalogue";
import { mockItems } from "./mock";

const meta = {
  title: "Page/Catalogue",
  component: Catalogue,
  tags: ["autodocs"],
} satisfies Meta<typeof Catalogue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { items: mockItems },
};
