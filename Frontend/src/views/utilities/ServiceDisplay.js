import { Divider, Grid, Switch, Typography,Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MainCard from 'ui-component/cards/MainCard'
import Controls from './controls/Controls'
import * as employeeService from "./services/employeeService";
import ServiceCategoryTable from "./ServiceCategoryTable"
import {Paper} from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import AvailableDisplay from './AvailableDisplay'
import AvailableTable from './AvailableTable'
const Availability = () => {
    const [checked,setChecked] = useState(false)
    const [start,setStart] = useState('9:00 am')
    const [sundayrows,setSundayrows] = React.useState([{}])
    const [mondayrows,setMondayrows] = React.useState([{}])
    const [tuesdayrows,setTuesdayrows] = React.useState([{}])
    const [wednesdayrows,setWednesdayrows] = React.useState([{}])
    const [thursdayrows,setThursdayrows] = React.useState([{}])
    const [fridayrows,setFridayrows] = React.useState([{}])
    const [saturdayrows,setSaturdayrows] = React.useState([{}])



  return (
       <>
 
      <MainCard title="Schedule Appointment" >
      
{/* <ServiceCategoryTable title="Sunday" rows={sundayrows} /> */}

<AvailableDisplay/>

   </MainCard>
   
  </>
  )
}

export default Availability