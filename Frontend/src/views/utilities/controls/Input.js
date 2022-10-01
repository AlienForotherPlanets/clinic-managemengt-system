import React from 'react'
import { TextField } from '@mui/material';

const Input = (props) => {
    const {name,label,value,error=null,onChange,...other} = props;
    return (
        <TextField
        fullWidth
        
        variant='outlined'
        name={name}
        value={value}
        label={label}
        onChange={onChange} 
        sx={{
            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
            {...other} 
         {...(error && {error:true,helperText:error})}                     
        />
    )
}

export default Input