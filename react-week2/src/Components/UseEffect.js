import React, {useState, useEffect} from 'react'

const UseEffect = () => {
  
  const [count, setCount] = useState(0)

  useEffect(()=>{
    document.title = `Title ${count} inc`
  })

  const increase = () =>{
    setCount(prevCount => prevCount + 1)
  }

  const decrease = () =>{
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
    <p>COUNT - {count}</p>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </>
  )
}

export default UseEffect
