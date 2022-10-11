import React from "react";
import { useSelector } from "react-redux";
import TableItem from "./TableItem";

const ExpensesTable = () => {
  const { expList } = useSelector((s) => s);

  return (
    <div className="overflow-x-auto">
      <table className="table-fixed w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="border sm:w-48 py-3 px-6">#</th>
            <th scope="col" className="border sm:w-48 py-3 px-6">Date of purchase</th>
            <th scope="col" className="border sm:w-48 py-3 px-6">Product name</th>
            <th scope="col" className="border sm:w-48 py-3 px-6">Price</th>
            <th scope="col" className="border sm:w-48 py-3 px-6">X</th>
          </tr>
        </thead>
        <tbody>
          {expList.map((el, idx) => (
            <TableItem key={idx} idx={idx} item={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
