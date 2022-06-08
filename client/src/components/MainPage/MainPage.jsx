import { Box } from '@mui/material';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import TextBox from '../TextBox/TextBox';

const MainPage = () => {
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <NavBar />
            <TextBox />
        </Box>
    );
};

export default MainPage;
