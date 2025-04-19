import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { instructorApi } from "./services/InstructorApi";
import { graduatesApi } from "./services/GraduatesApi";
import { coursesApi } from "./services/coursesApi";
import { partnersApi } from "./services/partnersApi";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [instructorApi.reducerPath]: instructorApi.reducer,
    [graduatesApi.reducerPath]: graduatesApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [partnersApi.reducerPath]: partnersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      instructorApi.middleware,
      graduatesApi.middleware,
      coursesApi.middleware,
      partnersApi.middleware,
    )
});

setupListeners(store.dispatch);
