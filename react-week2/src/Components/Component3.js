import React, { useContext } from 'react'
import {usecontext} from '../App'

const Component3 = () => {
  const {name, updateName} = useContext(usecontext)
  return (
    <div>
      <button onClick={()=>updateName('akshara')}>Update</button>
    </div>
  )
}

export default Component3
