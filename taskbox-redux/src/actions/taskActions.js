import axios from 'axios'
export const GET_TASKS = "GET_TASKS"
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'


const getTasks = (tasks) => {
    return { type: GET_TASKS, payload: tasks }
}

export const asyncGetTasks = () => {
    return (
        (dispatch, getState) => {

            axios.get('http://localhost:3050/tasks')
                .then((response) => {
                    const tasks = response.data
                    dispatch(getTasks(tasks))
                })
                .catch((err) => {
                    alert(err.message)
                })

        }
    )
}

export const addTask = (task) => {
    return { type: ADD_TASK, payload: task }
}

export const asyncPostTask = (formData, reset) => {
    return (
        (dispatch, getState) => {
            axios.post('http://localhost:3050/tasks', formData)
                .then((response) => {
                    const task = response.data
                    dispatch(addTask(task))
                    reset()
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    )
}


export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}

export const asyncDeleteTask = (_id) => {
    return (
        (dispatch, getState) => {
            axios.delete(`http://localhost:3050/tasks/${_id}`)
                .then((response) => {
                    const result = response.data
                    dispatch(deleteTask(result._id))
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    )
}

export const editTask = (editedTask) => {
    return { type: EDIT_TASK, payload: editedTask }
}

export const asyncEditTask = (_id, formData, handleToggle) => {
    return (
        (dispatch, getState) => {
            axios.put(`http://localhost:3050/tasks/${_id}`, formData)
                .then((response) => {
                    const result = response.data
                    dispatch(editTask(result))
                    handleToggle()
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    )
}