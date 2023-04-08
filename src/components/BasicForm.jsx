import React from 'react'
import { Form } from '@formio/react';

const BasicForm = () => {

  const formData = {
    "components": [
      {
        "label": "Name",
        "placeholder": "Enter your name",
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
        "defaultValue": "",
        "validate": {
          "required": true,
          "minLength": null,
          "maxLength": null,
          "unique": true,
          "customMessage": "Name is not valid",
          "json": ""
        }
      },
      {
        "label": "Email",
        "placeholder": "Enter your email",
        "type": "email",
        "input": true,
        "key": "email2",
        "defaultValue": "",
        "validate": {
          "required": true,
          "unique": true,
          "customMessage": "Email is not valid",
          "json": ""
        }
      },
      {
        "label": "Phone Number",
        "placeholder": "Enter your mobile no",
        "allowMultipleMasks": false,
        "inputMasks": [
          {
            "label": "",
            "mask": ""
          }
        ],
        "type": "phoneNumber",
        "input": true,
        "key": "phoneNumber2"
      },
      {
        "label": "Pan Card Number",
        "placeholder": "Enter your pan card no",
        "allowMultipleMasks": false,
        "inputMasks": [
          {
            "label": "",
            "mask": ""
          }
        ],
        "customClass": ".text-warning",
        "type": "textfield",
        "input": true,
        "key": "aadhar",
        "defaultValue": "",
        "validate": {
          "required": true,
          "minLength": null,
          "maxLength": null,
          "pattern": "[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}",
          "unique": true,
          "customMessage": "Pan card no is not valid",
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
        "label": "Aadhar Card Number",
        "placeholder": "Enter your aadhar no",
        "allowMultipleMasks": false,
        "inputMasks": [
          {
            "label": "",
            "mask": ""
          }
        ],
        "type": "textfield",
        "input": true,
        "key": "aadhar2",
        "defaultValue": "",
        "validate": {
          "required": true,
          "minLength": null,
          "maxLength": null,
          "pattern": "^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$",
          "unique": true,
          "customMessage": "Aadhar number is not valid",
          "json": ""
        }
      },
      {
        "label": "Date of Birth",
        "mask": false,
        "type": "day",
        "input": true,
        "key": "day2",
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
        "defaultValue": "Invalid date",
        "validate": {
          "customMessage": "Please fill date of birth",
          "unique": false,
          "json": ""
        }
      },
      {
        "optionsLabelPosition": "right",
        "values": {
          "0": {
            "label": "Male",
            "value": "male"
          },
          "1": {
            "label": "Female",
            "value": "female"
          },
          "2": {
            "label": "Other",
            "value": "other"
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
        "label": "Current Address",
        "mask": false,
        "type": "container",
        "input": true,
        "key": "container",
        "components": [
          {
            "label": "Current Address",
            "placeholder": "address 1",
            "allowMultipleMasks": false,
            "inputMasks": [
                {
                    "label": "",
                    "mask": ""
                }
            ],
            "type": "textfield",
            "input": true,
            "key": "currentAddress"
        },
          {
            "label": "",
            "hideLabel": true,
            "placeholder": "address 2",
            "allowMultipleMasks": false,
            "inputMasks": [
              {
                "label": "",
                "mask": ""
              }
            ],
            "type": "textfield",
            "input": true,
            "key": "address2"
          },
          {
            "columns": [
              {
                "components": [
                  {
                    "label": "Country",
                    "placeholder": "Choose your country",
                    "mask": false,
                    "type": "select",
                    "input": true,
                    "key": "select",
                    "valueProperty": "value"
                  },
                  {
                    "label": "District",
                    "placeholder": "Choose your district",
                    "mask": false,
                    "type": "select",
                    "input": true,
                    "key": "select",
                    "valueProperty": "value"
                  },
                  {
                    "label": "Pincode",
                    "placeholder": "Enter your pincode",
                    "allowMultipleMasks": false,
                    "inputMasks": [
                      {
                        "label": "",
                        "mask": ""
                      }
                    ],
                    "type": "textfield",
                    "input": true,
                    "key": "textField"
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
                    "placeholder": "Choose your state",
                    "mask": false,
                    "type": "select",
                    "input": true,
                    "key": "state",
                    "valueProperty": "value"
                  },
                  {
                    "label": "City",
                    "placeholder": "Choose your city",
                    "mask": false,
                    "type": "select",
                    "input": true,
                    "key": "cIty",
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
          }
        ]
      },

     
      {
        "addAnotherPosition": "bottom",
        "label": "Qualification",
        "addAnother": "",
        "multiple": true,
        "mask": false,
        "type": "datagrid",
        "input": true,
        "key": "qualification",
        "components": [
            {
                "label": false,
                "hideLabel": true,
                "placeholder": "College/Institution",
                "allowMultipleMasks": false,
                "inputMasks": [
                    {
                        "label": "",
                        "mask": ""
                    }
                ],
                "customClass": "Width auto",
                "tableView": false,
                "type": "textfield",
                "input": true,
                "key": "textField2",
                "row": "0-0"
            },
            {
                "label": false,
                "hideLabel": true,
                "placeholder": "degree",
                "allowMultipleMasks": false,
                "inputMasks": [
                    {
                        "label": "",
                        "mask": ""
                    }
                ],
                "customClass": "Width auto",
                "tableView": false,
                "type": "textfield",
                "input": true,
                "key": "textField3",
                "row": "0-1"
            },
            {
                "label": false,
                "hideLabel": true,
                "placeholder": "year of passing",
                "customClass": "Width auto",
                "mask": false,
                "tableView": false,
                "type": "number",
                "input": true,
                "key": "marks",
                "row": "0-2"
            },
            {
                "label": false,
                "hideLabel": true,
                "placeholder": "marks type",
                "customClass": "Width auto",
                "mask": false,
                "tableView": false,
                "type": "select",
                "input": true,
                "key": "select",
                "row": "0-3",
                "defaultValue": "",
                "validate": {
                    "select": false,
                    "unique": false,
                    "customMessage": "",
                    "json": ""
                },
                "data": {
                    "values": {
                        "0": {
                            "label": "percent",
                            "value": "percent"
                        },
                        "1": {
                            "label": "CGPA",
                            "value": "cgpa"
                        },
                        "2": {
                            "label": "others",
                            "value": "others"
                        }
                    }
                },
                "url": "",
                "resource": null,
                "valueProperty": "value",
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
                "placeholder": "marks",
                "customClass": "Width auto",
                "mask": false,
                "tableView": false,
                "type": "number",
                "input": true,
                "key": "marks2",
                "row": "0-4"
            }
        ]
    },


    {
      "addAnotherPosition": "bottom",
      "label": "Experience",
      "addAnother": "",
      "multiple": true,
      "mask": false,
      "type": "datagrid",
      "input": true,
      "key": "experience",
      "components": [
          {
              "label": false,
              "hideLabel": true,
              "placeholder": "Company",
              "allowMultipleMasks": false,
              "inputMasks": [
                  {
                      "label": "",
                      "mask": ""
                  }
              ],
              "type": "textfield",
              "input": true,
              "key": "company",
              "row": "0-0"
          },
          {
              "label": false,
              "hideLabel": true,
              "placeholder": "Designation",
              "allowMultipleMasks": false,
              "inputMasks": [
                  {
                      "label": "",
                      "mask": ""
                  }
              ],
              "type": "textfield",
              "input": true,
              "key": "designation",
              "row": "0-1"
          },
          {
              "label": "",
              "hideLabel": true,
              "placeholder": " Duration(in years)",
              "mask": false,
              "type": "number",
              "input": true,
              "key": "durationInYears"
          }
      ]
  },


  {
            "label": "Profile Photo",
            "placeholder": "Choose a profile photo",
            "mask": false,
            "tableView": false,
            "type": "file",
            "input": true,
            "key": "profilePhoto",
            "validate": {
                "required": true,
                "unique": false,
                "customMessage": "Please select a photo",
                "json": ""
            },
            "storage": "base64",
            "dir": "",
            "url": "",
            "imageSize": ""
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
      <h1 className='text-3xl font-bold mb-6'>BasicForm</h1>
      <Form src={formData} onSubmit={onSubmit} />
    </div>
  )
}

export default BasicForm