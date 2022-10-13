import { ActionsTypes } from "../types/actionsTypes";
const initialValue = {
  balance: 20000,
  expenses: 0,
  expList: [],
  expensesItem: {},
};

export const Reducer = (state = initialValue, action) => {
  switch (action.type) {
    case ActionsTypes.CREATE_EXPENSES_LIST:
      state.expensesItem = { ...action.payload };
      state.balance = state.balance - +state.expensesItem.spent;
      state.expenses = state.expenses + +state.expensesItem.spent;
      return { ...state, expList: [...state.expList, state.expensesItem] };
    case ActionsTypes.DELETE_EXPENSES_LIST:
      const deletedItem = state.expList[action.payload];
      state.balance = state.balance + +deletedItem.spent;
      state.expenses = state.expenses - +deletedItem.spent;
      return {
        ...state,
        expList: state.expList.filter((el, idx) => idx !== action.payload),
      };
    case ActionsTypes.CLEAR:
      return {
        ...initialValue,
        balance: state.balance + +state.expenses,
        expenses: 0,
      };
    case ActionsTypes.SORT_EXPENSES:
      const sortItem = [...state.expList];
      sortItem.sort((a, b) => {
        if (action.payload === "A-Z") {
          return a.product > b.product ? 1 : -1;
        }
        if (action.payload === "Z-A") {
          return a.product > b.product ? -1 : 1;
        }
        if (action.payload === "highest") {
          return a.spent - b.spent;
        }
        if (action.payload === "lowest") {
          return b.spent - a.spent;
        }
      });
      return { ...state, expList: [...sortItem] };
    default:
      return state;
  }
};
