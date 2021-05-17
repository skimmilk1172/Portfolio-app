import React from 'react'
import logo from '../skim.png';
import './Navbar.scss';
// React fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...'></img></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color: 'black' }} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
          <Link
            activeClass='active'
            to='home'
            spy={true}
            offset={0}
            smooth={true}
            duration={1000}
          >.home( )</Link>
        </li>
        <li className="nav-item">
            <Link
              activeClass='active'
              to='about'
              spy={true}
              offset={0}
              smooth={true}
              duration={1000}
            >.aboutMe( )</Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            offset={0}
            smooth={true}
            duration={1000}
          >.projects( )</Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            offset={0}
            smooth={true}
            duration={1000}
          >.contact( )</Link>
        </li>

      </ul>

    </div>
  </div>

  </div>
</nav>
  )
}

export default Navbar