import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const { dispatch, remaining } = useContext(AppContext);
  const [cost, setCost] = useState(budget);
  const budgetTrack = event => {
    event.preventDefault();
    if (cost > 20000) {
      alert("the budget cannot exceed 20000");
    } else {
      setCost(event.target.value);
    }
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}{" "}
        <input
          required="required"
          type="number"
          id="cost"
          value={cost}
          step={10}
          style={{ marginLeft: "2rem", size: 10 }}
          onChange={event => budgetTrack(event)}
        ></input>
      </span>
    </div>
  );
};
export default Budget;
