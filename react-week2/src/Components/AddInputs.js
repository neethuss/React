import React, { useState, useRef } from 'react'

const AddInputs = () => {

  const [total, setTotal] = useState(0)

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)

  const add = ()=>{
    let result = parseInt(inputRef1.current.value) + parseInt(inputRef2.current.value)
    setTotal(result)
  }

  return (
    <div>
      
      <div>
        <input type='number' placeholder='Enter a number' ref={inputRef1}/>
        <input type='number' placeholder='Enter a number' ref={inputRef2}/>
      </div>

      <button onClick={add}>Add</button>
      <p>{total}</p>
    </div>
  )
}

export default AddInputs
