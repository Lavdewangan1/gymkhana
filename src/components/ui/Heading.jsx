import React from 'react'

function Heading(props) {
  return (
    <h1 className={`heading lg:text-[3vw] md:text-[4vw] sm:text-[5.5vw] text-[6vw] montserrat-500 ${props.className}`}>
        {props.children}
    </h1>
  )
}

export default Heading;