import React from 'react'
import { GoogleLogo } from './GoogleLogo';
import GoogleIcons from './GoogleIcons';
import Button from './Button';
import Language from './Language';

export const SearchSection = () => {
  return (
    <div>
        <GoogleLogo src='google logo' alt='Google logo'/>
        <div className='search-container'>
          <GoogleIcons />
        </div>
        <div className='Btns'>
          <Button text='Google Search'/>
          <Button text="I'm Feeling Lucky"/>
        </div>
        <div>
          <Language /> 
        </div>
    </div>
  )
}

export default SearchSection;