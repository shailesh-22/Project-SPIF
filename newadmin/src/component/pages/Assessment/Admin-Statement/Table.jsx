import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextareaAutosize, Typography } from '@material-ui/core'
import { useState } from 'react';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


export default function CustomPaginationActionsTable( {questions, totalQuestions  } ) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - totalQuestions) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, border: "4px solid gray", }} aria-label="custom pagination table">
      <TableHead>
          <TableRow sx={{
            backgroundColor: "darkblue",
            borderBottom: "4px solid gray",
            "& th": {
            fontSize: "1.25rem",
            color: "white"
            }}}
          >
            <TableCell component="th" scope="row" align="center" style={{ fontSize:"25px", fontWeight:"bolder", letterSpacing:"2px", opacity:0.9 }} sx={{ borderRight :"1px solid gray", fontSize:30 }} > QUESTIONS </TableCell>
            <TableCell style={{ width: 160, fontSize:"25px", fontWeight:"bolder", letterSpacing:"2px", opacity:0.9 }} align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>

      {/* Fetching questions to the table  */}

        <TableBody
            sx={{
                borderBottom: "1px solid black",
                "& th": {
                fontSize: "1.1rem",
                color: "black"
                }}}
        >
          { questions &&
            (rowsPerPage > 0
              ? questions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : questions
            ).map((question) => (
            <TableRow key={question.sStatementID}>
              <TableCell component="th" scope="row" >
                {question.sDescription}
              </TableCell>
              <TableCell style={{ width: 200, height:100 }} align="center" className='d-flex justify-content-evenly align-items-center' >
                  <Button variant='contained' onClick={handleClickOpen} style={{ width: "30%" }} > <EditIcon/> </Button>
                  <Button variant='contained' style={{ width: "30%" }} > <DeleteIcon/> </Button>

                  <Dialog  
                        PaperProps={{
                          style: { borderRadius: 20, padding:10 }
                                    }} 
                        open={open} 
                        onClose={handleClose} 
                        className='dialog-box'
                  >
                            <DialogTitle component="h1" className='create-question-header'>
                                Question Details:
                            </DialogTitle>
                            <DialogContent>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder="Enter New question"
                                    style={{ width: "100%", height:50, outline:"none", padding:"5px" }}
                                />
                            </DialogContent>
                            <hr className='divider' />
                            <DialogTitle component="h1" className='create-option-header'>
                                Create Your Options
                            </DialogTitle>
                            <div className='options-container mx-5'>
                                <div className='d-flex my-3'>
                                    <Typography component="h1" className='option mx-2' >A.</Typography>
                                    <TextareaAutosize
                                        aria-label="empty textarea"
                                        placeholder="Enter New Statement"
                                        style={{ width: 500, height:30, border:"none", 
                                                 borderBottom:"2px solid gray", 
                                                 outline:"none" }}
                                    />
                                </div>
                                <div className='d-flex my-3'>
                                    <Typography component="h1" className='option mx-2' >B.</Typography>
                                    <TextareaAutosize
                                        aria-label="empty textarea"
                                        placeholder="Enter New Statement"
                                        style={{ width: 500, height:30, border:"none", 
                                                 borderBottom:"2px solid gray", 
                                                 outline:"none" }}
                                    />
                                </div>
                                <div className='d-flex my-3'>
                                    <Typography component="h1" className='option mx-2' >C.</Typography>
                                    <TextareaAutosize
                                        aria-label="empty textarea"
                                        placeholder="Enter New Statement"
                                        style={{ width: 500, height:30, border:"none", 
                                                 borderBottom:"2px solid gray", 
                                                 outline:"none" }}
                                    />
                                </div>
                                <div className='d-flex my-3'>
                                    <Typography component="h1" className='option mx-2' >D.</Typography>
                                    <TextareaAutosize
                                        aria-label="empty textarea"
                                        placeholder="Enter New Statement"
                                        style={{ width: 500, height:30, border:"none", 
                                                 borderBottom:"2px solid gray", 
                                                 outline:"none" }}
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-center align-items-center'>
                                <DialogTitle component="h1" className='create-question-header'>
                                    Correct Answer:
                                </DialogTitle>
                                <TextareaAutosize
                                        aria-label="empty textarea"
                                        placeholder="Enter Correct Anwser"
                                        style={{ width: 300, height:30, border:"none", 
                                                 borderBottom:"2px solid gray", 
                                                 outline:"none" }}
                                    />
                            </div>
                            <hr />
                            <DialogActions>
                                <Button variant="contained" color='primary' onClick={handleClose}>Update</Button>
                                <Button variant="contained" color='primary' onClick={handleClose}>Reset</Button>
                            </DialogActions>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count= {totalQuestions}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
