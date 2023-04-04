import React from 'react'
import { Form } from '@formio/react';

const Experience = () => {

    const formData1 = {
        "components": [
            {
                "columns": [
                    {
                        "components": [
                            {
                                "label": "Class",
                                "placeholder": "Enter your class",
                                "allowMultipleMasks": false,
                                "inputMasks": [
                                    {
                                        "label": "",
                                        "mask": ""
                                    }
                                ],
                                "multiple": true,
                                "type": "textfield",
                                "input": true,
                                "key": "textField2"
                            }
                        ],
                        "width": 6,
                        "offset": 0,
                        "push": 0,
                        "pull": 0,
                        "type": "column",
                        "input": true,
                        "key": "",
                        "label": ""
                    },
                    {
                        "components": [
                            {
                                "label": "Year",
                                "placeholder": "Enter your year",
                                "allowMultipleMasks": false,
                                "inputMasks": [
                                    {
                                        "label": "",
                                        "mask": ""
                                    }
                                ],
                                "multiple": true,
                                "type": "textfield",
                                "input": true,
                                "key": "textField3"
                            }
                        ],
                        "width": 6,
                        "offset": 0,
                        "push": 0,
                        "pull": 0,
                        "type": "column",
                        "input": true,
                        "key": "",
                        "label": ""
                    }
                ],
                "label": "Columns",
                "hideLabel": true,
                "multiple": true,
                "mask": false,
                "type": "columns",
                "input": false,
                "key": "columns"
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
    
    
    const formData = {
        "components": [
            {
                "addAnotherPosition": "bottom",
                "label": "Data Grid",
                "hideLabel": true,
                "addAnother": "",
                "mask": false,
                "type": "datagrid",
                "input": true,
                "key": "dataGrid",
                "components": [
                    {
                        "label": false,
                        "hideLabel": true,
                        "placeholder": "Enter your class",
                        "errorLabel": "Please fill your class",
                        "allowMultipleMasks": false,
                        "inputMasks": [
                            {
                                "label": "",
                                "mask": ""
                            }
                        ],
                        "type": "textfield",
                        "input": true,
                        "key": "textField2",
                        "row": "0-0"
                    },
                    {
                        "label": false,
                        "placeholder": "Enter your year",
                        "errorLabel": "Please fill your year",
                        "allowMultipleMasks": false,
                        "inputMasks": [
                            {
                                "label": "",
                                "mask": ""
                            }
                        ],
                        "type": "textfield",
                        "input": true,
                        "key": "textField",
                        "row": "0-1"
                    }
                ]
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
            <h1 className='text-3xl font-bold mb-6'>Experience</h1>
            <Form src={formData} onSubmit={onSubmit} />
        </div>
    )
}

export default Experience