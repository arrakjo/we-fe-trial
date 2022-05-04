import "./Calculator.css";
import { useState } from "react";

function Calculator() {
  // Input fields and checkbox states
  const [check, setCheck] = useState(false);
  const [income, setIncome] = useState("");
  const [daysInput, setDaysInput] = useState("");

  // Set the employer compensation states
  const [eDays, setEmployerDays] = useState(0);
  const [eComp, setEmployerComp] = useState(0);
  const [eAllowance, setEmployerAllowance] = useState(0);

  // Set the insurance compensation states
  const [iDays, setInsuranceDays] = useState(0);
  const [iComp, setInsuranceComp] = useState(0);
  const [iAllowance, setInsuranceAllowance] = useState(0);

  // Set the total amount states
  const [tDays, setTotalDays] = useState(0);
  const [tComp, setTotalComp] = useState(0);

  // Handle checkbox state change
  const handleCheck = () => {
    setCheck(!check);
  };

  // Reset to zero if compensation criteria is not met
  const setNull = () => {
    setEmployerDays(0);
    setEmployerComp(0);
    setEmployerAllowance(0);
    setInsuranceDays(0);
    setInsuranceComp(0);
    setInsuranceAllowance(0);
    setTotalDays(0);
    setTotalComp(0);
  };

  // Specify the amount of decimals always shown on amounts
  const dec = { minimumFractionDigits: 2, maximumFractionDigits: 2 };

  // Find the daily compensation amount
  let dailyCompensation = ((income * 12) / 365) * 0.7;

  // Handle the compensation calculation depending on the user inputs
  const handleCalculate = () => {
    if (daysInput >= 4 && daysInput <= 8) {
      let employerDays = daysInput - 3;

      setEmployerDays(daysInput - 3);
      setEmployerComp(employerDays * dailyCompensation);
      setEmployerAllowance(dailyCompensation);

      setTotalDays(daysInput - 3);
      setTotalComp(employerDays * dailyCompensation);
    } else if (daysInput >= 9 && daysInput <= 182) {
      let employerDays = 5;
      let insuranceDays = daysInput - 8;

      setEmployerDays(employerDays);
      setEmployerComp(employerDays * dailyCompensation);
      setEmployerAllowance(dailyCompensation);

      setInsuranceDays(insuranceDays);
      setInsuranceComp(insuranceDays * dailyCompensation);
      setInsuranceAllowance(dailyCompensation);

      setTotalDays(daysInput - 3);
      setTotalComp((employerDays + insuranceDays) * dailyCompensation);
    } else if (check && daysInput >= 182 && daysInput < 240) {
      let employerDays = 5;
      let insuranceDays = daysInput - 8;

      setEmployerDays(employerDays);
      setEmployerComp(employerDays * dailyCompensation);
      setEmployerAllowance(dailyCompensation);

      setInsuranceDays(insuranceDays);
      setInsuranceComp(insuranceDays * dailyCompensation);
      setInsuranceAllowance(dailyCompensation);

      setTotalDays(daysInput - 3);
      setTotalComp((employerDays + insuranceDays) * dailyCompensation);
    } else if (check && daysInput >= 240) {
      let employerDays = 5;
      let insuranceDays = 232;

      setEmployerDays(employerDays);
      setEmployerComp(employerDays * dailyCompensation);
      setEmployerAllowance(dailyCompensation);

      setInsuranceDays(insuranceDays);
      setInsuranceComp(insuranceDays * dailyCompensation);
      setInsuranceAllowance(dailyCompensation);

      setTotalDays(240);
      setTotalComp((employerDays + insuranceDays) * dailyCompensation);
    } else if (!check && daysInput > 182) {
      let employerDays = 5;
      let insuranceDays = 174;

      setEmployerDays(employerDays);
      setEmployerComp(employerDays * dailyCompensation);
      setEmployerAllowance(dailyCompensation);

      setInsuranceDays(insuranceDays);
      setInsuranceComp(insuranceDays * dailyCompensation);
      setInsuranceAllowance(dailyCompensation);

      setTotalDays(174);
      setTotalComp((employerDays + insuranceDays) * dailyCompensation);
    } else setNull();
  };

  return (
    <div className="side-container">
      <div className="calculator">
        <div className="inner-container">
          <h2 className="title">Compensation Calculator</h2>
          {/* Input - income */}
          <div className="input-container">
            <p className="label">Average income</p>
            <div className="input-grad">
              <input
                type="number"
                className="input"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                aria-label="Your average income"
              />
              <p className="symbol">€</p>
            </div>
          </div>
          {/* Input - days */}
          <div className="input-container">
            <p className="label">Days on sick-leave</p>
            <div className="input-grad">
              <input
                type="number"
                className="input"
                value={daysInput}
                onChange={(e) => setDaysInput(e.target.value)}
                aria-label="Days on sick-leave"
              />
              <p className="symbol">days</p>
            </div>
          </div>
          {/* Checkbox */}
          <div className="input-container">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                value={check}
                onClick={handleCheck}
                aria-label="Tubercolosis checkbox"
              />
              I have tubercolosis
              <span className="checkmark"></span>
              <div className="check-grad"></div>
            </label>
          </div>
          {/* Calculate button */}
          <div className="input-container">
            <button onClick={handleCalculate} aria-label="Calculate">
              Calculate
            </button>
          </div>
          {/* Divider */}
          <div className="divider"></div>
          {/* Results - compensation */}
          <div className="results-container">
            <div className="results">
              <p className="results-title">
                The employer compensates
                <br />
                <span className="results-days">
                  {eDays.toLocaleString("et-EE")} days
                </span>
              </p>
              <p className="results-amount">
                {eComp.toLocaleString("et-EE", dec)}€
              </p>
              <p className="results-allowance">
                Daily allowance
                <br />
                <span>{eAllowance.toLocaleString("et-EE", dec)}</span> €
              </p>
            </div>
            <div className="results">
              <p className="results-title">
                Health Insurance compensates
                <br />
                <span className="results-days">
                  {iDays.toLocaleString("et-EE")} days
                </span>
              </p>
              <p className="results-amount">
                {iComp.toLocaleString("et-EE", dec)}€
              </p>
              <p className="results-allowance">
                Daily allowance
                <br />
                <span>{iAllowance.toLocaleString("et-EE", dec)}</span> €
              </p>
            </div>
          </div>
          {/* Divider */}
          <div className="divider"></div>
          {/* Total compensation */}
          <div className="total-container">
            <p className="total-title">
              Compensation total for {tDays.toLocaleString("et-EE")} days (net)
            </p>
            <p className="total-amount">
              {tComp.toLocaleString("et-EE", dec)}€
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
