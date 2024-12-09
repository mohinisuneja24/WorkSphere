import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0077FF',
        },
        secondary: {
            main: '#00D4FF',
        },
        background: {
            default: '#E0F7FA',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

export default theme;
