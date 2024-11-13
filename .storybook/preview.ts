import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
          //method: "alphabetical",
          order: ["Introduction", "Configure"],
          //  locales: 'en-US',
      },
  },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
          { name: "light", value: "#F8F9FF" },
          { name: "dark", value: "#000000" },
          // Add more backgrounds as needed
      ],
  },
  },
};

// Dynamically load the Iconify script
const script = document.createElement("script");
script.src = "https://code.iconify.design/2/2.0.3/iconify.min.js";
script.async = true;
document.head.appendChild(script);

export default preview;
