import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const AvailableSelect = (props) => {
    const { name, label, value, onChange, options } = props;
  return (
    <TextField
          style={{ width: "50%" }}
          variant="outlined"
          value={value}
          onChange={onChange}
          select
          label={label}
          name={name}
          sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
        >
          <MenuItem  value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.price ? item.title+" "+item.price : item.title }</MenuItem>)
                    )
                }
        </TextField>
  )
}

export default AvailableSelect