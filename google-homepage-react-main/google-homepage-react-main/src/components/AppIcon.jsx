import React from 'react'
import Icon from '../Images/nineDots.png'

export const AppIcon = (props) => {
  return (
    <img className='AppIcon'  src={Icon} alt={props.text}/>
  )
}

export default AppIcon