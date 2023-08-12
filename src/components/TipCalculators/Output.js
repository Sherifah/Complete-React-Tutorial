import React from 'react'

function Output({ bill, tip, friendTip }) {
  const totalTip = (tip + friendTip) / 2

  const totalBill = bill + totalTip

  return (
    <div>
      <h1 className='font-bold text-xl py-4'>You pay ${totalBill} (${bill} + ${totalTip} tip)</h1>
    </div>
  )
}

export default Output
