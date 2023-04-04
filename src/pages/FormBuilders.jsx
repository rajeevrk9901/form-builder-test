import React, { useState } from 'react'
import { FormBuilder } from '@formio/react'

const FormBuilders = () => {

    const [jsonSchema, setJsonSchema] = useState([])
    const [copySuccess, setCopySuccess] = useState('');


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

    const handleFormChange = (submission) => {
        const formJson = JSON.stringify(submission, null, 2);
        console.log(formJson);
        // setJsonSchema(formJson)
    }


    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(jsonSchema);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div>

            <FormBuilder
                form={initialValues}

                onChange={handleFormChange}
            />

            <div className='pt-5 ml-5'>
                <button className="btn btn-primary" onClick={copyToClipboard}>Copy </button> <span>{copySuccess}</span>
                <pre>{jsonSchema}</pre>
            </div>


        </div>
    )
}

export default FormBuilders