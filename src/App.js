import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Expenses from "./components/Expenses";
import ExpensesTable from "./components/ExpensesTable";
import Sort from "./components/Sort";

function App() {
  const { balance, expenses, expList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch({ type: "CLEAR", payload: {} });
  };

  return (
    <div className="container mx-auto px-9">
      <div className="flex items-center justify-between sm:block">
        <h1 className="text-gray-900 text-4xl uppercase text-center py-7 sm:text-4xl">
          Your list expenses
        </h1>
        <div className="flex items-center sm:justify-between">
          <Sort />
          <button
            onClick={() => clear()}
            className="bg-gray-700 hover:bg-gray-900 ml-4 text-white font-bold py-2 px-4 rounded"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex items-center mt-14">
        <div className="bg-emerald-700 p-4 w-72 h-44 mr-2 rounded shadow-2xl">
          <h1 className="text-center text-4xl pb-4 text-white">Balance</h1>
          <h2 className="text-center text-white text-2xl">{balance} som</h2>
        </div>
        <div className="bg-pink-700 p-4 w-72 h-44 ml-2 rounded shadow-2xl">
          <h1 className="text-center text-4xl pb-4 text-white">Expenses</h1>
          <h2 className="text-center text-white text-2xl">{expenses} som</h2>
        </div>
      </div>
      <Expenses />
      {expList.length === 0 ? null : <ExpensesTable />}
    </div>
  );
}

export default App;
