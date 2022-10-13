import { ActionsTypes } from "../types/actionsTypes";

export const Clear = () => {
  return { type: ActionsTypes.CLEAR, payload: {} };
};

export const CreateData = (data) => {
  return { type: ActionsTypes.CREATE_EXPENSES_LIST, payload: data };
};

export const SortExpenses = (value) => {
  return { type: ActionsTypes.SORT_EXPENSES, payload: value };
};

export const DeleteItem = (data) => {
	return { type: "DELETE_EXPENSES_LIST", payload: data }
}
