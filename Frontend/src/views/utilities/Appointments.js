import { TextField, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useForm, Form } from './useForm';
import * as employeeService from "./services/employeeService";
import Controls from './controls/Controls';
import Select from './controls/Select';
// import Date from './controls/Date';
import Time from './controls/Time';
import { Divider, Paper, Toolbar, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const m = (new Date().getMonth() + 1) <= 9 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
const d = (new Date().getDate()) <= 9 ? "0" + (new Date().getDate()) : (new Date().getDate());
const y = new Date().getFullYear();
const todayDate = y + "-" + m + "-" + d;
const initialFormValues = {
    id: 0,
    caseno: 0,
    appointmentdate: todayDate,
    firstname: "",
    lastname: "",
    service: "",
    doctor: '',
    gender: "male",

    mobno: "",
    time: "",
    flat: "",
    street: "",
    city: "anand",
    nationality: "india",
    email1: "",
    village: "",
    area: "",
    state: "Gujarat",
    pincode: "388001",
    email2: "",
    allergy: [],
    continue: "no",
    dob: "",
    age: "",
    timehour: "",
    timemin: "",
    timeampm: "",
    referredBy: ""

}



const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
const continueItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]
const Appointments = () => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('mobno' in fieldValues)
            temp.mobno = (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/).test(fieldValues.mobno) ? "" : "Invalid Number!"
        if ('email1' in fieldValues)
            temp.email1 = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(fieldValues.email1) && fieldValues.email1.includes('.') || fieldValues.email1.length == 0 ? "" : "Invalid Email!"
        if ('doctor' in fieldValues)
            temp.doctor = fieldValues.doctor.length != 0 ? "" : "Select the doctor!"
        if ('service' in fieldValues)
            temp.service = fieldValues.service.length != 0 ? "" : "Select the service!"
        if ('pincode' in fieldValues)
            temp.pincode = fieldValues.pincode.length == 6 || fieldValues.pincode.length == 0 ? "" : "length should be 6 only!"

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
    } = useForm(initialFormValues, false, validate);

    useEffect(() => {
        console.log(values);
    }, [values.appointmentdate]);



    const handleSubmit = e => {
        e.preventDefault()
        // if(validate())
        // {
        console.log(values)
        employeeService.insertAppointment(values);
        resetForm()
        window.alert('testing...')

        // }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Controls.Input
                        name='caseno'
                        label="Case No."
                        value={values.caseno}
                        onChange={handleInputChange}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Controls.Input
                        name='service'
                        label="Service"
                        value={values.service}
                        onChange={handleInputChange}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.Input
                        name='firstname'
                        label="Full Name"
                        value={values.firstname}
                        onChange={handleInputChange}

                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Controls.Input
                        name="mobno"
                        label="Mobile No"
                        value={values.mobno}
                        onChange={handleInputChange}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Select
                        name="doctor"
                        label="Doctor"
                        value={values.doctor}
                        onChange={handleInputChange}

                        options={employeeService.getDoctorCollection()}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.DatePicker
                        name="appointmentdate"
                        label="date"

                        value={values.appointmentdate}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Controls.Input
                                name="timehour"
                                label="Hours"
                                value={values.timehour}
                                onChange={handleInputChange}

                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Controls.Input
                                name='timemin'
                                value={values.timemin}
                                label="Mins"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Select
                                name="timeampm"
                                label="Meridiem"
                                value={values.timeampm}
                                onChange={handleInputChange}

                                options={employeeService.meridiem()}

                            />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controls.RadioGroup
                        name="continue"
                        label="is it continue ? "
                        value={values.continue}
                        onChange={handleInputChange}
                        items={continueItems}

                    />
                </Grid>




                <Grid item xs={12} sm={6}>
                    <div>
                        <Controls.Buttons
                            type="submit"
                            text="Submit"

                        />
                    </div>

                </Grid>

            </Grid>

            <Accordion sx={{ marginTop: "20px" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h4"> Extra Information</Typography>
                </AccordionSummary>
                <AccordionDetails>



                    <Paper sx={{ marginTop: "10px", paddingTop: "10px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Controls.RadioGroup
                                    name="gender"
                                    label="Gender : "
                                    value={values.gender}
                                    onChange={handleInputChange}
                                    items={genderItems}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Controls.DatePicker
                                            name="dob"
                                            label="Date of Birth"
                                            value={values.dob}
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Controls.Input
                                            name='age'
                                            value={values.age}
                                            label="Age"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='email1'
                                    value={values.email1}
                                    label="Email1"
                                    error={errors.email1}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='email2'
                                    value={values.email2}
                                    label="Email2"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='nationality'
                                    value={values.nationality}
                                    label="Nationality"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='referredBy'
                                    value={values.referredBy}
                                    label="Referred By"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='flat'
                                    value={values.flat}
                                    label="Flat/Door/Block No"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='village'
                                    value={values.village}
                                    label="Name of Building / Village"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='street'
                                    value={values.street}
                                    label="Road/Street/Lane"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='area'
                                    value={values.area}
                                    label="Area/Locality"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='city'
                                    value={values.city}
                                    label="City"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='state'
                                    value={values.state}
                                    label="State"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controls.Input
                                    name='pincode'
                                    value={values.pincode}
                                    label="Pin Code"
                                    onChange={handleInputChange}
                                    error={errors.pincode}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <div>
                                    <Controls.Buttons
                                        type="submit"
                                        text="Submit"

                                    />
                                </div>

                            </Grid>
                        </Grid>
                    </Paper>
                </AccordionDetails>
            </Accordion>
        </Form>
    )
}

export default Appointments