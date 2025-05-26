function ResultDisplay({ results, dataText }) {
  return (
    <div className="text-center">
      {results ? (
        <>
          <h2 className="text-xl font-bold mb-4 text-gray-200 text-left">
            Your results
          </h2>
          <p className="text-normal text-gray-200 text-left pb-6">
            Your results are shown below based on the information yoy provided.
            To adjust the results , edit the form and click "calculate
            repayments" again.
          </p>
          <div className="bg-slate6 rounded-lg p-6 border-t-4 border-lime">
            <p className="text-sm font-bold text-gray-100 mb-2">
              {dataText.totalMonthlyText} 
            </p>
            <p className="text-4xl font-bold text-lime-400 mb-4">
              {results.monthlyPayment}
            </p>
            <hr className="border-slate4 mb-4" />
            <p className="text-normal text-gray-100 mb-2">
              {dataText.totalResultText} 
            </p>
            <p className="text-lg font-bold text-gray-100">
              {results.totalRepayment}
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src="/images/illustration-empty.svg"
            alt="Calculator Icon"
            className="size-40 mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-gray-100">
            Results shown here
          </h2>
          <p className="text-sm text-gray-300">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultDisplay;
