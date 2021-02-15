import React from 'react'
import * as yup from 'yup'
import { useFormik, yupToFormErrors } from 'formik'
import { Form, Button } from 'react-bootstrap'

import InputText from 'components/molecules/inputText'
import InputSelect from 'components/molecules/inputSelect'

const LOCATIONS: Array<{ value: string, label: string}> = [
    { value: 'physical', label: 'Physical' },
    { value: 'service', label: 'Service' },
    { value: 'other', label: 'Other' },
]

const schema = yup.object().shape({
    name: yup.string().required(),
    type: yup.string().required(),
})

const FormLocationCreate = React.memo(() => {
    const onSubmit = (values) => {
        formik.setSubmitting(true)
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            formik.setSubmitting(false)
        }, 400)
    }

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            name: '',
            type: '',
        },
        onSubmit,
    })

    console.log('formik', formik.touched);

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <InputText 
                label="Name" 
                name="name"
                touched={formik.touched.name}
                errors={formik.errors.name}
                onChange={value => formik.setFieldValue('name', value)} 
            />
            <InputSelect 
                id="select-fix"
                label="Type?" 
                name="type"
                touched={formik.touched.type}
                errors={formik.errors.type} 
                options={LOCATIONS} 
                onChange={value => formik.setFieldValue('type', value)}
            />
            <Button type="submit" disabled={formik.isSubmitting === true}>
                Submit
            </Button>
        </Form>
    )
})

export default FormLocationCreate
