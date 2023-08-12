import React, { useState } from 'react'

function SelectPercentage({ tip, setTip, children }) {

  function handleTip(event) {
    setTip(Number(event.target.value))
  }

  return (
    <form className="mb-2">
      <label className="text">{ children }</label>
      <select className="input" value={tip} onChange={handleTip} >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </form>
  )
}

export default SelectPercentage
