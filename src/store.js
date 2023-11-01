import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./slices";

export default configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
