import {configureStore} from "@reduxjs/toolkit";

import miscSlice from "./features/misc/miscSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      misc: miscSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
