import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Expenses = () => {
  const [history, setHistory] = useState({
    date: "",
    product: "",
    spent: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setHistory({ ...history, [e.target.name]: e.target.value });
  };

  const createData = (e) => {
    e.preventDefault();
    dispatch({ type: "CREATE_EXPENSES_LIST", payload: history });
    setHistory({
      date: "",
      product: "",
      spent: "",
    });
  };

  return (
    <div className="my-9">
      <form className="flex items-center justify-between sm:block" onSubmit={createData}>
        <div className="w-56">
          <input
            type="date"
            name="date"
            value={history.date}
            onChange={handleChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>
        <div className="w-56">
          <input
            type="text"
            name="product"
            value={history.product}
            onChange={handleChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>
        <div className="w-56">
          <input
            type="text"
            name="spent"
            value={history.spent}
            onChange={handleChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>
        <div className="w-56 sm:mt-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default Expenses;
