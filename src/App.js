import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Expenses from "./components/Expenses";
import ExpensesTable from "./components/ExpensesTable";
import Sort from "./components/Sort";

function App() {
  const { balance, expenses, expList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch({type: "CLEAR", payload: {}})
  }



  return (
    <div className="container mx-auto px-9">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-900 text-6xl text-center py-7 ">
          Your list expenses
        </h1>
        <Sort/>
        <button 
          onClick={() => clear()}
					className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Clear
          </button>
      </div>

      <div>
        <div className="flex items-center">
          <div className="bg-emerald-700 p-4 w-72 m-2 rounded">
            <h1 className="text-center text-4xl pb-4 text-white">Balance</h1>
            <h2 className="text-center text-white text-2xl">{balance} som</h2>
          </div>
          <div className="bg-pink-700 p-4 w-72 m-2 rounded">
            <h1 className="text-center text-4xl pb-4 text-white">Expenses</h1>
            <h2 className="text-center text-white text-2xl">{expenses} som</h2>
          </div>
        </div>
      </div>
      <Expenses />
      {expList.length === 0 ? null : <ExpensesTable />}
    </div>
  );
}

export default App;
