import React from 'react'
import Icon from '../Images/googlelogo.png';

export const GoogleLogo = (props) => {
  return (
    <div className='google-logo-img'>
        <img src={Icon} alt={props.text} />
    </div>
  )
}

export default GoogleLogo;