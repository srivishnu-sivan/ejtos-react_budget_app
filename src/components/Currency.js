import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
const CurrencyDropdown = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleCurrencyChange = event => {
    setSelectedCurrency(event.target.value);
    console.log("hello", event.target.value);
    // CHG_CURRENCY
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };

  return (
    <div>
      <h2>Select a currency:</h2>
      <select
        value={selectedCurrency}
        onChange={event => handleCurrencyChange(event)}
      >
        <option value="">-- Select Currency --</option>
        <option value="$">Dollar $</option>
        <option value="€">Euro €</option>
        <option value="£">Pound £</option>
        <option value="₹"> Ruppee ₹</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
