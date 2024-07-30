import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { auth, db } from '../Config/firebase';
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './Logout'; // Import the Logout component

const Account = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    setEmail(user.email);
                    const docRef = doc(db, 'users', user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setUsername(data.username);
                        setPhoneNumber(data.phoneNumber);
                    } else {
                        toast.error("No such document!");
                    }
                }
            } catch (error) {
                toast.error("Error fetching user data: " + error.message);
            }
        };

        fetchUserData();
    }, []);

    const reauthenticate = async () => {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        try {
            await reauthenticateWithCredential(user, credential);
        } catch (error) {
            toast.error("Reauthentication failed: " + error.message);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = auth.currentUser;
        try {
            await reauthenticate();
            if (email) {
                await updateEmail(user, email);
                toast.success("Email updated successfully");
            }
            if (password) {
                await updatePassword(user, password);
                toast.success("Password updated successfully");
            }
            await updateDoc(doc(db, 'users', user.uid), {
                username,
                phoneNumber
            });
            toast.success("Account updated successfully");
        } catch (error) {
            toast.error("Error updating account: " + error.message);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <div className="p-4 border rounded shadow-sm bg-light">
                        <h2 className="text-center mb-4">Update Account</h2>
                        <ToastContainer />
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="New password (leave blank to keep current)"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formUsername" className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhoneNumber" className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formCurrentPassword" className="mb-3">
                                <Form.Label>Current Password (for reauthentication)</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter current password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mb-3">
                                Update
                            </Button>
                        </Form>
                        <Logout /> 
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Account;
