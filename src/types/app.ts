import type { ValuesOf } from "./utils";
import type { APP_STATUS } from "../constants";

export type AppStatus = ValuesOf<typeof APP_STATUS>;

export type IconProps = {
  size: number;
  color?: string;
};
