import type { ValuesOf } from "./utils";
import type ROUTES from "../routes";

export type RootStackRoutes = ValuesOf<typeof ROUTES>;

export type RootStackParamsList = {
  [ROUTES.Home]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
