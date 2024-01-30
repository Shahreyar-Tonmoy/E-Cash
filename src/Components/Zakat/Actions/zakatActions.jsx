/* eslint-disable no-case-declarations */

export const calculateZakat = (savingsInUsd) => {
  // Replace with the actual conversion rate
  const savings = savingsInUsd 

  return {
    type: 'CALCULATE_ZAKAT',
    payload: {
      savings,
    },
  };
};
  

// reducers/zakatReducer.js
const initialState = {
  zakatAmount: 0,
};

const zakatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE_ZAKAT':
      const { savings } = action.payload;
      
      // Replace with the actual Zakat rate per unit of currency
      const zakatRatePerUnit = 0.025 ; // For example, if the Zakat rate is 100 BDT per unit

      // Calculate Zakat amount based on the fixed rate per unit
      const zakatAmount = Math.max(0, savings) * zakatRatePerUnit;
      return { ...state, zakatAmount };
    default:
      return state;
  }
};

export default zakatReducer;
  