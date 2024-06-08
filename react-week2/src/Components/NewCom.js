import React, { useMemo, useState } from 'react'
import CounterOne from './CounterOne'

const NewCom = () => {

  const[counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementCounterOne = () =>{
setCounterOne(counterOne + 1)
  }

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(()=>{
    let i=0
    console.log('expensive calculation');
    i++
    return counterOne%2===0
  },[counterOne])
  return (
    <div>
      <div>
      <button onClick={incrementCounterOne}>CounterOne-{counterOne}</button>
      <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      
      <button onClick={incrementCounterTwo}>CounterTwo-{counterTwo}</button>
    </div>
  )
}

export default NewCom
