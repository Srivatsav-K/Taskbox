import { useEffect } from 'react'
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux'
import { asyncGetTasks } from '../actions/taskActions'
import TaskItem from './TaskItem';

const TaskList = () => {

    const tasks = useSelector((state) => {
        return state.tasks.reverse()
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetTasks())
    }, [dispatch])

    return (
        <div>
            {
                tasks.map((ele) => {
                    return (
                        <TaskItem key={ele._id} ele={ele} />
                    )
                })
            }
        </div>
    )
}

export default TaskList