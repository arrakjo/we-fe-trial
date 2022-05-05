import "./Calculator.css";
import { useState } from "react";

function Calculator() {
  // Input fields and checkbox states
  const [check, setCheck] = useState(false);
  const [income, setIncome] = useState("");
  const [daysInput, setDaysInput] = useState("");

  // Set the employer compensation states
  const [employer, setEmployer] = useState({
    days: 0,
    compensation: 0,
    allowance: 0,
  });

  // Set the insurance compensation states
  const [insurance, setInsurance] = useState({
    days: 0,
    compensation: 0,
    allowance: 0,
  });

  // Set the total amount states
  const [total, setTotal] = useState({
    days: 0,
    compensation: 0,
  });

  // Handle checkbox state change
  const handleCheck = () => {
    setCheck(!check);
  };

  // Reset the results to zero
  const setNull = () => {
    setEmployer({
      days: 0,
      compensation: 0,
      allowance: 0,
    });
    setInsurance({
      days: 0,
      compensation: 0,
      allowance: 0,
    });
    setTotal({
      days: 0,
      compensation: 0,
    });
  };

  // Specify the amount of decimals always shown on amounts
  const dec = { minimumFractionDigits: 2, maximumFractionDigits: 2 };

  // Find the daily compensation amount
  let dailyCompensation = ((income * 12) / 365) * 0.7;

  // Handle the compensation calculation depending on the user inputs
  const handleCalculate = () => {
    if (daysInput >= 4 && daysInput <= 8) {
      let employerDays = daysInput - 3;
      let employerComp = employerDays * dailyCompensation;

      setEmployer({
        days: employerDays,
        compensation: employerComp,
        allowance: dailyCompensation,
      });
      setInsurance({
        days: 0,
        compensation: 0,
        allowance: 0,
      });
      setTotal({
        days: employerDays,
        compensation: employerComp,
      });
    } else if (daysInput >= 9 && daysInput <= 182) {
      let employerDays = 5;
      let employerComp = employerDays * dailyCompensation;
      let insuranceDays = daysInput - 8;
      let insuranceComp = insuranceDays * dailyCompensation;
      let totalDays = daysInput - 3;
      let totalComp = (employerDays + insuranceDays) * dailyCompensation;

      setEmployer({
        days: employerDays,
        compensation: employerComp,
        allowance: dailyCompensation,
      });
      setInsurance({
        days: insuranceDays,
        compensation: insuranceComp,
        allowance: dailyCompensation,
      });
      setTotal({
        days: totalDays,
        compensation: totalComp,
      });
    } else if (check && daysInput >= 182 && daysInput < 240) {
      let employerDays = 5;
      let employerComp = employerDays * dailyCompensation;
      let insuranceDays = daysInput - 8;
      let insuranceComp = insuranceDays * dailyCompensation;
      let totalDays = daysInput - 3;
      let totalComp = (employerDays + insuranceDays) * dailyCompensation;

      setEmployer({
        days: employerDays,
        compensation: employerComp,
        allowance: dailyCompensation,
      });
      setInsurance({
        days: insuranceDays,
        compensation: insuranceComp,
        allowance: dailyCompensation,
      });
      setTotal({
        days: totalDays,
        compensation: totalComp,
      });
    } else if (check && daysInput >= 240) {
      let employerDays = 5;
      let employerComp = employerDays * dailyCompensation;
      let insuranceDays = 232;
      let insuranceComp = insuranceDays * dailyCompensation;
      let totalDays = 240;
      let totalComp = (employerDays + insuranceDays) * dailyCompensation;

      setEmployer({
        days: employerDays,
        compensation: employerComp,
        allowance: dailyCompensation,
      });
      setInsurance({
        days: insuranceDays,
        compensation: insuranceComp,
        allowance: dailyCompensation,
      });
      setTotal({
        days: totalDays,
        compensation: totalComp,
      });
    } else if (!check && daysInput > 182) {
      let employerDays = 5;
      let employerComp = employerDays * dailyCompensation;
      let insuranceDays = 174;
      let insuranceComp = insuranceDays * dailyCompensation;
      let totalDays = 179;
      let totalComp = (employerDays + insuranceDays) * dailyCompensation;

      setEmployer({
        days: employerDays,
        compensation: employerComp,
        allowance: dailyCompensation,
      });
      setInsurance({
        days: insuranceDays,
        compensation: insuranceComp,
        allowance: dailyCompensation,
      });
      setTotal({
        days: totalDays,
        compensation: totalComp,
      });
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
                  {employer.days.toLocaleString("et-EE")} days
                </span>
              </p>
              <p className="results-amount">
                {employer.compensation.toLocaleString("et-EE", dec)}€
              </p>
              <p className="results-allowance">
                Daily allowance
                <br />
                <span>{employer.allowance.toLocaleString("et-EE", dec)}</span> €
              </p>
            </div>
            <div className="results">
              <p className="results-title">
                Health Insurance compensates
                <br />
                <span className="results-days">
                  {insurance.days.toLocaleString("et-EE")} days
                </span>
              </p>
              <p className="results-amount">
                {insurance.compensation.toLocaleString("et-EE", dec)}€
              </p>
              <p className="results-allowance">
                Daily allowance
                <br />
                <span>
                  {insurance.allowance.toLocaleString("et-EE", dec)}
                </span>{" "}
                €
              </p>
            </div>
          </div>
          {/* Divider */}
          <div className="divider"></div>
          {/* Total compensation */}
          <div className="total-container">
            <p className="total-title">
              Compensation total for {total.days.toLocaleString("et-EE")} days
              (net)
            </p>
            <p className="total-amount">
              {total.compensation.toLocaleString("et-EE", dec)}€
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
