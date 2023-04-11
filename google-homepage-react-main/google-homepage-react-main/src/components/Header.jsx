import React from 'react'
import { MenuItem } from './MenuItem';
import AppIcon from './AppIcon';
import Avatar from './Avatar'

export const Header = () => {
  return (
    <div className='Header'>
        <MenuItem link='google.com' text='Gmail'/>
        <MenuItem link='images.com' text='Images'/>
        <AppIcon />
        <Avatar text='L'/>
        
    </div>
  )
}

export default Header