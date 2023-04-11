import React from 'react'
import Icon from '../Images/search-icon.svg'
import Mic from '../Images/Google_mic.svg.png'
import Lens from '../Images/Google_Lens.png'
import Input from './Input'

export const GoogleIcons = (props) => {
  return (
   <div className='googleIcons'>
      <img src={Icon} alt='search icon'/>
      <Input/>
      <img src={Mic} alt='google mic'/>
      <img className='lens' src={Lens} alt='google lens'/>
   </div>
  )
}

export default GoogleIcons;