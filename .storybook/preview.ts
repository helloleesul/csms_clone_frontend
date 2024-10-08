import type { Preview } from "@storybook/react";
import "@sun-typeface/SUIT/fonts/static/woff2/SUIT.css";

import "../src/index.css";
import "../src/shared/assets/fonts/gotham/Gotham.css";

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
