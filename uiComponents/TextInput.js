import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';


function MyComponent({ name, label, type, value, onChange }) {
    return (
        <Box component='div'>
            <TextField
                name={name}
                label={label}
                type={type}
                value={value}
                onChange={onChange}
                variant="standard"
                color='secondary'
                fullWidth />
        </Box>
    );
}

export default MyComponent;
