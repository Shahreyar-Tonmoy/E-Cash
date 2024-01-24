import { useState, useEffect } from "react";
import axios from "axios";

const CurrencyCalculator = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BDT");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://v6.exchangerate-api.com/v6/a6f10e58171c0558714a0f58/latest/USD"
        );
        setExchangeRates(response.data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (exchangeRates) {
      const rate = exchangeRates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div>
    
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/xDWqkSx/Purple-Creative-We-re-Digital-Marketing-Expert-Banner-1.png)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
    <div className="hero min-h-screen ">
  <div className="hero-content text-white flex-col  py-16 lg:py-0 justify-between lg:flex-row">
    <div className="text-center px-10 lg:mx-40 lg:text-left">
      <h1 className="lg:text-5xl text-3xl mx-10 lg:mx-0 leading-normal font-Ubuntu font-bold">You Can Calculate <span className="text-violet-900">Your Currency</span></h1>
      <p className="py-6 leading-7 font-Kanit text-sm">Certainly, I can provide information about various currencies. Could you please specify which currency you are interested in?</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="flex justify-center items-center">
      <div>
        <div className="relative flex flex-col mb-10 mt-5 text-gray-700 bg-white  w-96 rounded-xl bg-clip-border">
          <div className="relative grid mx-4 mb-4  overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-r from-[#B46EA3] to-[#6F74BE] bg-clip-border shadow-gray-900/20">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
              Currency Calculator
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            {/* Amaount section */}

            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-violet-900  text-violet-900 outline outline-0 placeholder-shown:border placeholder-shown:border-violet-900 placeholder-shown:border-t-blue-gray-200  focus:border-2 focus:border-violet-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-violet-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-violet-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-violet-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Amount
              </label>
            </div>

            {/* From currency */}

            <div className="relative h-10  min-w-[200px]">
              <select
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
                className="peer h-full w-full rounded-[7px] border border-violet-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-violet-900 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-violet-900 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-violet-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                {exchangeRates &&
                  Object.keys(exchangeRates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-violet-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-violet-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-violet-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-violet-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                From
              </label>
            </div>

            <h1 className="text-center text-xl font-semibold">To</h1>

            {/* To currency */}

            <div className="relative h-10  min-w-[200px]">
              <select
                value={toCurrency}
                 onChange={handleToCurrencyChange}
                className="peer h-full w-full rounded-[7px] border border-violet-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-violet-900 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-violet-900 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-violet-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                {exchangeRates &&
                  Object.keys(exchangeRates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-violet-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-violet-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-violet-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-violet-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                To
              </label>
            </div>

            {/* Current Amaount */}

            <div className="relative h-10  min-w-[200px]">
              <div
                
                className="peer h-full w-full rounded-[7px] border border-violet-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-violet-900 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-violet-900 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-violet-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                {convertedAmount}
              </div>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-violet-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-violet-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-violet-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-violet-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Converted Amount
              </label>
            </div>


          </div>
        </div>
      </div>

      
    </div>
    </div>
  </div>
</div>
</div>


    </div>
  );
};

export default CurrencyCalculator;
