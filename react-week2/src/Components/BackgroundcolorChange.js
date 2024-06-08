import React, { useState } from 'react'

const BackgroundcolorChange = () => {

  const [myColor, setMycolor] = useState('white')
  return (
    <div>
      <div style={{backgroundColor : myColor, margin: 20, padding:20}}>
        <button onClick={()=>setMycolor('green')}>Green</button>
        <button onClick={()=>setMycolor('blue')}>Blue</button>
        <button onClick={()=>setMycolor('red')}>Red</button>
        <button onClick={()=>setMycolor('black')}>Black</button>
        <button onClick={()=>setMycolor('orange')}>Orange</button>
        <button onClick={()=>setMycolor('white')}>White</button>
      </div>
    </div>
  )
}

export default BackgroundcolorChange
