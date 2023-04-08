// Experience
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


// Profile photo
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



// address
{
    "label": "Current Address",
    "mask": false,
    "type": "container",
    "input": true,
    "key": "container",
    "components": [
      {
        "map": {
          "key": ""
        },
        "label": "Current  Address",
        "placeholder": "address 1",
        "type": "address",
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