import React, { useCallback, useState } from 'react'
import Button from './UseCallbackButton'
import Count from './UseCallbackCount'

const UseCallback = () => {

  const [age, setAge] = useState(24)
  const [salary, setSalary] = useState(30000)

  const incrementAge = useCallback(()=>{
    setAge(age+1)
  },[age])

  const incrementSalary = useCallback(()=>{
    setSalary(salary+1000)
  },[salary])

  return (
    <div>

      <div>
      <Count text='Age' count={age}/>
      <Button handleClick={incrementAge}>Increment age</Button>
      </div>

      <div>
      <Count text='Salary' count={salary}/>
      <Button handleClick={incrementSalary}>Increment salary</Button>
      </div>
      
    </div>
  )
}

export default UseCallback
