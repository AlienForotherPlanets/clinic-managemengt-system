import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import useTable from './useTable';
import { InputAdornment, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material';
import * as employeeService from "./services/employeeService";
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Controls from './controls/Controls';
import { Search } from '@mui/icons-material';
import SearchSection from './SearchSection';

const headCells = [
    {id:'sr', label:'Sr No.',minWidth: 120,},
    {id:'caseno', label:'Case No.',minWidth: 120,},
    {id:'fullname', label:'Full Name',minWidth: 170,},
    {id:'mobno', label:'Mobile No.',minWidth: 70,},
    {id:'service', label:'Service',minWidth: 170,},
    {id:'doctor', label:'Doctor Name',minWidth: 170,},
    {id:'appointmentdate', label:'Appoinemnt Date',minWidth: 150,},
    {id:'time', label:'Time',minWidth: 70,},

]

const ViewAppointment = () => {
    
    const [records,setRecords] = useState(employeeService.getAllappointments())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [total,setTotal] = useState(0)
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.firstname.toLowerCase().includes(target.value.toLowerCase())
                     || x.lastname.toLowerCase().includes(target.value.toLowerCase())
                     || x.mobno.includes(target.value)
                     || x.services.toLowerCase().includes(target.value.toLowerCase())
                     || x.price.includes(target.value)
                     || x.doctorr.toLowerCase().includes(target.value.toLowerCase())
                     || x.appointmentdate.includes(target.value)
                     || x.mobno.includes(target.value)
                     )
            }
        })
    }
    const  {
        TbleContainer,
        TblHead,
       TblPaging,
        recordsAfterPagingAndSorting
    } = useTable(records,headCells,filterFn);

    
    return (
        <>
        <MainCard title="Appointments" secondary={<SearchSection onChange={handleSearch}/>}>
             <Paper sx={{ width: '100%' }}>
            <TbleContainer >
                <TblHead/>
                <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item => (
                            
                            <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                <TableCell  align='center' >{item.id}</TableCell>
                                <TableCell  align='center'>{item.caseno}</TableCell>
                                <TableCell  align='center'>{item.firstname+" "+item.lastname}</TableCell>
                                <TableCell align='center'>{item.mobno}</TableCell>
                                <TableCell align='center'>{item.services}</TableCell>
                                <TableCell align='center'>{item.doctorr}</TableCell>
                                <TableCell align='center'>{item.appointmentdate}</TableCell>
                                <TableCell align='center'>{item.time}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </TbleContainer>
            <TblPaging/>
            </Paper>
        </MainCard>
        
         
       
        </>
    )
}

export default ViewAppointment