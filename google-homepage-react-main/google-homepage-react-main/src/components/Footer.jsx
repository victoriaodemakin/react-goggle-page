import React from 'react'
import { MenuItem } from './MenuItem';
import Icon from '../Images/carbon.png'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='location'>Nigeria</div>
        <div className='footer-link'>
            <div className='col-1'>
               <MenuItem link='about.com' text='About' /> 
               <MenuItem link='advertising.com' text='Advertising' />
               <MenuItem link = 'business.com' text='Bussiness'/>
               <MenuItem link = 'business.com' text='How Search works'/>
            </div>
            <div className='col-2'>
              <span><img className='carbon-img' src ={Icon} alt='carbon'/></span>
              <MenuItem link='carbon.com' text='Carbon neutral since 2007' />
            </div>
            <div className='col-3'>
               <MenuItem link='privacy.com' text='Privacy'/>
               <MenuItem link= 'terms.com' text='Terms' />
               <MenuItem link='settings.com' text='Settings' />
            </div>
        </div>
    </div>
  )
}

export default Footer;