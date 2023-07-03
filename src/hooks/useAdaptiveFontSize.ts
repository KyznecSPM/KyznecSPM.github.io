import { WindowSize } from "../utils";

import { useAdaptiveSizeMap } from "./useAdaptiveSize";

const FONT_SIZE = {
  [WindowSize.small]: "medium",
  [WindowSize.medium]: "medium",
  [WindowSize.large]: "large",
  [WindowSize.xlarge]: "xlarge",
};

export const useAdaptiveFontSize = () => {
  return useAdaptiveSizeMap(FONT_SIZE);
};
