/* eslint-disable */

import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";

import Catalogue from "./Catalogue";
import {
  userEvent,
  waitForElementToBeRemoved,
  within,
} from "@storybook/testing-library";
import { page1, page2 } from "./mock";

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
    await expect(canvas.getByText("Bag 01")).toBeInTheDocument();
    await expect(canvas.getByText("Bag 20")).toBeInTheDocument();
  },
};

Default.parameters = {
  msw: {
    handlers: {
      products: rest.get("http://localhost:3333/products", (req, res, ctx) => {
        return res(
          ctx.json({
            products: page1,
          })
        );
      }),
    },
  },
};

export const Loading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("loading")).toBeInTheDocument();
  },
};

Loading.parameters = {
  msw: {
    handlers: [
      rest.get("http://localhost:3333/products", (_req, res, ctx) => {
        return res(ctx.delay("infinite"));
      }),
    ],
  },
};

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("loading")).toBeInTheDocument();
    await waitForElementToBeRemoved(
      document.querySelector('[data-testid="loading"]')
    );
    await expect(canvas.getByTestId("error")).toBeInTheDocument();
  },
};

Error.parameters = {
  msw: {
    handlers: [
      rest.get("http://localhost:3333/products", (_req, res, ctx) => {
        return res(ctx.status(400));
      }),
    ],
  },
};

export const Navigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("loading")).toBeInTheDocument();
    await waitForElementToBeRemoved(
      document.querySelector('[data-testid="loading"]')
    );
    await expect(canvas.getByText("Bag 01")).toBeInTheDocument();

    await userEvent.click(canvas.getByLabelText("Go to page 2"));

    await waitForElementToBeRemoved(
      document.querySelector('[data-testid="loading"]')
    );
    await expect(canvas.getByText("Bag 40")).toBeInTheDocument();
  },
};

Navigation.parameters = {
  msw: {
    handlers: {
      products: rest.get("http://localhost:3333/products", (req, res, ctx) => {
        console.log(req.url);
        if (req.url.search) {
          return res(
            ctx.json({
              products: page2,
            })
          );
        }

        return res(
          ctx.json({
            products: page1,
            nextPageParams: {
              limit: "20",
              page_info:
                "eyJsYXN0X2lkIjo4NDU4NzA5NDY3NDIwLCJsYXN0X3ZhbHVlIjoiQmFnIDIwIiwiZGlyZWN0aW9uIjoibmV4dCJ9",
            },
          })
        );
      }),
    },
  },
};
