import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({userInput}){
  const resultData = calculateInvestmentResults(userInput);
  const resultDataHeaders = ['Year', 'Investment Value', 'Interest (Year)', 'Total Interest', 'Invested Capital'];
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <section>
      <table id="result" className="center">
        <thead>
          <tr>
            {resultDataHeaders.map((value, key) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {resultData.map((row) => {
            const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
            const totalAmountInvested = row.valueEndOfYear - totalInterest;
            return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
            )
          })}
          
        </tbody>
      </table>
    </section>
  )
}