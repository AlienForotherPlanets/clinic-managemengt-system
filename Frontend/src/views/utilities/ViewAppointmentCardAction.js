import React from 'react'
import SearchSection from './SearchSection'
import { Button, Grid } from '@mui/material'
const ViewAppointmentCardAction = () => {
  return (
   <>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
        <SearchSection/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Button variant="contained">Submit</Button>
        </Grid>
    </Grid>
   </>
  )
}

export default ViewAppointmentCardAction