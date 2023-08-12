import React from 'react'

function Reset({ billInput, myTip, friendTip }) {
  function resetHandler() {
    billInput(0)
    myTip(0)
    friendTip(0)
  }
  return (
    <div>
      <button onClick={resetHandler} className='btn'>Reset</button>
    </div>
  )
}

export default Reset
