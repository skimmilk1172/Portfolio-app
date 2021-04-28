import React from 'react';
import './Header.scss';

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
    </div>
    </body>
  )
}

export default Header
