import React from 'react'

const UseCallbackButton = ({handleClick, children}) => {
  console.log(`Rendering button - ${children}`)
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(UseCallbackButton)
