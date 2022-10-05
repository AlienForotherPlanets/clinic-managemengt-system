
import React from 'react'
import { useState } from 'react'
import MainCard from 'ui-component/cards/MainCard'
import  {Button} from '@mui/material'

import * as employeeService from "./services/employeeService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Paper} from '@mui/material';
import Select from '@mui/material/Select';

const ServiceCategoryTable = () => {
    
    const [rows,seTableRowows] = React.useState([{}])

const [age,setAge] = React.useState()

 const handleChangeSelect = (event) => {

 setAge( event.target.value)

  };
  const handleRemoveSpecificRow = (idx) => () => {
    const rowst = [...rows]
    rowst.splice(idx, 1)
    seTableRowows( rowst )

  }

  const handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...rows];
    rows[idx] = {
      [name]: value
    };
    seTableRowows({
      rows
    });
  };
  const handleAddRow = () => {
    const item = {
      name: "",
      mobile: ""
    };
    seTableRowows(
     [...rows, item]
    );
  };
  
  const handleRemoveRow = () => {
    const roww =rows.slice(0, -1)
 seTableRowows(
     roww
    );
  };
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
       <TableContainer   component={Paper}>
      <Table  aria-label="simple table">
       
        <TableBody>
                  {rows.map((item, idx) => (
                    <TableRow id="addr0" key={idx}>
                      <TableCell>{idx}</TableCell>
                      <TableCell>
                       
                      </TableCell>
                      <TableCell>
                       
                      </TableCell>
                      <TableCell>
                        <Button
                        
                          onClick={handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button onClick={handleAddRow} >
                Add Row
              </Button>
              <Button
                onClick={handleRemoveRow}
             
              >
                Delete Last Row
              </Button>
          
        </TableContainer>
          <Popup
          title="Employee Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
      >
          <AvailableForm
              recordForEdit={recordForEdit}
              addOrEdit={addOrEdit} />
      </Popup>
      </>
    );
  }

  export default ServiceCategoryTable