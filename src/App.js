import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import Account from './Components/Account';
import About from './Components/Aboutus';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/registration" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account editable={true} />} />
            <Route path="/home" element={<Account editable={false} />} />
            <Route path ='/about' element={<About/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
