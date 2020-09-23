import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@storybook/addon-console";
import { addDecorator, addParameters } from "@storybook/vue";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
