import React from "react";
import { useDispatch } from "react-redux";

const Sort = () => {
  const dispatch = useDispatch();
  const sortExpenses = () => {
     dispatch({type: "SORT_EXPENSES"})
	}

	const handleChange = (e) => {
     dispatch({type: "SORT_EXPENSES", payload: e.target.value})
	}

  return (
    <div className="flex items-center">
      <select
			  onChange={(e) => dispatch({type: "SORT_EXPENSES", payload: e.target.value})}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-22 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="highest">highest</option>
        <option value="lowest">lowest</option>
      </select>
      {/* <button 
			  onClick={() => sortExpenses()}
			  className="bg-pink-600 hover:bg-pink-700 text-white font-boldpy-2 px-4 rounded mx-2">
        Sort
      </button> */}
    </div>
  );
};

export default Sort;
