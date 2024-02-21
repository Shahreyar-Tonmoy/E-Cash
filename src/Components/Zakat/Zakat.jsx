import { Provider } from "react-redux";
import ZakatCalculator from "./ZakatCalculator";
import store from "../Zakat/Reducers/store";
const Zakat = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6">
      <div className=" lg:flex  mt-40  rounded-none ">
        <div className="card-body flex-1">
          <h2 className="text-3xl font-WorkSans font-semibold">
            Zakat Calculator
          </h2>
          <p className="text-lg">
          A Zakat calculator is a digital tool designed to assist Muslims in determining the precise amount of Zakat (charitable donation) owed based on their financial assets. It streamlines the process by considering various factors like savings, investments, and debts to calculate the obligatory contribution.</p>
        </div>

        <figure className=" flex-1">
          <Provider store={store}>
            <div className="App">
              <ZakatCalculator />
            </div>
          </Provider>
        </figure>
      </div>
      
    </div>
  );
};
export default Zakat;
