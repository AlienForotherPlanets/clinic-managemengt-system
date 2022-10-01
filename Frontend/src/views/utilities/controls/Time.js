import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const Time = (props) => {
    const { name, label, value,error=null, onChange, options } = props;
  return (
    <TextField
    {...(error && {error:true,helperText:error})}
          style={{ width: "100%" }}
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
          <Box display="flex" flexDirection="row">

   <Box>
   <MenuItem value="">None</MenuItem>
   </Box>
                {
                    options.map(
                        item => (<Box><MenuItem key={item.id} value={item.id}>{item.price ? item.title+" "+item.price : item.title }</MenuItem></Box>)
                    )
                }
               </Box>
        </TextField>
  )
}

export default Time