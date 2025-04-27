import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import projectsReducer from "../features/projects/projectsSlice";
import documentsReducer from "../features/documents/documentsSlice";
import errorsReducer from "../features/errors/errorsSlice";
// RTK Query root API
import { api } from "./api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer,
    documents: documentsReducer,
    errors: errorsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;