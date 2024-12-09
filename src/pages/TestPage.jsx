// src/pages/TestPage.jsx
import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const TestPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Test Submitted');
    };

    return (
        <Container maxWidth="md">
            <Box textAlign="center" py={5}>
                <Typography variant="h4" gutterBottom>
                    Skill Assessment Test
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    Answer the following questions to complete your registration.
                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Question 1: Describe your experience with the skill."
                    multiline
                    rows={4}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Question 2: Why do you want to learn this skill?"
                    multiline
                    rows={4}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit Test
                </Button>
            </form>
        </Container>
    );
};

export default TestPage;
