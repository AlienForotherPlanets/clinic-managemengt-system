import React from 'react'
import TextField from '@mui/material/TextField';
import moment from 'moment';


export default function DatePicker(props) {

     const { name, label, value,onChange } = props
    //  const newDate = moment(date.timeStamp).format('YYYY-MM-DD');

   
    return (
       <TextField
            fullWidth
        name={name}
        label={label}
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        value={value}
        onChange={onChange}
       
        sx={{


            "& .MuiInputBase-root": {
                height: "46px"
            }
            }}
      />
    )
}
