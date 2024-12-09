// src/pages/UserRegistration.jsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const UserRegistration = () => {
    const [formData, setFormData] = useState({ name: '', email: '', skill: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/register-user', formData);
            alert('Registration Successful');
        } catch (error) {
            alert('Registration Failed');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box textAlign="center" py={5}>
                <Typography variant="h4" gutterBottom>
                    User Registration
                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Desired Skill"
                    name="skill"
                    value={formData.skill}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Register
                </Button>
            </form>
        </Container>
    );
};

export default UserRegistration;
