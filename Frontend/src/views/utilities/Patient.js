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
    {id:'firstname', label:'First Name',minWidth: 170,},
    {id:'lastname', label:'Last Name',minWidth: 170,},
    {id:'mobno', label:'Mobile No.',minWidth: 170,},
    {id:'email1', label:'Email 1',minWidth: 170,},
    {id:'gender', label:'Gender',minWidth: 80,},
    {id:'email2', label:'Email 2',minWidth: 170,},
    {id:'dob', label:'DOB',minWidth: 80,},
    {id:'age', label:'Age',minWidth: 50,},
    {id:'action', label:'',minWidth: 80,},



]

const Patient = () => {
    
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
        <MainCard title="Patients" secondary={<SearchSection onChange={handleSearch}/>}>
             <Paper sx={{ width: '100%' }}>
            <TbleContainer >
                <TblHead/>
                <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item => (
                            
                            <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                <TableCell  align='center' >{item.id}</TableCell>
                                <TableCell  align='center'>{item.caseno}</TableCell>
                                <TableCell  align='center'>{item.firstname}</TableCell>
                                <TableCell align='center'>{item.lastname}</TableCell>
                                <TableCell align='center'>{item.mobno}</TableCell>
                                <TableCell align='center'>{item.email1}</TableCell>
                                <TableCell align='center'>{item.gender}</TableCell>
                                <TableCell align='center'>{item.email2}</TableCell>
                                <TableCell align='center'>{item.dob}</TableCell>
                                <TableCell align='center'>{item.age}</TableCell>  
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

export default Patient