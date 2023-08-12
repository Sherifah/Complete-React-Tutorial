import React, { useState } from "react";

function BillInput({ billInput, bill }) {

  function handleBillInput(event) {
    billInput(Number(event.target.value))
  }

  return (
    <form className="mb-2">
      <label className="text">How much was the bill?</label>
      <input type="text" placeholder="Enter bill..." className="input" value={bill} onChange={handleBillInput}/>
    </form>
  );
}

export default BillInput;
