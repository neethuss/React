import React from 'react'

const UseCallbackCount = ({text, count}) => {
  console.log(`Rendering ${text}`)
  return (
    <div>
      <p>{text} is {count}</p>
    </div>
  )
}

export default React.memo(UseCallbackCount)
