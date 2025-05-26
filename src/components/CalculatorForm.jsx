import React, { useState } from "react";

function CalculatorForm({ onCalculate, onClear }) {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mortgageAmount || !mortgageTerm || !interestRate || !mortgageType) {
      alert("Please, fill all fields.");
      return;
    }
    onCalculate({ mortgageAmount, mortgageTerm, interestRate, mortgageType });
  };

  const handleClearClick = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="mb-6 flex flex-col lg:flex-row lg:gap-12 lg:items-center">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">
            Mortgage Calculator
          </h1>
          <p
            className="text-gray-600 hover:text-gray-800 py-2 px-4 text-normal focus:outline-none focus:shadow-outline underline underline-offset-2 cursor-pointer"
            type="button"
            onClick={handleClearClick}
          >
            Clear All
          </p>
        </div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="mortgageAmount"
        >
          Mortage MortgageAmount
        </label>
        <div className="relative pl-2">
          <span className="absolute inset-y-0 left-0 pr-2 flex items-center px-3 text-gray-700 bg-sky-200">
            €
          </span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mortgageAmount"
            type="number"
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mortgageTerm"
          >
            Mortage Term
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mortgageTerm"
              type="number"
              value={mortgageTerm}
              onChange={(e) => setMortgageTerm(e.target.value)}
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 bg-sky-200">
              years
            </span>
          </div>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="interestRate"
          >
            Interest Rate
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="interestRate"
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 bg-sky-200">
              %
            </span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mortage Type
        </label>
        <div className="flex flex-col space-y-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-lime-600"
              name="mortgageType"
              value="repayment"
              checked={mortgageType === "repayment"}
              onChange={(e) => setMortgageType(e.target.value)}
              required
            />
            <span className="ml-2 text-gray-700">Repayment</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-lime-600"
              name="mortgageType"
              value="interestOnly"
              checked={mortgageType === "interestOnly"}
              onChange={(e) => setMortgageType(e.target.value)}
              required
            />
            <span className="ml-2 text-gray-700">Only Interest</span>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-lime hover:bg-lime-400 flex items-center gap-2 text-slate5 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 cursor-pointer"
          type="submit"
        >
          <img src="/images/icon-calculator.svg" alt="Logo" className="size-5" />
          Calculate Repayments
        </button>
      </div>
    </form>
  );
}

export default CalculatorForm;
