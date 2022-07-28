import { Grid, Typography } from '@mui/material'
import AddTask from './AddTask'
import TaskList from './TaskList'

const TasksContainer = () => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography
                    variant='h2'
                >
                    Task Box App

                </Typography>
            </Grid>

            <Grid item xs={12} md={8} >
                <TaskList />
            </Grid>

            <Grid item xs={12} md={4} >
                <AddTask />
            </Grid>
        </Grid>
    )
}

export default TasksContainer