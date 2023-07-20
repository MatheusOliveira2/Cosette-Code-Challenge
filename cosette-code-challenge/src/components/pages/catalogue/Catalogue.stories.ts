/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";

import Catalogue from "./Catalogue";
import {
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@storybook/testing-library";

const meta = {
  title: "Page/Catalogue",
  component: Catalogue,
  tags: ["autodocs"],
} satisfies Meta<typeof Catalogue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("loading")).toBeInTheDocument();
    await waitForElementToBeRemoved(
      document.querySelector('[data-testid="loading"]')
    );
    await expect(canvas.getByText("SAINT LAURENT")).toBeInTheDocument();

    await userEvent.click(canvas.getByLabelText("Go to page 2"));

    await waitForElementToBeRemoved(
      document.querySelector('[data-testid="loading"]')
    );
    await expect(canvas.getByText("JACQUEMUS")).toBeInTheDocument();
  },
};
