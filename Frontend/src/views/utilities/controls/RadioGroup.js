import React from 'react'
import {RadioGroup as MuiRadioGroup,Radio, FormLabel,  FormControlLabel} from '@mui/material';
const RadioGroup = (props) => {
    const { name, label, value, onChange, items } = props;
  return (
        <MuiRadioGroup
    name={name}
    value={value}
    row
    aria-labelledby="demo-row-radio-buttons-group-label"
    onChange={onChange}
    >
    <FormLabel id="demo-radio-buttons-group-label" sx={{marginRight:"10px",fontSize:"16px",color:"black",paddingTop:"8px"}}>{label}  </FormLabel>
    {
   items.map(
    item => (
        <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
    )
)                 
   }
            
     </MuiRadioGroup>
  )
}

export default RadioGroup