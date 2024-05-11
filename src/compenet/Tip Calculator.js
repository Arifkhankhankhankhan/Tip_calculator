import React, { useState } from 'react';


const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [totalBill, setTotalBill] = useState('');

  const handleCalculate = () => {
    if (!billAmount || !tipPercentage) {
      alert('Please enter the values');
      return;
    } else if (parseFloat(billAmount) < 0 || parseFloat(tipPercentage) < 0) {
      alert('Please enter positive values');
      return;
    } else {
      const billAmountValue = parseFloat(billAmount);
      const tipPercentageValue = parseFloat(tipPercentage);
      const tipAmount = billAmountValue * (tipPercentageValue / 100);
      const totalBillValue = billAmountValue + tipAmount;
      setTotalBill(totalBillValue.toFixed(2)); // Round to 2 decimal places
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Tip Calculator</h1>
      </div>
      <div className="bill">
        <label htmlFor="bill-info" className="bill-info">
          Bill Amount
        </label>
        <input
          type="number"
          id="bill-amount"
          placeholder="Enter your Bill Amount"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>
      <div className="tip">
        <label htmlFor="tip-info" className="tip-info">
          Tip Percentage
        </label>
        <input
          type="number"
          id="tip-percentage"
          placeholder="Enter your Tip Percentage"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
      </div>
      <div className="button">
        <button id="calculate" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
      <div className="result">
        <p>
          Your total Bill is <span id="total-bill">{totalBill}</span>
        </p>
      </div>
    </div>
  );
};

export default TipCalculator;
