import { grommet, ThemeType } from "grommet";

import { deepMerge } from "grommet/utils";

export const theme: ThemeType = deepMerge(grommet, {
  global: {
    font: {
      family: "Montserrat",
    },
    breakpoints: {
      small: {
        value: 425,
      },
      medium: {
        value: 1023,
      },
      large: {
        value: 2000,
      },
      xlarge: {
        value: 2000,
      },
    },
  },
  button: {
    color: "brand",
  },
});
