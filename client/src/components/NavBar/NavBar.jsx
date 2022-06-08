import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { FormControl, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addText, resetAll } from '../../redux/actions';

const NavBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
        setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (input.length > 0) {
            dispatch(addText(input));
            setInput('');
        } else {
            setError('Please enter a text');
        }
    };

    const handleReset = (event) => {
        event.preventDefault();
        setInput('');
        dispatch(resetAll());
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                color='primary'
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 80 }}
            >
                <Toolbar sx={{ width: '1000px' }}>
                    <FormControl
                        sx={{
                            displat: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '800px',
                        }}
                    >
                        <TextField
                            fullWidth
                            label='Insert Text'
                            variant='filled'
                            value={input}
                            onChange={handleChange}
                            error={error.length > 0}
                            sx={{ marginRight: '10px', backgroundColor: 'white' }}
                            autoComplete='off'
                            size='small'
                        />
                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            variant='contained'
                            color='success'
                            sx={{ margin: '5px' }}
                        >
                            Send
                        </Button>
                    </FormControl>
                    <Button onClick={handleReset} variant='contained' color='success' sx={{ marginLeft: '10px' }}>
                        Reset All
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
