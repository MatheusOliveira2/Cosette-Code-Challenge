import type { Preview } from "@storybook/react";
import React from "react";
import GlobalStyle from "../src/globalStyle";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../src/themes/defaultTheme";
import { initialize, mswLoader } from "msw-storybook-addon";

// Initialize MSW
initialize({ onUnhandledRequest: "bypass" });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
