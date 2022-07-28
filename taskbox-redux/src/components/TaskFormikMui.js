import { useFormik } from "formik";
import * as Yup from 'yup'

import { Box, Button, Stack, TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
//import { DatePicker } from '@mui/x-date-pickers';

const TaskFormikMui = (props) => {
    const { handleSubmission, title: taskTitle, body: taskBody, dueDate: taskDueDate } = props

    const formik = useFormik({
        initialValues: {
            title: taskTitle || '',
            body: taskBody || '',
            dueDate: taskDueDate || ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title Required'),
            body: Yup.string()
        }),
        onSubmit: (formData) => {
            const reset = formik.resetForm
            handleSubmission(formData, reset)
        }
    })

    return (
        <Box>
            <form onSubmit={formik.handleSubmit} >
                <Stack spacing={2}>

                    <TextField
                        label='Title'
                        name='title'
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />

                    <TextField
                        label='Body'
                        name='body'
                        value={formik.values.body}
                        onChange={formik.handleChange}
                        error={formik.touched.body && Boolean(formik.errors.body)}
                        helperText={formik.touched.body && formik.errors.body}
                    />

                    {/* <DatePicker
                        name='dueDate'
                        label="Basic example"
                        value={formik.values.dueDate}
                        onChange={formik.handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    /> */}

                    <TextField
                        focused
                        label='Due Date'
                        name='dueDate'
                        type='date'
                        value={formik.values.dueDate}
                        onChange={formik.handleChange}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>

                </Stack>
            </form>
        </Box>

    )
}

export default TaskFormikMui