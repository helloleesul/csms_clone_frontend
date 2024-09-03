import type { Preview } from "@storybook/react";
import "@sun-typeface/SUIT/fonts/variable/woff2/SUIT-Variable.css";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
