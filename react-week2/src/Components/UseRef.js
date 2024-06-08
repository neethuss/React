import React, {useRef} from 'react'

const UseRef = () => {

  const inputRef = useRef(null)

  const handleClick = ()=>{
    inputRef.current.value = 'neethu'
  }

  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>Update input</button>
    </div>
  )
}

export default UseRef
