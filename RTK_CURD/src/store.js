import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./services/api";
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(contactsApi.middleware);
  },
});

export {
  useFetchContactsQuery,
  useContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} from "./services/api";
