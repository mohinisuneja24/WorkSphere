// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#0077FF',
                color: '#ffffff',
                py: 3,
                mt: 5,
                textAlign: 'center',
            }}
        >
            <Container>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    © 2024 Job Mediator. All rights reserved.
                </Typography>
                <Link href="/" color="inherit" underline="hover">
                    Privacy Policy
                </Link>{' '}
                |{' '}
                <Link href="/" color="inherit" underline="hover">
                    Terms of Service
                </Link>
            </Container>
        </Box>
    );
};

export default Footer;
