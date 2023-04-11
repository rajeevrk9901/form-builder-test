import React from 'react'
import { Form } from '@formio/react';
import indianState from '../Data/IndianState.json'
import countryCode from '../Data/CountryCode.json'

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
        "key": "email",
        "defaultValue": "",
        "validate": {
          "required": true,
          "unique": true,
          "customMessage": "Email is not valid",
          "json": ""
        }
      },
      {
        "label": "Mobile Number",
        "columns": [
          {
            "components": [
              {
                "label": "CountryCode",
                "widget": "choicesjs",
                "tableView": true,
                "dataSrc": "json",
                "defaultValue": {
                  "name": "India",
                  "dial_code": "+91",
                  "code": "IN"
                },
                "data": {
                  "json": countryCode
                },
                "template": "<span>{{ item.dial_code }}</span>",
                "key": "select",
                "type": "select",
                "input": true
              }
            ],
            "offset": 0,
            "push": 0,
            "pull": 0,
            "size": "md",
            "currentWidth": 2,
            "width": 2
          },
          {
            "components": [
              {
                "label": "Mobile Number",
                "mask": false,
                "tableView": false,
                "delimiter": false,
                "requireDecimal": false,
                "inputFormat": "plain",
                "truncateMultipleSpaces": false,
                "key": "number",
                "type": "number",
                "input": true
              }
            ],
            "width": 6,
            "offset": 0,
            "push": 0,
            "pull": 0,
            "size": "md",
            "currentWidth": 6
          }
        ],
        "autoAdjust": true,
        "key": "columns",
        "type": "columns",
        "input": false,
        "tableView": false
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
        "key": "pan",
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
        "key": "aadhar",
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
        "defaultValue": "Invalid date",
        "validate": {
          "customMessage": "Please fill date of birth",
          "unique": false,
          "json": ""
        }
      },
      {
        "label": "Gender",
        "optionsLabelPosition": "right",
        "customClass": "",
        "inline": true,
        "tableView": false,
        "values": [
          {
            "label": "MALE",
            "value": "male",
            "shortcut": ""
          },
          {
            "label": "FEMALE",
            "value": "female",
            "shortcut": ""
          },
          {
            "label": "OTHER",
            "value": "other",
            "shortcut": ""
          }
        ],
        "key": "gender",
        "type": "radio",
        "input": true
      },

      {
        "label": "Current Address",
        "mask": false,
        "type": "container",
        "input": true,
        "key": "currAddress",
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
            "key": "currentAddress1"
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
            "key": "currentAddress2"
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
                    "key": "currCountry",
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
                      "json": [
                        {
                          "id": 101,
                          "name": "India",
                          "iso3": "IND",
                          "iso2": "IN",
                          "numeric_code": "356",
                          "phone_code": "91",
                          "capital": "New Delhi",
                          "currency": "INR",
                          "currency_name": "Indian rupee",
                          "currency_symbol": "₹",
                          "tld": ".in",
                          "native": "भारत",
                          "region": "Asia",
                          "subregion": "Southern Asia",
                          "timezones": [
                            {
                              "zoneName": "Asia/Kolkata",
                              "gmtOffset": 19800,
                              "gmtOffsetName": "UTC+05:30",
                              "abbreviation": "IST",
                              "tzName": "Indian Standard Time"
                            }
                          ],
                          "translations": {
                            "kr": "인도",
                            "pt-BR": "Índia",
                            "pt": "Índia",
                            "nl": "India",
                            "hr": "Indija",
                            "fa": "هند",
                            "de": "Indien",
                            "es": "India",
                            "fr": "Inde",
                            "ja": "インド",
                            "it": "India",
                            "cn": "印度",
                            "tr": "Hindistan"
                          },
                          "latitude": "20.00000000",
                          "longitude": "77.00000000",
                          "emoji": "🇮🇳",
                          "emojiU": "U+1F1EE U+1F1F3"
                        },
                        {
                          "id": 102,
                          "name": "Indonesia",
                          "iso3": "IDN",
                          "iso2": "ID",
                          "numeric_code": "360",
                          "phone_code": "62",
                          "capital": "Jakarta",
                          "currency": "IDR",
                          "currency_name": "Indonesian rupiah",
                          "currency_symbol": "Rp",
                          "tld": ".id",
                          "native": "Indonesia",
                          "region": "Asia",
                          "subregion": "South-Eastern Asia",
                          "timezones": [
                            {
                              "zoneName": "Asia/Jakarta",
                              "gmtOffset": 25200,
                              "gmtOffsetName": "UTC+07:00",
                              "abbreviation": "WIB",
                              "tzName": "Western Indonesian Time"
                            },
                            {
                              "zoneName": "Asia/Jayapura",
                              "gmtOffset": 32400,
                              "gmtOffsetName": "UTC+09:00",
                              "abbreviation": "WIT",
                              "tzName": "Eastern Indonesian Time"
                            },
                            {
                              "zoneName": "Asia/Makassar",
                              "gmtOffset": 28800,
                              "gmtOffsetName": "UTC+08:00",
                              "abbreviation": "WITA",
                              "tzName": "Central Indonesia Time"
                            },
                            {
                              "zoneName": "Asia/Pontianak",
                              "gmtOffset": 25200,
                              "gmtOffsetName": "UTC+07:00",
                              "abbreviation": "WIB",
                              "tzName": "Western Indonesian Time"
                            }
                          ],
                          "translations": {
                            "kr": "인도네시아",
                            "pt-BR": "Indonésia",
                            "pt": "Indonésia",
                            "nl": "Indonesië",
                            "hr": "Indonezija",
                            "fa": "اندونزی",
                            "de": "Indonesien",
                            "es": "Indonesia",
                            "fr": "Indonésie",
                            "ja": "インドネシア",
                            "it": "Indonesia",
                            "cn": "印度尼西亚",
                            "tr": "Endonezya"
                          },
                          "latitude": "-5.00000000",
                          "longitude": "120.00000000",
                          "emoji": "🇮🇩",
                          "emojiU": "U+1F1EE U+1F1E9"
                        }
                      ]
                    },
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "customConditional": "",
                    "dataSrc": "json",
                    "template": "<span>{{ item.name }}</span>",
                    "limit": null,
                    "url": "",
                    "resource": null,
                    "valueProperty": null,
                    "selectValues": "",
                    "disableLimit": false,
                    "searchField": "",
                    "refreshOn": null,
                    "clearOnRefresh": false,
                    "reference": false
                  },
                  {
                    "label": "District",
                    "placeholder": "Choose your district",
                    "mask": false,
                    "type": "select",
                    "input": true,
                    "key": "currDistrict",
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
                    "key": "pincode"
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
                    "defaultValue": "",
                    "data": {
                      "json": indianState,
                    },
                    "dataSrc": "json",
                    "template": "<span>{{ item.name }}</span>",
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
                    "label": "City",
                    "placeholder": "Choose your city",
                    "mask": false,
                    "type": "select",
                    "input": true,
                    "key": "currCity",
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
        "label": "Same as Current Address",
        "mask": false,
        "type": "checkbox",
        "input": true,
        "key": "sameAsCurrentAddress"
      },
      {
        "label": "Permanent Address",
        "mask": false,
        "type": "container",
        "input": true,
        "key": "permaAddress",
        "components": [
          {
            "label": "Permanent Address",
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
            "key": "permaAddress1"
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
            "key": "permaAddress2"
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
                    "key": "permaCountry",
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
                      "json": [
                        {
                          "id": 101,
                          "name": "India",
                          "iso3": "IND",
                          "iso2": "IN",
                          "numeric_code": "356",
                          "phone_code": "91",
                          "capital": "New Delhi",
                          "currency": "INR",
                          "currency_name": "Indian rupee",
                          "currency_symbol": "₹",
                          "tld": ".in",
                          "native": "भारत",
                          "region": "Asia",
                          "subregion": "Southern Asia",
                          "timezones": [
                            {
                              "zoneName": "Asia/Kolkata",
                              "gmtOffset": 19800,
                              "gmtOffsetName": "UTC+05:30",
                              "abbreviation": "IST",
                              "tzName": "Indian Standard Time"
                            }
                          ],
                          "translations": {
                            "kr": "인도",
                            "pt-BR": "Índia",
                            "pt": "Índia",
                            "nl": "India",
                            "hr": "Indija",
                            "fa": "هند",
                            "de": "Indien",
                            "es": "India",
                            "fr": "Inde",
                            "ja": "インド",
                            "it": "India",
                            "cn": "印度",
                            "tr": "Hindistan"
                          },
                          "latitude": "20.00000000",
                          "longitude": "77.00000000",
                          "emoji": "🇮🇳",
                          "emojiU": "U+1F1EE U+1F1F3"
                        },
                        {
                          "id": 102,
                          "name": "Indonesia",
                          "iso3": "IDN",
                          "iso2": "ID",
                          "numeric_code": "360",
                          "phone_code": "62",
                          "capital": "Jakarta",
                          "currency": "IDR",
                          "currency_name": "Indonesian rupiah",
                          "currency_symbol": "Rp",
                          "tld": ".id",
                          "native": "Indonesia",
                          "region": "Asia",
                          "subregion": "South-Eastern Asia",
                          "timezones": [
                            {
                              "zoneName": "Asia/Jakarta",
                              "gmtOffset": 25200,
                              "gmtOffsetName": "UTC+07:00",
                              "abbreviation": "WIB",
                              "tzName": "Western Indonesian Time"
                            },
                            {
                              "zoneName": "Asia/Jayapura",
                              "gmtOffset": 32400,
                              "gmtOffsetName": "UTC+09:00",
                              "abbreviation": "WIT",
                              "tzName": "Eastern Indonesian Time"
                            },
                            {
                              "zoneName": "Asia/Makassar",
                              "gmtOffset": 28800,
                              "gmtOffsetName": "UTC+08:00",
                              "abbreviation": "WITA",
                              "tzName": "Central Indonesia Time"
                            },
                            {
                              "zoneName": "Asia/Pontianak",
                              "gmtOffset": 25200,
                              "gmtOffsetName": "UTC+07:00",
                              "abbreviation": "WIB",
                              "tzName": "Western Indonesian Time"
                            }
                          ],
                          "translations": {
                            "kr": "인도네시아",
                            "pt-BR": "Indonésia",
                            "pt": "Indonésia",
                            "nl": "Indonesië",
                            "hr": "Indonezija",
                            "fa": "اندونزی",
                            "de": "Indonesien",
                            "es": "Indonesia",
                            "fr": "Indonésie",
                            "ja": "インドネシア",
                            "it": "Indonesia",
                            "cn": "印度尼西亚",
                            "tr": "Endonezya"
                          },
                          "latitude": "-5.00000000",
                          "longitude": "120.00000000",
                          "emoji": "🇮🇩",
                          "emojiU": "U+1F1EE U+1F1E9"
                        }
                      ]
                    },
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "customConditional": "",
                    "dataSrc": "json",
                    "template": "<span>{{ item.name }}</span>",
                    "limit": null,
                    "url": "",
                    "resource": null,
                    "valueProperty": null,
                    "selectValues": "",
                    "disableLimit": false,
                    "searchField": "",
                    "refreshOn": null,
                    "clearOnRefresh": false,
                    "reference": false
                  },
                  {
                    "label": "District",
                    "placeholder": "Choose your district",
                    "mask": false,
                    "type": "select",
                    "input": true,
                    "key": "permaDistrict",
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
                    "key": "permaPincode"
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
                    "defaultValue": "",
                    "data": {
                      "json": indianState,
                    },
                    "dataSrc": "json",
                    "template": "<span>{{ item.name }}</span>",
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
                    "label": "City",
                    "placeholder": "Choose your city",
                    "mask": false,
                    "type": "select",
                    "input": true,
                    "key": "permaCity",
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