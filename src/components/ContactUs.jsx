import React from 'react'
import { Form } from '@formio/react';

const ContactUs = () => {

    const formData = {
        "components": [
            {
                "label": "Mobile no",
                "placeholder": "Enter your mobile no",
                "allowMultipleMasks": false,
                "prefix": "+91",
                "multiple": true,
                "type": "textfield",
                "input": true,
                "key": "textField2"
            },
            {
                "type": "button",
                "label": "Submit",
                "key": "submit",
                "disableOnInvalid": true,
                "theme": "primary",
                "input": true
            }
        ],
        "display": "form"
    
    }

    const onSubmit = (submission) => {
        console.log('Form data:', submission.data);
    };


    return (
        <div className='w-full max-w-lg mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
            <Form src={formData} onSubmit={onSubmit} />
        </div>
    )
}

export default ContactUs