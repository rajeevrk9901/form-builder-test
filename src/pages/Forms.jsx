import { useState } from 'react';

import { Form, FormBuilder } from '@formio/react';
// import "formiojs/dist/formio.full.css";
// import Form from '@formio/react/lib/components/Form';


const Forms = () => {

    const [formSchema, setFormSchema] = useState({
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
                type: 'textarea',
                key: 'message',
                label: 'Message',
                input: true,
                rows: 5,
                className: 'mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
            },
            {
                type: 'button',
                action: 'submit',
                label: 'Submit',
                className: 'mt-4 py-2 px-4 bg-blue-500 text-black font-bold rounded hover:bg-blue-700 text-black !important'
            }
        ]
    });

    const form1 = {
        "components": [
            {
                "addAnotherPosition": "bottom",
                "label": "Data Grid",
                "addAnother": "",
                "mask": false,
                "type": "datagrid",
                "input": true,
                "key": "dataGrid",
                "components": [
                    {
                        "label": false,
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
                        "allowMultipleMasks": false,
                        "inputMasks": [
                            {
                                "label": "",
                                "mask": ""
                            }
                        ],
                        "type": "textfield",
                        "input": true,
                        "key": "textField3",
                        "row": "0-1"
                    }
                ]
            },
            {
                "label": "Text Field",
                "allowMultipleMasks": false,
                "inputMasks": [
                    {
                        "label": "",
                        "mask": ""
                    }
                ],
                "type": "textfield",
                "input": true,
                "key": "textField4"
            },
            {
                "type": "button",
                "label": "Submit",
                "key": "submit",
                "disableOnInvalid": true,
                "theme": "primary",
                "input": true
            },
            {
                "label": "Text Field",
                "allowMultipleMasks": false,
                "inputMasks": [
                    {
                        "label": "",
                        "mask": ""
                    }
                ],
                "type": "textfield",
                "input": true,
                "key": "textField5"
            }
        ],
        "display": "form"
    }

    // const form = {
    //   name: 'My Form',
    //   fields: [
    //     {
    //       type: 'text',
    //       name: 'Name',
    //       label: 'Your Name',
    //     },
    //     {
    //       type: 'email',
    //       name: 'Email',
    //       label: 'Your Email Address',
    //     },
    //     {
    //       type: 'submit',
    //       name: 'Submit',
    //       label: 'Submit',
    //     },
    //   ],
    // };

    const form = {
        components: [
            {
                type: 'textfield',
                key: 'firstName',
                label: 'First Name',
                input: true,
            },
            {
                type: 'textfield',
                key: 'lastName',
                label: 'Last Name',
                input: true,
            },
            {
                type: 'email',
                key: 'email',
                label: 'Email',
                input: true,
            },
            {
                type: 'textarea',
                key: 'message',
                label: 'Message',
                input: true,
            },
        ],
    };

    const onSubmit = (submission) => {
        console.log('Form data:', submission.data);
    };

    return (
        // <FormBuilder
        //   form={formSchema}
        //   onChange={setFormSchema}
        //   options={{ builder: { basic: false } }}
        // />

        // <div className='w-56 flex justify-center'>
        //   <Form src={formSchema} />
        // </div>

        <div className='w-full max-w-lg mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
            <Form src={form1} onSubmit={onSubmit} />
        </div>

    );
};

export default Forms;
