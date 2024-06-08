import React from 'react'

function Text(props) {
  return (
    <p className={` text-base md:text-lg montserrat ${props.className}`}>
        {props.children}
    </p>
  )
}

export default Text