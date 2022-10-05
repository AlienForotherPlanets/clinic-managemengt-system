import React from 'react'

import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';


export default function Buttons(props) {

    const { text, size, color, variant, onClick, ...other } = props
    // const classes = useStyles();

    return (
        <Button 
        variant={variant || "contained"}
        size={size || "large"}
        color={color || "primary"}
        onClick={onClick}
        {...other}
        >
       {text}
       </Button>
    )
}
