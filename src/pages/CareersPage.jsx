// src/pages/CareersPage.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CareersPage = () => (
    <Container maxWidth="lg">
        <Box textAlign="center" py={5}>
            <Typography variant="h4" gutterBottom>
                Join Our Team
            </Typography>
            <Typography color="textSecondary" gutterBottom>
                Explore exciting opportunities to be part of our mission to empower individuals.
            </Typography>
        </Box>
        <Typography variant="h6" gutterBottom>
            Open Positions:
        </Typography>
        <ul>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>Marketing Specialist</li>
        </ul>
    </Container>
);

export default CareersPage;
