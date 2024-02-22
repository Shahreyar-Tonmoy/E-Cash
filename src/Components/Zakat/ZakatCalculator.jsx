// ZakatCalculator.js
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateZakat } from './Actions/zakatActions';


const ZakatCalculator = () => {
  const dispatch = useDispatch();
  const zakatAmount = useSelector((state) => state.zakat.zakatAmount);

  const [savings, setSavings] = useState(0);

  const handleCalculateZakat = () => {
    dispatch(calculateZakat(parseFloat(savings)));
  };

  return (
    <div className="mx-auto p-5 px-6 bg-white rounded-xl shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Zakat Calculator</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Savings (in BDT): </label>
        <input
          type="text"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button onClick={handleCalculateZakat} className="btn bg-transparent text-violet-950 hover:bg-transparent hover:border-violet-950 rounded-2xl border-violet-950 mb-3 border">Calculate Zakat</button>
  
      <div className="mt-4">
        <p className="text-lg font-semibold">Your Zakat amount is: {zakatAmount.toFixed(2)} BDT</p>
      </div>
    </div>
  );
};

export default ZakatCalculator;
