import React from 'react'
import { Form } from '@formio/react';

const BasicInfo = () => {

  const formData = {
    "components": [
      {
        "columns": [
          {
            "components": [
              {
                "label": "First Name",
                "placeholder": "Enter your first name",
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
                "placeholder": "Enter your last name",
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
        ],
        "label": "Columns",
        "mask": false,
        "type": "columns",
        "input": false,
        "key": "columns"
      },
      {
        "label": "Date of birth",
        "mask": false,
        "type": "day",
        "input": true,
        "key": "dateOfBirth",
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
        }
      },
      {
        "label": "Enter your skills",
        "allowMultipleMasks": false,
        "inputMasks": [
          {
            "label": "",
            "mask": ""
              }
        ],
        "type": "textfield",
        "input": true,
        "key": "enterYourSkills"
      },
      {
        "input": false,
        "key": "columns",
        "label": "Columns",
        "type": "columns",
        "columns": [
          {
            "components": [],
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
            "components": [],
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
        "label": "Submit",
        "headers": [
          {
            "header": "",
            "value": ""
              }
        ],
        "mask": false,
        "type": "button",
        "input": true,
        "key": "submit2",
        "event": "",
        "url": "",
        "custom": ""
      }
    ],
    "display": "form"
  }



  const onSubmit = (submission) => {
    console.log('Form data:', submission.data);
};

  return (
    <div className='w-full max-w-lg mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>Basic Info</h1>
            <Form src={formData} onSubmit={onSubmit} />
        </div>
  )
}

export default BasicInfo