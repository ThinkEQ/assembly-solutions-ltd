import React from 'react'
import { navigate } from 'gatsby'
import { Formik, Form, Field } from 'formik'

const FormProvider = ({ formName = 'contact', initialValues = {}, children, url = '', setRules = [] }) => {

    function encode(data) {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    }
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
         if(!values.firstName && setRules.includes('firstName')) {
             errors.firstName = 'Required'
         }
         if(!values.lastName && setRules.includes('lastName')) {
            errors.lastName = 'Required'
        }
        if(!values.enquiry && setRules.includes('enquiry')) {
            errors.enquiry= 'Required'
        }
  
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {

         setTimeout(() => {
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                //body: new URLSearchParams(values).toString()
                body: encode({
                  'form-name': formName,
                  ...values,
                }),
              }).then(() => navigate(url)).catch((error) => console.log(error, 'error'))
           
              setSubmitting(false);
         }, 1000);
       }}
     >
       {({ isSubmitting }) => {
        const cloneChildren = React.Children.map(children, child => 
            React.cloneElement(child, { isSubmitting }))
        return (
            <Form name={formName} method="POST" style={{width: "100%"}} data-netlify={true} data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value={formName} />
                {cloneChildren}
            </Form>
         )
       }}
     </Formik>
    )
}

export default FormProvider