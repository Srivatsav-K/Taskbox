import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { asyncDeleteTask } from '../actions/taskActions';
import EditTask from './EditTask';

import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CancelIcon from '@mui/icons-material/Cancel';



const TaskItem = (props) => {
    const { ele } = props
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const handleDelete = (_id) => {
        dispatch(asyncDeleteTask(_id))
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <h2>{ele.title}</h2>

            {(toggle) ? (
                <div>
                    <EditTask {...ele} handleToggle={handleToggle} />

                    <Tooltip title='Cancel' placement='left' >
                        <IconButton color='primary' onClick={handleToggle} >
                            <CancelIcon />
                        </IconButton>
                    </Tooltip>

                </div>) :

                (
                    <Tooltip title='Edit' placement='left' >
                        <IconButton color='primary' onClick={handleToggle} >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                )}


            <Tooltip title='Delete' placement='right' >
                <IconButton color='error' onClick={() => handleDelete(ele._id)} >
                    <DeleteOutlineIcon />
                </IconButton>
            </Tooltip>

        </div>
    )
}

export default TaskItem 