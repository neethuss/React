import React, { useState } from 'react'

const TextColorChange = () => {

  const [currentcolor, setnewColor] = useState('red')

  const changeColor = ()=>{
    if(currentcolor === 'red'){
      setnewColor('green')
    }else{
      setnewColor('red')
    }
  }
  return (
    <div>
      <p style={{color: currentcolor}}>This is my new color</p>
      <button onClick={changeColor}>change color</button>
    </div>
  )
}

export default TextColorChange
