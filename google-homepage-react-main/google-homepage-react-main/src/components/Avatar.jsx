import React from 'react'

export const Avatar = (props) => {
  return (
    <a className='Avatar' href={props.link}>{props.text}</a>
  )
}

export default Avatar;
