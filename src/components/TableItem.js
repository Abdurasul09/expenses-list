import React from "react";
import { useDispatch } from "react-redux";

const TableItem = ({ item, idx }) => {
  const dispatch = useDispatch();

  const deleteItem = (idx) => {
    dispatch({ type: "DELETE_EXPENSES_LIST", payload: idx });
  };

  return (
    <tr>
      <td className="border px-4 py-2">{idx + 1}</td>
      <td className="border px-4 py-2">{item.date}</td>
      <td className="border px-4 py-2">{item.product}</td>
      <td className="border px-4 py-2">{item.spent}</td>
      <td className="border px-4 py-2">
        <button
          onClick={() => deleteItem(idx)}
          className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
