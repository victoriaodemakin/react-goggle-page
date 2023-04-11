import React from 'react'

export const MenuItem = (props) => {
  return (
    <a className='MenuItem' href={props['link']}>{props.text}</a>
  )
}
