import { useContext } from "react";

import { ResponsiveContext } from "grommet";

import { WindowSize } from "../utils";

export const useAdaptiveSizeMap = <T>(sizeMap: {
  [key in WindowSize]: T;
}) => {
  const size = useContext(ResponsiveContext) as WindowSize;
  return sizeMap[size];
};
