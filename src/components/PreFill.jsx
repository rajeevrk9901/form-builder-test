import React, { useState } from 'react'
import { Form } from '@formio/react';
import indianState from '../Data/IndianState.json'
import countryCode from '../Data/CountryCode.json'

const PreFill = () => {

    // const formData = {
    //     "components": [
    //         {
    //             "label": "Name",
    //             "placeholder": "Enter your name",
    //             "allowMultipleMasks": false,
    //             "inputMasks": [
    //                 {
    //                     "label": "",
    //                     "mask": ""
    //                 }
    //             ],
    //             "type": "textfield",
    //             "input": true,
    //             "key": "name",
    //             "defaultValue": "",
    //             "validate": {
    //                 "required": true,
    //                 "minLength": null,
    //                 "maxLength": null,
    //                 "unique": true,
    //                 "customMessage": "Name is not valid",
    //                 "json": ""
    //             }
    //         },
    //         {
    //             "label": "Email",
    //             "placeholder": "Enter your email",
    //             "type": "email",
    //             "input": true,
    //             "key": "email",
    //             "defaultValue": "",
    //             "validate": {
    //                 "required": true,
    //                 "unique": true,
    //                 "customMessage": "Email is not valid",
    //                 "json": ""
    //             }
    //         },
    //         {
    //             "label": "Mobile Number",
    //             "columns": [
    //                 {
    //                     "components": [
    //                         {
    //                             "label": "CountryCode",
    //                             "widget": "choicesjs",
    //                             "tableView": true,
    //                             "dataSrc": "json",
    //                             "defaultValue": {
    //                                 "name": "India",
    //                                 "dial_code": "+91",
    //                                 "code": "IN"
    //                             },
    //                             "data": {
    //                                 "json": countryCode
    //                             },
    //                             "template": "<span>{{ item.dial_code }}</span>",
    //                             "key": "select",
    //                             "type": "select",
    //                             "input": true
    //                         }
    //                     ],
    //                     "offset": 0,
    //                     "push": 0,
    //                     "pull": 0,
    //                     "size": "md",
    //                     "currentWidth": 2,
    //                     "width": 2
    //                 },
    //                 {
    //                     "components": [
    //                         {
    //                             "label": "Mobile Number",
    //                             "mask": false,
    //                             "tableView": false,
    //                             "delimiter": false,
    //                             "requireDecimal": false,
    //                             "inputFormat": "plain",
    //                             "truncateMultipleSpaces": false,
    //                             "key": "number",
    //                             "type": "number",
    //                             "input": true
    //                         }
    //                     ],
    //                     "width": 6,
    //                     "offset": 0,
    //                     "push": 0,
    //                     "pull": 0,
    //                     "size": "md",
    //                     "currentWidth": 6
    //                 }
    //             ],
    //             "autoAdjust": true,
    //             "key": "columns",
    //             "type": "columns",
    //             "input": false,
    //             "tableView": false
    //         },
    //         {
    //             "label": "Pan Card Number",
    //             "placeholder": "Enter your pan card no",
    //             "allowMultipleMasks": false,
    //             "inputMasks": [
    //                 {
    //                     "label": "",
    //                     "mask": ""
    //                 }
    //             ],
    //             "customClass": ".text-warning",
    //             "type": "textfield",
    //             "input": true,
    //             "key": "pan",
    //             "defaultValue": "",
    //             "validate": {
    //                 "required": true,
    //                 "minLength": null,
    //                 "maxLength": null,
    //                 "pattern": "[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}",
    //                 "unique": true,
    //                 "customMessage": "Pan card no is not valid",
    //                 "json": ""
    //             },
    //             "properties": [
    //                 {
    //                     "key": "",
    //                     "value": ""
    //                 }
    //             ],
    //             "logic": []
    //         },
    //         {
    //             "label": "Aadhar Card Number",
    //             "placeholder": "Enter your aadhar no",
    //             "allowMultipleMasks": false,
    //             "inputMasks": [
    //                 {
    //                     "label": "",
    //                     "mask": ""
    //                 }
    //             ],
    //             "type": "textfield",
    //             "input": true,
    //             "key": "aadhar",
    //             "defaultValue": "",
    //             "validate": {
    //                 "required": true,
    //                 "minLength": null,
    //                 "maxLength": null,
    //                 "pattern": "^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$",
    //                 "unique": true,
    //                 "customMessage": "Aadhar number is not valid",
    //                 "json": ""
    //             }
    //         },
    //         {
    //             "label": "Date of Birth",
    //             "mask": false,
    //             "type": "day",
    //             "input": true,
    //             "key": "dob",
    //             "fields": {
    //                 "day": {
    //                     "type": "number"
    //                 },
    //                 "month": {
    //                     "type": "select"
    //                 },
    //                 "year": {
    //                     "type": "number"
    //                 }
    //             },
    //             "defaultValue": "Invalid date",
    //             "validate": {
    //                 "customMessage": "Please fill date of birth",
    //                 "unique": false,
    //                 "json": ""
    //             }
    //         },
    //         {
    //             "label": "Gender",
    //             "optionsLabelPosition": "right",
    //             "customClass": "",
    //             "inline": true,
    //             "tableView": false,
    //             "values": [
    //                 {
    //                     "label": "MALE",
    //                     "value": "male",
    //                     "shortcut": ""
    //                 },
    //                 {
    //                     "label": "FEMALE",
    //                     "value": "female",
    //                     "shortcut": ""
    //                 },
    //                 {
    //                     "label": "OTHER",
    //                     "value": "other",
    //                     "shortcut": ""
    //                 }
    //             ],
    //             "key": "gender",
    //             "type": "radio",
    //             "input": true
    //         },

    //         {
    //             "label": "Current Address",
    //             "mask": false,
    //             "type": "container",
    //             "input": true,
    //             "key": "currAddress",
    //             "components": [
    //                 {
    //                     "label": "Current Address",
    //                     "placeholder": "address 1",
    //                     "allowMultipleMasks": false,
    //                     "inputMasks": [
    //                         {
    //                             "label": "",
    //                             "mask": ""
    //                         }
    //                     ],
    //                     "type": "textfield",
    //                     "input": true,
    //                     "key": "currentAddress1"
    //                 },
    //                 {
    //                     "label": "",
    //                     "hideLabel": true,
    //                     "placeholder": "address 2",
    //                     "allowMultipleMasks": false,
    //                     "inputMasks": [
    //                         {
    //                             "label": "",
    //                             "mask": ""
    //                         }
    //                     ],
    //                     "type": "textfield",
    //                     "input": true,
    //                     "key": "currentAddress2"
    //                 },
    //                 {
    //                     "columns": [
    //                         {
    //                             "components": [
    //                                 {
    //                                     "label": "Country",
    //                                     "mask": false,
    //                                     "type": "select",
    //                                     "input": true,
    //                                     "key": "currCountry",
    //                                     "defaultValue": "",
    //                                     "validate": {
    //                                         "required": true,
    //                                         "select": false,
    //                                         "unique": false,
    //                                         "customMessage": "",
    //                                         "json": ""
    //                                     },
    //                                     "conditional": {
    //                                         "json": ""
    //                                     },
    //                                     "data": {
    //                                         "json": [
    //                                             {
    //                                                 "id": 101,
    //                                                 "name": "India",
    //                                                 "iso3": "IND",
    //                                                 "iso2": "IN",
    //                                                 "numeric_code": "356",
    //                                                 "phone_code": "91",
    //                                                 "capital": "New Delhi",
    //                                                 "currency": "INR",
    //                                                 "currency_name": "Indian rupee",
    //                                                 "currency_symbol": "₹",
    //                                                 "tld": ".in",
    //                                                 "native": "भारत",
    //                                                 "region": "Asia",
    //                                                 "subregion": "Southern Asia",
    //                                                 "timezones": [
    //                                                     {
    //                                                         "zoneName": "Asia/Kolkata",
    //                                                         "gmtOffset": 19800,
    //                                                         "gmtOffsetName": "UTC+05:30",
    //                                                         "abbreviation": "IST",
    //                                                         "tzName": "Indian Standard Time"
    //                                                     }
    //                                                 ],
    //                                                 "translations": {
    //                                                     "kr": "인도",
    //                                                     "pt-BR": "Índia",
    //                                                     "pt": "Índia",
    //                                                     "nl": "India",
    //                                                     "hr": "Indija",
    //                                                     "fa": "هند",
    //                                                     "de": "Indien",
    //                                                     "es": "India",
    //                                                     "fr": "Inde",
    //                                                     "ja": "インド",
    //                                                     "it": "India",
    //                                                     "cn": "印度",
    //                                                     "tr": "Hindistan"
    //                                                 },
    //                                                 "latitude": "20.00000000",
    //                                                 "longitude": "77.00000000",
    //                                                 "emoji": "🇮🇳",
    //                                                 "emojiU": "U+1F1EE U+1F1F3"
    //                                             },
    //                                             {
    //                                                 "id": 102,
    //                                                 "name": "Indonesia",
    //                                                 "iso3": "IDN",
    //                                                 "iso2": "ID",
    //                                                 "numeric_code": "360",
    //                                                 "phone_code": "62",
    //                                                 "capital": "Jakarta",
    //                                                 "currency": "IDR",
    //                                                 "currency_name": "Indonesian rupiah",
    //                                                 "currency_symbol": "Rp",
    //                                                 "tld": ".id",
    //                                                 "native": "Indonesia",
    //                                                 "region": "Asia",
    //                                                 "subregion": "South-Eastern Asia",
    //                                                 "timezones": [
    //                                                     {
    //                                                         "zoneName": "Asia/Jakarta",
    //                                                         "gmtOffset": 25200,
    //                                                         "gmtOffsetName": "UTC+07:00",
    //                                                         "abbreviation": "WIB",
    //                                                         "tzName": "Western Indonesian Time"
    //                                                     },
    //                                                     {
    //                                                         "zoneName": "Asia/Jayapura",
    //                                                         "gmtOffset": 32400,
    //                                                         "gmtOffsetName": "UTC+09:00",
    //                                                         "abbreviation": "WIT",
    //                                                         "tzName": "Eastern Indonesian Time"
    //                                                     },
    //                                                     {
    //                                                         "zoneName": "Asia/Makassar",
    //                                                         "gmtOffset": 28800,
    //                                                         "gmtOffsetName": "UTC+08:00",
    //                                                         "abbreviation": "WITA",
    //                                                         "tzName": "Central Indonesia Time"
    //                                                     },
    //                                                     {
    //                                                         "zoneName": "Asia/Pontianak",
    //                                                         "gmtOffset": 25200,
    //                                                         "gmtOffsetName": "UTC+07:00",
    //                                                         "abbreviation": "WIB",
    //                                                         "tzName": "Western Indonesian Time"
    //                                                     }
    //                                                 ],
    //                                                 "translations": {
    //                                                     "kr": "인도네시아",
    //                                                     "pt-BR": "Indonésia",
    //                                                     "pt": "Indonésia",
    //                                                     "nl": "Indonesië",
    //                                                     "hr": "Indonezija",
    //                                                     "fa": "اندونزی",
    //                                                     "de": "Indonesien",
    //                                                     "es": "Indonesia",
    //                                                     "fr": "Indonésie",
    //                                                     "ja": "インドネシア",
    //                                                     "it": "Indonesia",
    //                                                     "cn": "印度尼西亚",
    //                                                     "tr": "Endonezya"
    //                                                 },
    //                                                 "latitude": "-5.00000000",
    //                                                 "longitude": "120.00000000",
    //                                                 "emoji": "🇮🇩",
    //                                                 "emojiU": "U+1F1EE U+1F1E9"
    //                                             }
    //                                         ]
    //                                     },
    //                                     "properties": [
    //                                         {
    //                                             "key": "",
    //                                             "value": ""
    //                                         }
    //                                     ],
    //                                     "tags": [],
    //                                     "customConditional": "",
    //                                     "dataSrc": "json",
    //                                     "template": "<span>{{ item.name }}</span>",
    //                                     "limit": null,
    //                                     "url": "",
    //                                     "resource": null,
    //                                     "valueProperty": null,
    //                                     "selectValues": "",
    //                                     "disableLimit": false,
    //                                     "searchField": "",
    //                                     "refreshOn": null,
    //                                     "clearOnRefresh": false,
    //                                     "reference": false
    //                                 },
    //                                 {
    //                                     "label": "District",
    //                                     "placeholder": "Choose your district",
    //                                     "mask": false,
    //                                     "type": "select",
    //                                     "input": true,
    //                                     "key": "currDistrict",
    //                                     "valueProperty": "value"
    //                                 },
    //                                 {
    //                                     "label": "Pincode",
    //                                     "placeholder": "Enter your pincode",
    //                                     "allowMultipleMasks": false,
    //                                     "inputMasks": [
    //                                         {
    //                                             "label": "",
    //                                             "mask": ""
    //                                         }
    //                                     ],
    //                                     "type": "textfield",
    //                                     "input": true,
    //                                     "key": "pincode"
    //                                 }
    //                             ],
    //                             "width": 6,
    //                             "offset": 0,
    //                             "push": 0,
    //                             "pull": 0,
    //                             "type": "column",
    //                             "input": true,
    //                             "key": "",
    //                             "label": ""
    //                         },
    //                         {
    //                             "components": [
    //                                 {
    //                                     "label": "State",
    //                                     "mask": false,
    //                                     "type": "select",
    //                                     "input": true,
    //                                     "key": "state",
    //                                     "defaultValue": "",
    //                                     "data": {
    //                                         "json": indianState,
    //                                     },
    //                                     "dataSrc": "json",
    //                                     "template": "<span>{{ item.name }}</span>",
    //                                     "limit": null,
    //                                     "refreshOn": null,
    //                                     "url": "",
    //                                     "resource": null,
    //                                     "selectValues": "",
    //                                     "disableLimit": false,
    //                                     "searchField": "",
    //                                     "clearOnRefresh": false,
    //                                     "reference": false
    //                                 },
    //                                 {
    //                                     "label": "City",
    //                                     "placeholder": "Choose your city",
    //                                     "mask": false,
    //                                     "type": "select",
    //                                     "input": true,
    //                                     "key": "currCity",
    //                                     "valueProperty": "value"
    //                                 }
    //                             ],
    //                             "width": 6,
    //                             "offset": 0,
    //                             "push": 0,
    //                             "pull": 0,
    //                             "type": "column",
    //                             "input": true,
    //                             "key": "",
    //                             "label": ""
    //                         }
    //                     ],
    //                     "label": "Columns",
    //                     "mask": false,
    //                     "type": "columns",
    //                     "input": false,
    //                     "key": "columns"
    //                 }
    //             ]
    //         },
    //         {
    //             "label": "Same as Current Address",
    //             "mask": false,
    //             "type": "checkbox",
    //             "input": true,
    //             "key": "sameAsCurrentAddress"
    //         },
    //         {
    //             "label": "Permanent Address",
    //             "mask": false,
    //             "type": "container",
    //             "input": true,
    //             "key": "permaAddress",
    //             "components": [
    //                 {
    //                     "label": "Permanent Address",
    //                     "placeholder": "address 1",
    //                     "allowMultipleMasks": false,
    //                     "inputMasks": [
    //                         {
    //                             "label": "",
    //                             "mask": ""
    //                         }
    //                     ],
    //                     "type": "textfield",
    //                     "input": true,
    //                     "key": "permaAddress1"
    //                 },
    //                 {
    //                     "label": "",
    //                     "hideLabel": true,
    //                     "placeholder": "address 2",
    //                     "allowMultipleMasks": false,
    //                     "inputMasks": [
    //                         {
    //                             "label": "",
    //                             "mask": ""
    //                         }
    //                     ],
    //                     "type": "textfield",
    //                     "input": true,
    //                     "key": "permaAddress2"
    //                 },
    //                 {
    //                     "columns": [
    //                         {
    //                             "components": [
    //                                 {
    //                                     "label": "Country",
    //                                     "mask": false,
    //                                     "type": "select",
    //                                     "input": true,
    //                                     "key": "permaCountry",
    //                                     "defaultValue": "",
    //                                     "validate": {
    //                                         "required": true,
    //                                         "select": false,
    //                                         "unique": false,
    //                                         "customMessage": "",
    //                                         "json": ""
    //                                     },
    //                                     "conditional": {
    //                                         "json": ""
    //                                     },
    //                                     "data": {
    //                                         "json": [
    //                                             {
    //                                                 "id": 101,
    //                                                 "name": "India",
    //                                                 "iso3": "IND",
    //                                                 "iso2": "IN",
    //                                                 "numeric_code": "356",
    //                                                 "phone_code": "91",
    //                                                 "capital": "New Delhi",
    //                                                 "currency": "INR",
    //                                                 "currency_name": "Indian rupee",
    //                                                 "currency_symbol": "₹",
    //                                                 "tld": ".in",
    //                                                 "native": "भारत",
    //                                                 "region": "Asia",
    //                                                 "subregion": "Southern Asia",
    //                                                 "timezones": [
    //                                                     {
    //                                                         "zoneName": "Asia/Kolkata",
    //                                                         "gmtOffset": 19800,
    //                                                         "gmtOffsetName": "UTC+05:30",
    //                                                         "abbreviation": "IST",
    //                                                         "tzName": "Indian Standard Time"
    //                                                     }
    //                                                 ],
    //                                                 "translations": {
    //                                                     "kr": "인도",
    //                                                     "pt-BR": "Índia",
    //                                                     "pt": "Índia",
    //                                                     "nl": "India",
    //                                                     "hr": "Indija",
    //                                                     "fa": "هند",
    //                                                     "de": "Indien",
    //                                                     "es": "India",
    //                                                     "fr": "Inde",
    //                                                     "ja": "インド",
    //                                                     "it": "India",
    //                                                     "cn": "印度",
    //                                                     "tr": "Hindistan"
    //                                                 },
    //                                                 "latitude": "20.00000000",
    //                                                 "longitude": "77.00000000",
    //                                                 "emoji": "🇮🇳",
    //                                                 "emojiU": "U+1F1EE U+1F1F3"
    //                                             },
    //                                             {
    //                                                 "id": 102,
    //                                                 "name": "Indonesia",
    //                                                 "iso3": "IDN",
    //                                                 "iso2": "ID",
    //                                                 "numeric_code": "360",
    //                                                 "phone_code": "62",
    //                                                 "capital": "Jakarta",
    //                                                 "currency": "IDR",
    //                                                 "currency_name": "Indonesian rupiah",
    //                                                 "currency_symbol": "Rp",
    //                                                 "tld": ".id",
    //                                                 "native": "Indonesia",
    //                                                 "region": "Asia",
    //                                                 "subregion": "South-Eastern Asia",
    //                                                 "timezones": [
    //                                                     {
    //                                                         "zoneName": "Asia/Jakarta",
    //                                                         "gmtOffset": 25200,
    //                                                         "gmtOffsetName": "UTC+07:00",
    //                                                         "abbreviation": "WIB",
    //                                                         "tzName": "Western Indonesian Time"
    //                                                     },
    //                                                     {
    //                                                         "zoneName": "Asia/Jayapura",
    //                                                         "gmtOffset": 32400,
    //                                                         "gmtOffsetName": "UTC+09:00",
    //                                                         "abbreviation": "WIT",
    //                                                         "tzName": "Eastern Indonesian Time"
    //                                                     },
    //                                                     {
    //                                                         "zoneName": "Asia/Makassar",
    //                                                         "gmtOffset": 28800,
    //                                                         "gmtOffsetName": "UTC+08:00",
    //                                                         "abbreviation": "WITA",
    //                                                         "tzName": "Central Indonesia Time"
    //                                                     },
    //                                                     {
    //                                                         "zoneName": "Asia/Pontianak",
    //                                                         "gmtOffset": 25200,
    //                                                         "gmtOffsetName": "UTC+07:00",
    //                                                         "abbreviation": "WIB",
    //                                                         "tzName": "Western Indonesian Time"
    //                                                     }
    //                                                 ],
    //                                                 "translations": {
    //                                                     "kr": "인도네시아",
    //                                                     "pt-BR": "Indonésia",
    //                                                     "pt": "Indonésia",
    //                                                     "nl": "Indonesië",
    //                                                     "hr": "Indonezija",
    //                                                     "fa": "اندونزی",
    //                                                     "de": "Indonesien",
    //                                                     "es": "Indonesia",
    //                                                     "fr": "Indonésie",
    //                                                     "ja": "インドネシア",
    //                                                     "it": "Indonesia",
    //                                                     "cn": "印度尼西亚",
    //                                                     "tr": "Endonezya"
    //                                                 },
    //                                                 "latitude": "-5.00000000",
    //                                                 "longitude": "120.00000000",
    //                                                 "emoji": "🇮🇩",
    //                                                 "emojiU": "U+1F1EE U+1F1E9"
    //                                             }
    //                                         ]
    //                                     },
    //                                     "properties": [
    //                                         {
    //                                             "key": "",
    //                                             "value": ""
    //                                         }
    //                                     ],
    //                                     "tags": [],
    //                                     "customConditional": "",
    //                                     "dataSrc": "json",
    //                                     "template": "<span>{{ item.name }}</span>",
    //                                     "limit": null,
    //                                     "url": "",
    //                                     "resource": null,
    //                                     "valueProperty": null,
    //                                     "selectValues": "",
    //                                     "disableLimit": false,
    //                                     "searchField": "",
    //                                     "refreshOn": null,
    //                                     "clearOnRefresh": false,
    //                                     "reference": false
    //                                 },
    //                                 {
    //                                     "label": "District",
    //                                     "placeholder": "Choose your district",
    //                                     "mask": false,
    //                                     "type": "select",
    //                                     "input": true,
    //                                     "key": "permaDistrict",
    //                                     "valueProperty": "value"
    //                                 },
    //                                 {
    //                                     "label": "Pincode",
    //                                     "placeholder": "Enter your pincode",
    //                                     "allowMultipleMasks": false,
    //                                     "inputMasks": [
    //                                         {
    //                                             "label": "",
    //                                             "mask": ""
    //                                         }
    //                                     ],
    //                                     "type": "textfield",
    //                                     "input": true,
    //                                     "key": "permaPincode"
    //                                 }
    //                             ],
    //                             "width": 6,
    //                             "offset": 0,
    //                             "push": 0,
    //                             "pull": 0,
    //                             "type": "column",
    //                             "input": true,
    //                             "key": "",
    //                             "label": ""
    //                         },
    //                         {
    //                             "components": [
    //                                 {
    //                                     "label": "State",
    //                                     "mask": false,
    //                                     "type": "select",
    //                                     "input": true,
    //                                     "key": "state",
    //                                     "defaultValue": "",
    //                                     "data": {
    //                                         "json": indianState,
    //                                     },
    //                                     "dataSrc": "json",
    //                                     "template": "<span>{{ item.name }}</span>",
    //                                     "limit": null,
    //                                     "refreshOn": null,
    //                                     "url": "",
    //                                     "resource": null,
    //                                     "selectValues": "",
    //                                     "disableLimit": false,
    //                                     "searchField": "",
    //                                     "clearOnRefresh": false,
    //                                     "reference": false
    //                                 },
    //                                 {
    //                                     "label": "City",
    //                                     "placeholder": "Choose your city",
    //                                     "mask": false,
    //                                     "type": "select",
    //                                     "input": true,
    //                                     "key": "permaCity",
    //                                     "valueProperty": "value"
    //                                 }
    //                             ],
    //                             "width": 6,
    //                             "offset": 0,
    //                             "push": 0,
    //                             "pull": 0,
    //                             "type": "column",
    //                             "input": true,
    //                             "key": "",
    //                             "label": ""
    //                         }
    //                     ],
    //                     "label": "Columns",
    //                     "mask": false,
    //                     "type": "columns",
    //                     "input": false,
    //                     "key": "columns"
    //                 }
    //             ]
    //         },

    //         {
    //             "addAnotherPosition": "bottom",
    //             "label": "Qualification",
    //             "addAnother": "",
    //             "multiple": true,
    //             "mask": false,
    //             "type": "datagrid",
    //             "input": true,
    //             "key": "qualification",
    //             "components": [
    //                 {
    //                     "label": false,
    //                     "hideLabel": true,
    //                     "placeholder": "College/Institution",
    //                     "allowMultipleMasks": false,
    //                     "inputMasks": [
    //                         {
    //                             "label": "",
    //                             "mask": ""
    //                         }
    //                     ],
    //                     "customClass": "Width auto",
    //                     "tableView": false,
    //                     "type": "textfield",
    //                     "input": true,
    //                     "key": "textField2",
    //                     "row": "0-0"
    //                 },
    //                 {
    //                     "label": false,
    //                     "hideLabel": true,
    //                     "placeholder": "degree",
    //                     "allowMultipleMasks": false,
    //                     "inputMasks": [
    //                         {
    //                             "label": "",
    //                             "mask": ""
    //                         }
    //                     ],
    //                     "customClass": "Width auto",
    //                     "tableView": false,
    //                     "type": "textfield",
    //                     "input": true,
    //                     "key": "textField3",
    //                     "row": "0-1"
    //                 },
    //                 {
    //                     "label": false,
    //                     "hideLabel": true,
    //                     "placeholder": "year of passing",
    //                     "customClass": "Width auto",
    //                     "mask": false,
    //                     "tableView": false,
    //                     "type": "number",
    //                     "input": true,
    //                     "key": "marks",
    //                     "row": "0-2"
    //                 },
    //                 {
    //                     "label": false,
    //                     "hideLabel": true,
    //                     "placeholder": "marks type",
    //                     "customClass": "Width auto",
    //                     "mask": false,
    //                     "tableView": false,
    //                     "type": "select",
    //                     "input": true,
    //                     "key": "select",
    //                     "row": "0-3",
    //                     "defaultValue": "",
    //                     "validate": {
    //                         "select": false,
    //                         "unique": false,
    //                         "customMessage": "",
    //                         "json": ""
    //                     },
    //                     "data": {
    //                         "values": {
    //                             "0": {
    //                                 "label": "percent",
    //                                 "value": "percent"
    //                             },
    //                             "1": {
    //                                 "label": "CGPA",
    //                                 "value": "cgpa"
    //                             },
    //                             "2": {
    //                                 "label": "others",
    //                                 "value": "others"
    //                             }
    //                         }
    //                     },
    //                     "url": "",
    //                     "resource": null,
    //                     "valueProperty": "value",
    //                     "selectValues": "",
    //                     "disableLimit": false,
    //                     "searchField": "",
    //                     "limit": null,
    //                     "refreshOn": null,
    //                     "clearOnRefresh": false,
    //                     "reference": false
    //                 },
    //                 {
    //                     "label": false,
    //                     "hideLabel": true,
    //                     "placeholder": "marks",
    //                     "customClass": "Width auto",
    //                     "mask": false,
    //                     "tableView": false,
    //                     "type": "number",
    //                     "input": true,
    //                     "key": "marks2",
    //                     "row": "0-4"
    //                 }
    //             ]
    //         },


    //         {
    //             "addAnotherPosition": "bottom",
    //             "label": "Experience",
    //             "addAnother": "",
    //             "multiple": true,
    //             "mask": false,
    //             "type": "datagrid",
    //             "input": true,
    //             "key": "experience",
    //             "components": [
    //                 {
    //                     "label": false,
    //                     "hideLabel": true,
    //                     "placeholder": "Company",
    //                     "allowMultipleMasks": false,
    //                     "inputMasks": [
    //                         {
    //                             "label": "",
    //                             "mask": ""
    //                         }
    //                     ],
    //                     "type": "textfield",
    //                     "input": true,
    //                     "key": "company",
    //                     "row": "0-0"
    //                 },
    //                 {
    //                     "label": false,
    //                     "hideLabel": true,
    //                     "placeholder": "Designation",
    //                     "allowMultipleMasks": false,
    //                     "inputMasks": [
    //                         {
    //                             "label": "",
    //                             "mask": ""
    //                         }
    //                     ],
    //                     "type": "textfield",
    //                     "input": true,
    //                     "key": "designation",
    //                     "row": "0-1"
    //                 },
    //                 {
    //                     "label": "",
    //                     "hideLabel": true,
    //                     "placeholder": " Duration(in years)",
    //                     "mask": false,
    //                     "type": "number",
    //                     "input": true,
    //                     "key": "durationInYears"
    //                 }
    //             ]
    //         },


    //         {
    //             "label": "Profile Photo",
    //             "placeholder": "Choose a profile photo",
    //             "mask": false,
    //             "tableView": false,
    //             "type": "file",
    //             "input": true,
    //             "key": "profilePhoto",
    //             "validate": {
    //                 "required": true,
    //                 "unique": false,
    //                 "customMessage": "Please select a photo",
    //                 "json": ""
    //             },
    //             "storage": "base64",
    //             "dir": "",
    //             "url": "",
    //             "imageSize": ""
    //         },




    //         {
    //             "type": "button",
    //             "label": "Submit",
    //             "key": "submit",
    //             "disableOnInvalid": true,
    //             "theme": "primary",
    //             "input": true
    //         }
    //     ],
    //     "display": "form"
    // }


    const formData = {
        "components": [
          {
            "label": "Name",
            // "placeholder": "Enter your name",
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
            // "placeholder": "Enter your email",
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
            // "placeholder": "Enter your pan card no",
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
            // "placeholder": "Enter your aadhar no",
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
                            // {
                            //   "id": 102,
                            //   "name": "Indonesia",
                            //   "iso3": "IDN",
                            //   "iso2": "ID",
                            //   "numeric_code": "360",
                            //   "phone_code": "62",
                            //   "capital": "Jakarta",
                            //   "currency": "IDR",
                            //   "currency_name": "Indonesian rupiah",
                            //   "currency_symbol": "Rp",
                            //   "tld": ".id",
                            //   "native": "Indonesia",
                            //   "region": "Asia",
                            //   "subregion": "South-Eastern Asia",
                            //   "timezones": [
                            //     {
                            //       "zoneName": "Asia/Jakarta",
                            //       "gmtOffset": 25200,
                            //       "gmtOffsetName": "UTC+07:00",
                            //       "abbreviation": "WIB",
                            //       "tzName": "Western Indonesian Time"
                            //     },
                            //     {
                            //       "zoneName": "Asia/Jayapura",
                            //       "gmtOffset": 32400,
                            //       "gmtOffsetName": "UTC+09:00",
                            //       "abbreviation": "WIT",
                            //       "tzName": "Eastern Indonesian Time"
                            //     },
                            //     {
                            //       "zoneName": "Asia/Makassar",
                            //       "gmtOffset": 28800,
                            //       "gmtOffsetName": "UTC+08:00",
                            //       "abbreviation": "WITA",
                            //       "tzName": "Central Indonesia Time"
                            //     },
                            //     {
                            //       "zoneName": "Asia/Pontianak",
                            //       "gmtOffset": 25200,
                            //       "gmtOffsetName": "UTC+07:00",
                            //       "abbreviation": "WIB",
                            //       "tzName": "Western Indonesian Time"
                            //     }
                            //   ],
                            //   "translations": {
                            //     "kr": "인도네시아",
                            //     "pt-BR": "Indonésia",
                            //     "pt": "Indonésia",
                            //     "nl": "Indonesië",
                            //     "hr": "Indonezija",
                            //     "fa": "اندونزی",
                            //     "de": "Indonesien",
                            //     "es": "Indonesia",
                            //     "fr": "Indonésie",
                            //     "ja": "インドネシア",
                            //     "it": "Indonesia",
                            //     "cn": "印度尼西亚",
                            //     "tr": "Endonezya"
                            //   },
                            //   "latitude": "-5.00000000",
                            //   "longitude": "120.00000000",
                            //   "emoji": "🇮🇩",
                            //   "emojiU": "U+1F1EE U+1F1E9"
                            // }
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
                        "label": "Pincode",
                        // "placeholder": "Enter your pincode",
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
                        "allowMultipleMasks": false,
                        "inputMasks": [
                            {
                                "label": "",
                                "mask": ""
                            }
                        ],
                        "type": "textfield",
                        "input": true,
                        "key": "currCity"
                    },
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
                        "label": "Pincode",
                        // "placeholder": "Enter your pincode",
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
                        "allowMultipleMasks": false,
                        "inputMasks": [
                            {
                                "label": "",
                                "mask": ""
                            }
                        ],
                        "type": "textfield",
                        "input": true,
                        "key": "permaCity"
                    },
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
    const FormData = {
        "name": "Rajeev",
        "email": "rk@gmail.com",
        "select": {
            "name": "India",
            "dial_code": "+91",
            "code": "IN"
        },
        "pan": "FONJK1234J",
        "aadhar": "432847389432",
        "dob": "03/24/1998",
        "gender": "male",
        "currAddress": {
            "currentAddress": "fghd45",
            "address2": "4546dgf",
            "currCountry": {
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
            "currDistrict": "",
            "pincode": "801509",
            "state": {
                "id": 4007,
                "name": "Haryana",
                "country_id": 101,
                "country_code": "IN",
                "country_name": "India",
                "state_code": "HR",
                "type": "state",
                "latitude": "29.05877570",
                "longitude": "76.08560100"
            },
            "currCity": "",
            "permaCountry": {
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
            "permaDistrict": "",
            "permaCity": ""
        },
        "sameAsCurrentAddress": false,
        "qualification": [
            {
                "textField2": "LNM",
                "textField3": "MCA",
                "select": "percent",
                "marks": 2023,
                "marks2": 487
            },
            {
                "textField2": "An",
                "textField3": "BCA",
                "select": "others",
                "marks": 2021,
                "marks2": 567
            }
        ],
        "experience": [
            {
                "company": "CB",
                "designation": "SDE-I",
                "durationInYears": 2
            },
            {
                "company": "GIVNI",
                "designation": "SDE-II",
                "durationInYears": 1
            }
        ],
        "profilePhoto": [],
        "submit": true,
        "number": 9526456544
    }

    const newFormData = {
        "name": "rajeev",
        "email": "rajevrk9901@gmail.com",
        "select": {
          "name": "India",
          "dial_code": "+91",
          "code": "IN"
        },
        "pan": "FORPS1937M",
        "aadhar": "984654645646",
        "dob": "02/24/1999",
        "gender": "male",
        "currAddress": {
          "currentAddress1": "cadd1",
          "currentAddress2": "cadd2",
          "currCountry": {
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
          "pincode": "801501",
          "state": {
            "id": 4037,
            "name": "Bihar",
            "country_id": 101,
            "country_code": "IN",
            "country_name": "India",
            "state_code": "BR",
            "type": "state",
            "latitude": "25.09607420",
            "longitude": "85.31311940"
          },
          "currCity": "Patna"
        },
        "sameAsCurrentAddress": false,
        "permaAddress": {
          "permaAddress1": "padd1",
          "permaAddress2": "pad2",
          "permaCountry": {
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
          "permaPincode": "801501",
          "state": {
            "id": 4037,
            "name": "Bihar",
            "country_id": 101,
            "country_code": "IN",
            "country_name": "India",
            "state_code": "BR",
            "type": "state",
            "latitude": "25.09607420",
            "longitude": "85.31311940"
          },
          "permaCity": "Patna"
        },
        "qualification": [
          {
            "textField2": "LNMI",
            "textField3": "MCA",
            "select": "others",
            "marks": 2023,
            "marks2": 654
          },
          {
            "textField2": "AN",
            "textField3": "BCA",
            "select": "percent",
            "marks": 2021,
            "marks2": 68
          }
        ],
        "experience": [
          {
            "company": "VB",
            "designation": "SDE-I",
            "durationInYears": 2
          },
          {
            "company": "CB",
            "designation": "SDE-I",
            "durationInYears": 1
          }
        ],
        "profilePhoto": [
          {
            "storage": "base64",
            "name": "133-0d2ddd1a-523e-45d5-b8d4-007e61d9ac3f.png",
            "url": "data:image/png;base64,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",
            "size": 7601,
            "type": "image/png",
            "originalName": "133.png",
            "hash": "2635d9b9f95c3b538b14db651add640c"
          }
        ],
        "submit": true,
        "number": 9154464564
      }

    const [submission, setSubmission] = useState(newFormData)



    // const onSubmit = (submission) => {
    //     console.log('Form data:', submission.data);
    // };

    return (
        <div className='w-full max-w-lg mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>BasicForm</h1>
            <Form src={formData} submission={{ data: submission }} />
        </div>
    )
}

export default PreFill;