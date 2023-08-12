import React, { useState } from 'react'
import BillInput from './BillInput'
import SelectPercentage from './SelectPercentage'
import Output from './Output'
import Reset from './Reset'

function TipCalculator() {

  const [billInput, setBillInput] = useState("")

  const [myTip, setMyTip] = useState(0)

  const [friendTip, setFriendTip] = useState(0)



  return (
    <div>
        <BillInput bill={billInput} billInput={setBillInput} />
        <SelectPercentage tip={myTip} setTip={setMyTip}>How did you like the service?</SelectPercentage>
        <SelectPercentage tip={friendTip} setTip={setFriendTip}>How did your friend like the service?</SelectPercentage>
        <Output bill={billInput} tip={myTip} friendTip={friendTip}  />
        <Reset billInput={setBillInput} myTip={setMyTip} friendTip={setFriendTip} />
    </div>
  )
}

export default TipCalculator
