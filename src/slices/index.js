import { createSlice } from "@reduxjs/toolkit";

import { recentTransactions } from "../data";

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    accountBalance: 12000,
    transactionList: recentTransactions,
  },
  reducers: {
    deposit: (state, action) => {
      const amount = Number(action.payload.amount);
      state.accountBalance = state.accountBalance + amount;
      state.transactionList.push(action.payload);
    },
    withdraw: (state, action) => {
      const amount = Number(action.payload.amount);
      state.accountBalance = state.accountBalance - amount;
      state.transactionList.push(action.payload);
    },
  },
});

export const { deposit, withdraw } = transactionSlice.actions;

export default transactionSlice.reducer;
