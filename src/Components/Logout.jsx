// src/components/Logout.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate('/login');
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    };

    return (
        <Button variant="secondary" onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default Logout;
