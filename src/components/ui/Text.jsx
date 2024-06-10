import React from 'react'

function Text(props) {
  return (
    <p className={` text-base md:text-lg sm:text-[3vw] text-[4vw] montserrat ${props.className}`}>
        {props.children}
    </p>
  )
}

export default Text