// TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = () => {
  const [message, setMessage] = useState('');

  const handlePublish = async () => {
    try {
      const response = await fetch('https://e-cash-server-mongoose.vercel.app/transactions/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'user123',
          amount: 50.00,
          description: 'Purchase',
        }),
      });

      const data = await response.json();
      setMessage(data.message);
      console.log(data.message);
    } catch (error) {
      console.error('Error publishing transaction:', error);
      setMessage('Error publishing transaction');
    }
  };

  return (
    <div>
      <h2>Transaction Form</h2>
      <button onClick={handlePublish}>Publish Transaction</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TransactionForm;
