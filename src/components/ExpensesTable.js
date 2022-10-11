import React from "react";
import { useSelector } from "react-redux";
import TableItem from "./TableItem";

const ExpensesTable = () => {
  const { expList } = useSelector((s) => s);

  return (
    <div>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="border w-1/4 px-4 py-2 text-start">#</th>
            <th className="border w-1/4 px-4 py-2 text-start">Date of purchase</th>
            <th className="border w-1/4 px-4 py-2 text-start">Product name</th>
            <th className="border w-1/4 px-4 py-2 text-start">Price</th>
            <th className="border w-1/6 px-4 py-2 text-start">X</th>
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
