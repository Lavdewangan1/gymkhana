import React from 'react'

function Heading(props) {
  return (
    <h1 className={`heading lg:text-[3vw] md:text-[4vw] sm:text-[6vw] text-[6vw] montserrat ${props.className}`}>
        {props.children}
    </h1>
  )
}

export default Heading;