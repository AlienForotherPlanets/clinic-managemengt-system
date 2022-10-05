import React from 'react'
import {Switch as MuiSwitch} from '@mui/material';
const Switch = (props) => {
    const { name, checked, onChange} = props;
  return (
    <MuiSwitch
    name={name}
    checked={checked}
    
    row
    onChange={onChange}
    >        
    </MuiSwitch>
  )
}

export default Switch;