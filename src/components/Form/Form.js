import React from 'react'
import { Formik, Form } from 'formik'

const FormProvider = ({ formName = 'contact', initialValues = {}, children }) => {
    return (
        <Formik
       initialValues={{...initialValues}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         } 
         if(!values.firstName) {
             errors.firstName = 'Required'
         }
         if(!values.lastName) {
            errors.lastName = 'Required'
        }
        if(!values.enquiry) {
            errors.enquiry= 'Required'
        }
    
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(values).toString()
              }).then((res) => console.log(res, 'Form successfully submitted')).catch((error) => console.log(error, 'error'))
           
              setSubmitting(false);
         }, 1000);
       }}
     >
       {({ isSubmitting, submitForm, ...props}) => {
        const cloneChildren = React.Children.map(children, child => 
            React.cloneElement(child, {isSubmitting, submitForm, props}))
        return (
            <Form name={formName} method="POST" style={{width: "100%"}} data-netlify="true">
                <input type="hidden" name="form-name" value={formName} />
                {cloneChildren}
            </Form>
         )
       }}
     </Formik>
    )
}

export default FormProvider