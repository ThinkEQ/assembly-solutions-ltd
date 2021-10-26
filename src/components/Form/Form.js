import React from 'react'
import { navigate } from 'gatsby'
import { Formik, Form } from 'formik'

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
         const numbers = /^[0-9]+$/
         if (!values.email.trim()) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         } 
         if(!values.fullName.trim() && setRules.includes('fullName')) {
             errors.fullName = 'Required'
         }
         /* if(!values.company.trim() && setRules.includes('company')) {
            errors.company = 'Required'
        } */
        if(!values.enquiry.trim() && setRules.includes('enquiry')) {
            errors.enquiry= 'Required'
        }

        if(setRules.includes('telephone')) {

          if (values.telephone.length > 0 && !values.telephone.match(numbers)) {
             errors.telephone = 'Numbers only'
          }
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
              }).then(() => navigate(url)).catch((error) => alert(error))
           
              setSubmitting(false);
         }, 1000);
       }}
     >
       {({ isSubmitting }) => {
        const cloneChildren = React.Children.map(children, child => 
            React.cloneElement(child, { isSubmitting }))
        return (
            <Form name={formName} method="POST" style={{width: "100%"}} data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />    
                <input type="hidden" name="form-name" value={formName} />
                {cloneChildren}
            </Form>
         )
       }}
     </Formik>
    )
}

export default FormProvider