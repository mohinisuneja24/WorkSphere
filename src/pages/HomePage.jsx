// src/pages/HomePage.jsx
import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent } from '@mui/material';

const HomePage = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(180deg, #E0F7FA, #ffffff)',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
            }}
        >
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    color: '#0077FF',
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    textAlign: 'center',
                }}
            >
                Empowering People Without Degrees
            </Typography>
            <Typography
                variant="h6"
                gutterBottom
                sx={{ color: '#555555', textAlign: 'center', maxWidth: '600px' }}
            >
                Learn skills and connect with service providers to achieve your dreams.
            </Typography>
            <Button
                variant="contained"
                size="large"
                href="/user-registration"
                sx={{
                    mt: 2,
                    backgroundColor: '#0077FF',
                    color: '#ffffff',
                    '&:hover': { backgroundColor: '#005BB5' },
                }}
            >
                Get Started
            </Button>
            <Grid container spacing={4} mt={5} sx={{ maxWidth: '1000px' }}>
                <Grid item xs={12} sm={6}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 3,
                            padding: 2,
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                For Users
                            </Typography>
                            <Typography sx={{ color: '#777777', mt: 1 }}>
                                Learn skills and grow with personalized development plans.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 3,
                            padding: 2,
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                For Providers
                            </Typography>
                            <Typography sx={{ color: '#777777', mt: 1 }}>
                                Register to reach users and offer your expertise.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
