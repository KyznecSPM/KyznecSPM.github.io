import { useContext } from "react";

import { ResponsiveContext } from "grommet";

import { WindowSize } from "../utils";

export const useAdaptiveSizeMap = (sizeMap: {
  [key in WindowSize]: string;
}) => {
  const size = useContext(ResponsiveContext) as WindowSize;
  return sizeMap[size];
};
