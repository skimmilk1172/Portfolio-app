import React from 'react'
import logo from '../skim.png';
import './Navbar.scss';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...'></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>

      </ul>

    </div>
  </div>

  </div>
</nav>
  )
}

export default Navbar