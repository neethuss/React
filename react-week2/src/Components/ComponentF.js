import React, { useContext } from 'react'
import { UserContext } from '../App'

function ComponentF() {

  const {name, updateName} = useContext.UserContext()
  return (
    <div>
      <h1>Name - {name}</h1>
      <button onClick={()=>updateName('akshara')}>Change Name</button>
    </div>
  )
}

export default ComponentF
