import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncEditTask } from '../actions/taskActions'
import TaskFormikMui from './TaskFormikMui'

const EditTask = (props) => {
    const { _id, title, body, dueDate, handleToggle } = props

    const dispatch = useDispatch()

    const handleSubmission = (formData) => {
        dispatch(asyncEditTask(_id, formData, handleToggle))
    }

    return (
        <div>
            <TaskFormikMui title={title} body={body} dueDate={dueDate ? dueDate.slice(0, 10) : null} handleSubmission={handleSubmission} />
        </div>
    )
}

export default EditTask