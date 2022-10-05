import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./controls/Controls";
import { useForm, Form } from './useForm';
import * as employeeService from "./services/employeeService";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
const Item = styled(Paper)(({ theme }) => ({
  
    ...theme.typography.body2,
    padding: theme.spacing(1),
    
    color: theme.palette.text.secondary,
  }));
const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function ServiceForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
             <Box sx={{ width: '100%' , minWidth:"500px"}}>
      <Stack spacing={2}>
        <Item sx={{width:'100%'}}>
        <FormControl sx={{width:'100%'}} >
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginRight:"10px",fontSize:"16px",color:"black",paddingTop:"8px"}}>Service Name</FormLabel>
      <TextField fullWidth placeholder="Service name" id="fullWidth" sx={{marginTop:"10px"}}/>

    </FormControl>
        </Item>
        <Item sx={{width:'100%'}}>
        <FormControl sx={{width:'100%'}} >
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginRight:"10px",fontSize:"16px",color:"black",paddingTop:"8px"}}>Service description</FormLabel>
      <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Service description"
      style={{ width: '100%',    backgroundColor: '#fafafa',
      marginTop: '10px',
      borderRadius:' 9.3px',height:'60px',
      "& input::placeholder": {
        fontSize: "20px"
      } }}
    />

    </FormControl>
        </Item>
      
        <Item>

        <Controls.Buttons
                            type="submit"
                            text="Submit" />
                        <Controls.Buttons
                            text="Reset"
                            onClick={resetForm} />
        </Item>


      </Stack>
    </Box>
            
        </Form>
    )
}
