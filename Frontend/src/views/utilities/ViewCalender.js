import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import data2 from './demo-data/data2'
export default function viewCalender() {
  const [age, setAge] = React.useState('');
  const [data,setData] = React.useState();
  const handleChange = (event) => {
    setAge(event.target.value);
    if(age == 'je'){setData('l')}
    console.log(data)
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">ke</MenuItem>
          <MenuItem value='je'>Ten</MenuItem>
          <MenuItem value='20'>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
