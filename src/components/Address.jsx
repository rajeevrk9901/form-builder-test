import React from 'react'
import { Form } from '@formio/react';

const Address = () => {

    const formData = {
        "components": [
            {
                "input": true,
                "key": "dataGrid",
                "label": "Data Grid",
                "type": "datagrid",
                "components": [
                    {
                        "label": false,
                        "hideLabel": true,
                        "placeholder": "District",
                        "mask": false,
                        "type": "select",
                        "input": true,
                        "key": "select",
                        "row": "0-0",
                        "defaultValue": "",
                        "data": {
                            "values": {
                                "0": {
                                    "0": {
                                        "label": "Bihar",
                                        "value": "bihar"
                                    },
                                    "1": {
                                        "label": "Delhi",
                                        "value": "delhi"
                                    },
                                    "2": {
                                        "label": "Haryana",
                                        "value": "haryana"
                                    },
                                    "3": {
                                        "label": "Punjab",
                                        "value": "punjab"
                                    },
                                    "label": "Jehanabad",
                                    "value": "jehanabad"
                                },
                                "1": {
                                    "label": "Abc",
                                    "value": "abc"
                                },
                                "2": {
                                    "label": "abc2",
                                    "value": "abc2"
                                }
                            }
                        },
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
                        "label": false,
                        "hideLabel": true,
                        "placeholder": "State",
                        "mask": false,
                        "type": "select",
                        "input": true,
                        "key": "select2",
                        "row": "0-1",
                        "defaultValue": "",
                        "data": {
                            "values": {
                                "0": {
                                    "label": "Delhi",
                                    "value": "delhi"
                                },
                                "1": {
                                    "label": "Patna",
                                    "value": "patna"
                                },
                                "2": {
                                    "label": "nnn",
                                    "value": "nnn"
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
                    },
                    {
                        "label": "false",
                        "hideLabel": true,
                        "placeholder": "Country",
                        "mask": false,
                        "type": "select",
                        "input": true,
                        "key": "select3",
                        "row": "0-2",
                        "defaultValue": "",
                        "data": {
                            "values": {
                                "0": {
                                    "label": "India",
                                    "value": "india"
                                },
                                "1": {
                                    "label": "America",
                                    "value": "america"
                                },
                                "2": {
                                    "label": "China",
                                    "value": "china"
                                }
                            }
                        },
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
            <h1 className='text-3xl font-bold mb-6'>Address</h1>
            <Form src={formData} onSubmit={onSubmit} />
        </div>
  )
}

export default Address