import React from 'react';
import './Header.scss';
import { Button } from './Button';

const Header = () => {
  return (
    <body className='whole-thing'>
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>Sihun Sean Kim</h1>
      </div>
      <div className='second-info'>
        <h2>Full-Stack Developer</h2>
      </div>
      <div className='third-info'>
        <h3 className='info'>Born in South Korea and raised in Toronto.</h3>
      </div>
      <Button onClick={() => {
        console.log('You clicked on me');
      }}
      type='button'
      buttonStyle='btn--primary--outline'
      >Let's Talk</Button>
    </div>
    </body>
  )
}

export default Header
