import React from 'react';
import './Header.scss';
import { Button } from './Button';

const Header = () => {
  return (
    <body className='whole-thing' id='home'>
        <div className='header-wrapper'>
        <div className='main-info'>
          <h1 className='main-inner'>Sihun Sean Kim</h1>
        </div>
        <div className='second-info'>
          <h2 className='second-inner'>Full-Stack Developer</h2>
          <h3 className='second-inner'>Born in South Korea and raised in Toronto.</h3>
      </div>
    </div>
      <Button onClick={() => {
        console.log('You clicked on me');
      }}
      type='button'
      buttonStyle='btn--primary--outline'
      >Let's Talk</Button>
    </body>
  )
}

export default Header
