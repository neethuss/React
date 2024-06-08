import React from 'react'

const Map = (props) => {

  const a = props.values.map((x)=>x)

  return (
    <div>
      {a}
    </div>
  )
}

export default Map
