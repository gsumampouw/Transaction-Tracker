import { useRef, useState } from "react";
import Classes from "./FutureExpenseForm.module.css";

function FutureExpenseForm() {
  const periodInputRef = useRef();
  const currentValInputRef = useRef();
  const interestInputRef = useRef();
  const [valueCalculated, setValueCalculated] = useState(0);

  function submitHandler(event) {
    event.preventDefault();

    const periodEntered = periodInputRef.current.value;
    const currentValEntered = currentValInputRef.current.value;
    const interestEntered = interestInputRef.current.value;

    setValueCalculated(
      (
        currentValEntered * Math.pow(1 + interestEntered, periodEntered)
      ).toFixed(2)
    );
  }

  return (
    <div>
      <h3>Future Expense Calculator</h3>
      <form className={Classes.form} onSubmit={submitHandler}>
        <div className={Classes.inputs}>
          <label htmlFor="periods">Number of Periods </label>
          <input type="text" id="periods" ref={periodInputRef} />
        </div>
        <div className={Classes.inputs}>
          <label htmlFor="currentValue">Current Expense </label>
          <input type="text" id="currentValue" ref={currentValInputRef} />
        </div>
        <div className={Classes.inputs}>
          <label htmlFor="interest">Interest Rate (I/Y) </label>
          <input type="text" id="interest" ref={interestInputRef} />
        </div>
        <div className={Classes.calculateButton}>
          <button>Calculate</button>
        </div>
      </form>
      <h3>Future Value ${valueCalculated}</h3>
    </div>
  );
}

export default FutureExpenseForm;
