import { ADD_TASK, DELETE_TASK, EDIT_TASK, GET_TASKS } from "../actions/taskActions"
const tasksInitialValue = []

const tasksReducer = (state = tasksInitialValue, action) => {
    switch (action.type) {
        case GET_TASKS: {
            return [...action.payload]
        }
        case ADD_TASK: {
            return [{ ...action.payload }, ...state]
        }
        case DELETE_TASK: {
            return [...state].filter(ele => ele._id !== action.payload).reverse()
        }
        case EDIT_TASK: {
            return [...state].map(ele => {
                if (ele._id === action.payload._id) {
                    return { ...ele, ...action.payload }
                } else {
                    return { ...ele }
                }
            }).reverse()
        }
        default: {
            return [...state]
        }
    }
}

export default tasksReducer