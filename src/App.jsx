import React, { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import ResultDisplay from "./components/ResultDisplay";

// Creamos un formateador para EUR con el estilo europeo
const euroFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function App() {
  const [formData, setFormData] = useState({});
  const [results, setResults] = useState(null);
  const [dataText, setDataText] = useState(null);

  // Función para manejar el envío del formulario y calcular
  const handleCalculate = (data) => {
    setFormData(data);

    // --- Lógica de cálculo (mantenemos la misma lógica simple) ---
    const principal = parseFloat(data.mortgageAmount);
    const termInYears = parseInt(data.mortgageTerm);
    const annualInterestRate = parseFloat(data.interestRate) / 100;
    const mortgageType = data.mortgageType;

    if (
      isNaN(principal) ||
      isNaN(termInYears) ||
      isNaN(annualInterestRate) ||
      !mortgageType
    ) {
      setResults(null);
      return;
    }

    let monthlyPayment = 0;
    let totalRepayment = 0;
    let totalResultText = "";
    let totalMonthlyText = "";

    const monthlyInterestRate = annualInterestRate / 12;
    if (mortgageType === "repayment") {
      //const monthlyInterestRate = annualInterestRate / 12;
      const numberOfPayments = termInYears * 12;

      if (monthlyInterestRate === 0) {
        monthlyPayment = principal / numberOfPayments;
      } else {
        monthlyPayment =
          (principal *
            (monthlyInterestRate *
              Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
          (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      }
      totalRepayment = monthlyPayment * numberOfPayments;
      setDataText({
        totalMonthlyText : 'Your monthly quota is: ' ,
        totalResultText : 'Your total payment is: ' ,
      }
      );
    } else if (mortgageType === "interestOnly") {
      //const monthlyInterestRate = annualInterestRate / 12;
      const numberOfPayments = termInYears * 12;
      monthlyPayment = principal * monthlyInterestRate;
      totalRepayment = monthlyPayment * numberOfPayments;
      setDataText({
        totalMonthlyText : 'Your monthly interest quota is: ' ,
        totalResultText : 'Your total interest payment is: ' ,
      }
      );
    }

    // --- Formatear los resultados usando el formateador de euros ---
    const formattedMonthlyPayment = euroFormatter.format(monthlyPayment);
    const formattedTotalRepayment = euroFormatter.format(totalRepayment);

    setResults({
      monthlyPayment: formattedMonthlyPayment,
      totalRepayment: formattedTotalRepayment,
    });
    // --- Fin de la lógica de cálculo y formateo ---
  };

  const handleClear = () => {
    setFormData({});
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 lg:p-8">
          <CalculatorForm onCalculate={handleCalculate} onClear={handleClear} />
        </div>
        <div
          className={`p-6 lg:p-8 text-white  lg:rounded-r-lg  flex flex-col lg:rounded-bl-[100px]
                     ${results ? "bg-slate5 items-start " : "bg-gray-800 items-center justify-center px-20"}`}
        >
          <ResultDisplay results={results} dataText={dataText} />
        </div>
      </div>
    </div>
  );
}

export default App;
