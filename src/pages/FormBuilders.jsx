import React from 'react'
import { FormBuilder } from '@formio/react'

const FormBuilders = () => {

    const initialValues = {
        components: [
            {
                type: 'textfield',
                key: 'firstName',
                label: 'First Name',
                placeholder: 'Enter your first name',
                input: true,
                className: 'mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
            },
            {
                type: 'textfield',
                key: 'lastName',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                input: true,
                className: 'mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
            },
            {
                type: 'email',
                key: 'email',
                label: 'Email',
                input: true,
                className: 'mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
            },
            {
                "type": "button",
                "label": "Submit",
                "key": "submit",
                "disableOnInvalid": true,
                "input": true,
                "tableView": false
            }
        ]
    }

    return (
        <div>

            <FormBuilder
                form={initialValues}
                options={{ builder: { basic: false } }}
                onChange={(submission) => {
                    console.log('Form data:', submission.data);
                }}
            />


        </div>
    )
}

export default FormBuilders