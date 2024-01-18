import React, { useState } from "react";
import "./Number.css";
function PhoneNumberForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleDigitClick = (digit) => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + digit);
  };
  const handleDelete = () => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
  };
  const handleFormSubmit = (e) => {
    prevPhoneNumber = "";
    e.preventDefault();
  };
  return (
    <div className="card">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="phoneNumber" >Telephone Number:</label>
        <div className="phone-input-container">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            readOnly
          />
          <div className="button">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
              <button
                key={digit}
                type="button"
                onClick={() => handleDigitClick(digit)}
              >
                {digit}
              </button>
            ))}
            <button type="button" className="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}
export default PhoneNumberForm;
