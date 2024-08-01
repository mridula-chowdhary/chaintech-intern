import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const storedUserDetails = localStorage.getItem('userDetails');
  
  useEffect(() => {
    if (storedUserDetails === null) {
      navigate('/registration');
    }
  }, [storedUserDetails, navigate]);

  const { email: storedEmail, password: storedPassword } = JSON.parse(storedUserDetails || '{}');
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (storedEmail === loginDetails.email && storedPassword === loginDetails.password) {
      navigate('/Account');
    } else {
      setLoginDetails({ email: '', password: '' });
      navigate('/login');
    }
  };

  return (
    <div className='login-page rounded-4 border border-1 bg-body-tertiary mb-4 p-4'>
      <ul className="nav nav-pills nav-justified mb-3">
        <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/registration">Register</Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-4">
          <input type="email" id="loginEmail" className="form-control" name="email" value={loginDetails.email} onChange={handleChange} placeholder='name@example.com' />
          <label htmlFor="loginEmail">Email</label>
        </div>
        <div className="form-floating mb-4">
          <input type="password" id="loginPassword" className="form-control" name="password" value={loginDetails.password} onChange={handleChange} placeholder='password'/>
          <label htmlFor="loginPassword">Password</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block mb-4">Sign In</button>
        </div>
        <div className="text-center">
          <p>Not a member? <Link to="/registration">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
