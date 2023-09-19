import { createContext } from "react";

import { APP_STATUS } from "./constants";
import type { AppStatus } from "./types/app";

type AppStatusContextState = {
  appStatus: AppStatus;
};

const initialState: AppStatusContextState = {
  appStatus: APP_STATUS.LOADING,
};

const AppStatusContext = createContext(initialState);

export default AppStatusContext;
