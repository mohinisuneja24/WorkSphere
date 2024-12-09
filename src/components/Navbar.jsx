// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #0077FF, #00D4FF)' }}>
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: 'Roboto' }}>
                    Job Mediator
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/user-registration" sx={{ mx: 1 }}>
                        Register as User
                    </Button>
                    <Button color="inherit" component={Link} to="/service-provider-registration" sx={{ mx: 1 }}>
                        Register as Provider
                    </Button>
                    <Button color="inherit" component={Link} to="/payment" sx={{ mx: 1 }}>
                        Payment
                    </Button>
                    <Button color="inherit" component={Link} to="/test" sx={{ mx: 1 }}>
                        Test
                    </Button>
                    <Button color="inherit" component={Link} to="/careers" sx={{ mx: 1 }}>
                        Careers
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
