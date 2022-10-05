import React, { useState } from 'react'
import AvailableForm from "./AvailableForm";
import {makeStyles} from "@mui/styles"

import { Paper,  TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import useTable from "./useTable";
import * as employeeService from "./services/employeeService";
import Controls from "./controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "./controls/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';


const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function AvailableDisplay() {

    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TbleContainer,
        TblHead,
        recordsAfterPagingAndSorting,
        TblPaging
       
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    const onDelete = id => {
        
        employeeService.deleteEmployee(id);
        setRecords(employeeService.getAllEmployees())
       
    }
    return (
        <>
           

                <Toolbar>                  
                    <Controls.Buttons
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                      
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
                <TbleContainer>
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.ScheduleDate}</TableCell>
                                    <TableCell>{item.starttime} - {item.endtime}</TableCell>
                                    <TableCell>
                                     
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={
                                                ()=> {onDelete(item.id)} 
                                                
                                            }>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TbleContainer>
            
            
            <Popup
                title="Schedule Override"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                
            >
                <AvailableForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
        </>
    )
}
