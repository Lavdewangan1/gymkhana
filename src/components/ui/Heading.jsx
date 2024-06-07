import React from 'react'

function Heading(props) {
  return (
    <h1 className={`heading lg:text-6xl md:text-5xl text-2xl ${props.className}`}>
        {props.children}
    </h1>
  )
}

export default Heading;