import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.password === userDetails.confirmPassword) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/login');
    } else {
      setUserDetails({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      navigate('/registration');
    }
  };

  return (
    <div className='registration-page rounded-4 border border-1 bg-body-tertiary mb-4 p-4'>
      <ul className="nav nav-pills nav-justified mb-3">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/registration">Register</Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-4">
          <input type="text" id="firstName" className="form-control" name='firstName' value={userDetails.firstName} onChange={handleChange} placeholder='John' />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" id="lastName" className="form-control" name='lastName' value={userDetails.lastName} onChange={handleChange} placeholder='Doe' />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" id="registerUsername" className="form-control" name='userName' value={userDetails.userName} onChange={handleChange} placeholder='John Doe' />
          <label htmlFor="registerUsername">Username</label>
        </div>
        <div className="form-floating mb-4">
          <input type="email" id="registerEmail" className="form-control" name='email' value={userDetails.email} onChange={handleChange} placeholder="name@example.com"/>
          <label htmlFor="registerEmail">Email</label>
        </div>
        <div className="form-floating mb-4">
          <input type="password" id="registerPassword" className="form-control" name='password' value={userDetails.password} onChange={handleChange} placeholder='password'/>
          <label htmlFor="registerPassword">Password</label>
        </div>
        <div className="form-floating mb-4">
          <input type="password" id="registerRepeatPassword" className="form-control" name='confirmPassword' value={userDetails.confirmPassword} onChange={handleChange} placeholder='repeat password' />
          <label htmlFor="registerRepeatPassword">Repeat password</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
