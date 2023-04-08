import { useState } from 'react';
import country from "../Data/Country.json"
import permaAdd from "../Data/PermanentAddress.json"
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

   const form2= {
    "components": [
        {
            "label": "Name",
            "allowMultipleMasks": false,
            "inputMasks": [
                {
                    "label": "",
                    "mask": ""
                }
            ],
            "type": "textfield",
            "input": true,
            "key": "name",
            "validate": {
                "required": true,
                "minLength": null,
                "maxLength": null,
                "unique": false,
                "customMessage": "",
                "json": ""
            }
        },
        {
            "label": "Email",
            "type": "email",
            "input": true,
            "key": "email2",
            "validate": {
                "unique": true,
                "customMessage": "",
                "json": "",
                "required": true
            }
        },
        {
            "label": "Phone Number",
            "inputMask": "(+99) 9999999999",
            "allowMultipleMasks": false,
            "inputMasks": [
                {
                    "label": "",
                    "mask": ""
                }
            ],
            "type": "phoneNumber",
            "input": true,
            "key": "phoneNumber2",
            "defaultValue": "(+91) __________",
            "validate": {
                "minLength": null,
                "maxLength": null,
                "unique": true,
                "customMessage": "",
                "json": "",
                "required": true
            },
            "conditional": {
                "json": ""
            },
            "properties": [
                {
                    "key": "",
                    "value": ""
                }
            ],
            "logic": [],
            "customConditional": "",
            "tags": []
        },
        {
            "label": "Aadhar",
            "allowMultipleMasks": false,
            "inputMasks": [
                {
                    "label": "",
                    "mask": ""
                }
            ],
            "type": "textfield",
            "input": true,
            "key": "aadhar",
            "validate": {
                "required": true,
                "minLength": null,
                "maxLength": null,
                "pattern": "^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$",
                "unique": true,
                "customMessage": "Please Enter Valid Aadhar Number",
                "json": ""
            }
        },
        {
            "label": "Pan",
            "allowMultipleMasks": false,
            "inputMasks": [
                {
                    "label": "",
                    "mask": ""
                }
            ],
            "type": "textfield",
            "input": true,
            "key": "pan",
            "defaultValue": "",
            "validate": {
                "required": true,
                "minLength": null,
                "maxLength": null,
                "pattern": "[A-Z]{5}[0-9]{4}[A-Z]{1}",
                "unique": true,
                "customMessage": "",
                "json": ""
            }
        },
        {
            "label": "Date Of Birth",
            "mask": false,
            "type": "day",
            "input": true,
            "key": "dob",
            "fields": {
                "day": {
                    "type": "number"
                },
                "month": {
                    "type": "select"
                },
                "year": {
                    "type": "number"
                }
            },
            "defaultValue": "1/31/1995",
            "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
            }
        },
        {
            "optionsLabelPosition": "right",
            "values": {
                "0": {
                    "label": "MALE",
                    "value": "male"
                },
                "1": {
                    "label": "FEMALE",
                    "value": "female"
                }
            },
            "label": "Gender",
            "inline": true,
            "mask": false,
            "type": "radio",
            "input": true,
            "key": "gender"
        },
        {
            "map": {
                "key": ""
            },
            "label": "Current Address",
            "type": "address",
            "input": true,
            "key": "currentAddress",
            "validate": {
                "required": true,
                "unique": false,
                "customMessage": "",
                "json": ""
            },
            "properties": [
                {
                    "key": "",
                    "value": ""
                }
            ],
            "logic": []
        },
        {
            "columns": [
                {
                    "components": [
                        {
                            "label": "Country",
                            "mask": false,
                            "type": "select",
                            "input": true,
                            "key": "select",
                            "defaultValue": "",
                            "validate": {
                                "required": true,
                                "select": false,
                                "unique": false,
                                "customMessage": "",
                                "json": ""
                            },
                            "conditional": {
                                "json": ""
                            },
                            "data": {
                                "json":country
                            },
                            "properties": [
                                {
                                    "key": "",
                                    "value": ""
                                }
                            ],
                            "tags": [],
                            "customConditional": "",
                            "valueProperty": "value",
                            "url": "",
                            "resource": null,
                            "selectValues": "",
                            "disableLimit": false,
                            "searchField": "",
                            "limit": null,
                            "refreshOn": null,
                            "clearOnRefresh": false,
                            "reference": false
                        },
                        {
                            "label": "District",
                            "mask": false,
                            "type": "select",
                            "input": true,
                            "key": "district",
                            "valueProperty": "value"
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
                            "label": "State",
                            "mask": false,
                            "type": "select",
                            "input": true,
                            "key": "state",
                            "valueProperty": "value"
                        },
                        {
                            "label": "City",
                            "mask": false,
                            "type": "select",
                            "input": true,
                            "key": "city",
                            "valueProperty": "value"
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
            "label": "CurrenAddress",
            "mask": false,
            "type": "columns",
            "input": false,
            "key": "currenAddress"
        },
        {
            "label": "Same as Current Address",
            "mask": false,
            "type": "checkbox",
            "input": true,
            "key": "sameAsCurrentAddress"
        },
        {
            "map": {
                "key": ""
            },
            "label": "Permanent Address",
            "type": "address",
            "input": true,
            "key": "permanentAddress",
            "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
            },
            "properties": [
                {
                    "key": "County",
                    "value": "123"
                },
                {
                    "key": "",
                    "value": ""
                }
            ],
            "tags": []
        },
        {
            "columns": [
                {
                    "components": [
                        {
                            "label": "Country",
                            "mask": false,
                            "type": "select",
                            "input": true,
                            "key": "country",
                            "valueProperty": "value"
                        },
                        {
                            "label": "District",
                            "mask": false,
                            "type": "select",
                            "input": true,
                            "key": "district2",
                            "valueProperty": "value"
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
                            "label": "State",
                            "mask": false,
                            "type": "select",
                            "input": true,
                            "key": "state2",
                            "valueProperty": "value"
                        },
                        {
                            "label": "City",
                            "mask": false,
                            "type": "select",
                            "input": true,
                            "key": "city2",
                            "valueProperty": "value"
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


    // First Name Last Name
    const fnln = {
        "components": [
            {
                "input": false,
                "key": "columns",
                "label": "Columns",
                "type": "columns",
                "columns": [
                    {
                        "components": [
                            {
                                "label": "First Name",
                                "allowMultipleMasks": false,
                                "inputMasks": [
                                    {
                                        "label": "",
                                        "mask": ""
                                    }
                                ],
                                "type": "textfield",
                                "input": true,
                                "key": "firstName"
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
                                "label": "Last Name",
                                "allowMultipleMasks": false,
                                "inputMasks": [
                                    {
                                        "label": "",
                                        "mask": ""
                                    }
                                ],
                                "type": "textfield",
                                "input": true,
                                "key": "lastName"
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

    const contactNum = {
        "components": [
            {
                "columns": [
                    {
                        "components": [
                            {
                                "label": "Country Code",
                                "mask": false,
                                "type": "select",
                                "input": true,
                                "key": "select",
                                "defaultValue": "",
                                "data": {
                                    "values": {
                                        "0": {
                                            "label": "+91",
                                            "value": "91"
                                        }
                                    }
                                },
                                "valueProperty": "value",
                                "limit": null,
                                "refreshOn": null,
                                "url": "",
                                "resource": null,
                                "selectValues": "",
                                "disableLimit": false,
                                "searchField": "",
                                "clearOnRefresh": false,
                                "reference": false
                            }
                        ],
                        "width": 2,
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
                                "label": "Mobile Number",
                                "allowMultipleMasks": false,
                                "inputMasks": [
                                    {
                                        "label": "",
                                        "mask": ""
                                    }
                                ],
                                "type": "textfield",
                                "input": true,
                                "key": "textField2"
                            }
                        ],
                        "width": 10,
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
        // contactNum fnln
        <div className='w-full max-w-lg mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
            <Form src={permaAdd} onSubmit={onSubmit} />
        </div>

    );
}; 

export default Forms;
