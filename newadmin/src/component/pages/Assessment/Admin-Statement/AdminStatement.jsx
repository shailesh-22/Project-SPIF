import React from 'react'
import './adminStatement.css'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, TextareaAutosize, Typography } from '@material-ui/core'
import { useState } from 'react';
import CustomPaginationActionsTable from './Table';
import useFetch from '../Custom Hook/useFetch';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../../../Sidebar/Header';
import Menu from '../../../Sidebar/Menu';



const AdminStatement = () => {

    let { data: questions } = useFetch("http://localhost:3004/questions")

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);



    };

    if (!questions) return <CircularProgress size="5rem" style={{ display: "flex", margin: "auto" }} />

    return (
        <div>
            <Header />
            <Menu/>
        <div className='content-wrapper'>
            <div className='row'>
                <div className='header p-4' >
                    <h1 style={{ fontWeight: "bolder", letterSpacing: "1px" }}>Questions</h1>
                </div>
                <div className='col-md-12 p-4 question-container'>
                    <div className='d-flex adding-part'>
                        <h3 style={{ fontSize: "25px", fontWeight: "bolder", letterSpacing: "1px", opacity: 0.8 }}>To Create New Question</h3>
                        <Tooltip
                            title="To Add New Question"
                            placement="right"
                        >
                            <Button style={{ borderRadius: "50%", width: "70px", height: "70px" }} variant="contained" color='primary' onClick={handleClickOpen}>
                                <IconButton>
                                    <AddCircleOutlineIcon fontSize='large' style={{ color: "white" }} />
                                </IconButton>
                            </Button>
                        </Tooltip>
                        <form>

                            <Dialog
                                PaperProps={{
                                    style: { borderRadius: 20, padding: 10 }
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
                                        style={{ width: "100%", height: 50, outline: "none", padding: "5px" }}
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
                                            style={{
                                                width: 500, height: 30, border: "none",
                                                borderBottom: "2px solid gray",
                                                outline: "none"
                                            }}
                                        />
                                    </div>
                                    <div className='d-flex my-3'>
                                        <Typography component="h1" className='option mx-2' >B.</Typography>
                                        <TextareaAutosize
                                            aria-label="empty textarea"
                                            placeholder="Enter New Statement"
                                            style={{
                                                width: 500, height: 30, border: "none",
                                                borderBottom: "2px solid gray",
                                                outline: "none"
                                            }}
                                        />
                                    </div>
                                    <div className='d-flex my-3'>
                                        <Typography component="h1" className='option mx-2' >C.</Typography>
                                        <TextareaAutosize
                                            aria-label="empty textarea"
                                            placeholder="Enter New Statement"
                                            style={{
                                                width: 500, height: 30, border: "none",
                                                borderBottom: "2px solid gray",
                                                outline: "none"
                                            }}
                                        />
                                    </div>
                                    <div className='d-flex my-3'>
                                        <Typography component="h1" className='option mx-2' >D.</Typography>
                                        <TextareaAutosize
                                            aria-label="empty textarea"
                                            placeholder="Enter New Statement"
                                            style={{
                                                width: 500, height: 30, border: "none",
                                                borderBottom: "2px solid gray",
                                                outline: "none"
                                            }}
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
                                        style={{
                                            width: 300, height: 30, border: "none",
                                            borderBottom: "2px solid gray",
                                            outline: "none"
                                        }}
                                    />
                                </div>
                                <hr />
                                <DialogActions>
                                    <Button variant="contained" color='primary' onClick={handleClose}>Add</Button>
                                    <Button variant="contained" color='primary' onClick={handleClose}>Reset</Button>
                                </DialogActions>
                            </Dialog>
                        </form>
                    </div>
                    <div>
                        <TextField
                            className='search-field' id="standard-basic"
                            label="Search here..." variant="standard"
                            inputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                        />
                    </div>

                    <CustomPaginationActionsTable questions={questions} totalQuestions={questions.length} />

                </div>
            </div>
        </div>
        </div>
    )
}

export default AdminStatement
