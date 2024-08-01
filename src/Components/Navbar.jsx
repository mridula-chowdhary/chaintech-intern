import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userDetails');
    navigate('/registration');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex" id="navbarNav">
          <Link className="navbar-brand col-lg-3 me-0" to="/home">ChainTech Network</Link>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <Link to={'/login'} className='btn btn-primary me-2'>Login</Link>
            <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
