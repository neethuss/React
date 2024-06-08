import React, {useMemo, useState} from 'react'

const UseMemoDemo = () => {
  
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const incrementCountOne = ()=>{
    setCount1(count1+1)
  }
  const incrementCountTwo = ()=>{
    setCount2(count2+1)
  }

  const isEven = useMemo(()=>{
    let i=0
    while(i<2000000) i++
    return count1 % 2
    },[count1])

  return (
    <div>

      <div>
        <button onClick={incrementCountOne}>Counter One - {count1}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>

      <div>
        <button onClick={incrementCountTwo}>Counter Two - {count2}</button>
      </div>
    </div>
  )
}

export default UseMemoDemo
