import { Divider, Grid, Switch, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MainCard from 'ui-component/cards/MainCard'
import Controls from './controls/Controls'
import * as employeeService from "./services/employeeService";
import AvailableTable from './AvailableTable'
import {Paper} from '@mui/material'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import AvailableDisplay from './AvailableDisplay'
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
  <Grid container spacing={2}>
    <Grid item xs={12} sm={7}>
      <MainCard title="Default Hours" >
      <TableContainer   component={Paper}>
      <Table sx={{ minWidth: 640 }} aria-label="simple table">
       
        <TableBody>
<AvailableTable title="Sunday" rows={sundayrows} />
<Divider/>
<AvailableTable title="Monday" rows={mondayrows} />
<Divider/>
<AvailableTable title="Tuesdat" rows={tuesdayrows} />
<Divider/>
<AvailableTable title="Wednesday" rows={wednesdayrows} />
<Divider/>
<AvailableTable title="Thursday" rows={thursdayrows} />
<Divider/>
<AvailableTable title="Friday" rows={fridayrows} />
<Divider/>
<AvailableTable title="Saturday" rows={saturdayrows} />

</TableBody>
      </Table>
    </TableContainer>
   </MainCard>
   </Grid>
   <Grid item xs={12} sm={5}>
      <MainCard title="Schedule Override" >
<AvailableDisplay/>
   </MainCard>
   </Grid>
   </Grid>
  </>
  )
}

export default Availability