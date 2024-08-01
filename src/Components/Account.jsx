import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = ({ editable }) => {
  const navigate = useNavigate();
  const storedUserDetails = localStorage.getItem('userDetails');
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (storedUserDetails !== null) {
      setUserDetails(JSON.parse(storedUserDetails));
    } else {
      navigate('/registration');
    }
  }, [storedUserDetails, navigate]);

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
      setIsUpdated(true);
      navigate('/account');
    } else {
      setUserDetails({
        ...userDetails,
        password: '',
        confirmPassword: ''
      });
      alert('Passwords do not match');
    }
  };

  return (
    <div className='account-page rounded-4 border border-1 bg-body-tertiary mb-4 p-4'>
      <h3 className='text-center mb-4'>Account Details</h3>
      <form onSubmit={handleSubmit}>
        {['firstName', 'lastName', 'userName', 'email', 'password', 'confirmPassword'].map((field) => (
          <div className="form-floating mb-4" key={field}>
            <input 
              type={field.includes('password') ? 'password' : 'text'}
              id={field}
              className="form-control"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              onChange={handleChange}
              value={userDetails[field]}
              readOnly={!editable && field !== 'confirmPassword'}
            />
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1).replace('confirmPassword', 'Repeat Password')}</label>
          </div>
        ))}
        {editable && (
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block mb-4">
              {isUpdated ? 'Updated' : 'Update Details'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Account;
