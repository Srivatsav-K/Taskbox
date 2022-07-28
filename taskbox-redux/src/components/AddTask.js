import React from 'react'

import { Grid, Icon, Paper, Typography } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskFormikMui from './TaskFormikMui';
import { useDispatch } from 'react-redux';
import { asyncPostTask } from '../actions/taskActions';


const AddTask = () => {
    const dispatch = useDispatch()

    const handleSubmission = (formData, reset) => {
        dispatch(asyncPostTask(formData, reset))
    }

    return (
        <Paper sx={{ padding: '30px' }} elevation={3} >
            <Grid container sx={{ justifyContent: 'center' }} spacing={2} >

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Icon  >
                        <AddTaskIcon />
                    </Icon>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        variant='h5'
                        textAlign='center'
                    >
                        Add Task
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    {/* <TaskForm /> */}
                    <TaskFormikMui handleSubmission={handleSubmission} />
                </Grid>
            </Grid>
        </Paper>

    )
}

export default AddTask