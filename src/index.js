import React, { useState, useReducer, useEffect, Suspense, lazy, Component } from "react";
import ReactDOM from 'react-dom';
//import QuickFields from './molecules/quick_fields.js';
//import AACNform from './organisms/AACN_FORM.jsx';
//import MakeSelect  from './molecules/makeselect';
import FormMaker  from './organisms/formmaker.jsx';
import FormElements from './atoms/form-elements/FormElements.jsx';
import './index.css';
import {countryData,stateData} from "./data/freshdata.js";

//import myFormConfig from './data/Standard/MailingAddress.js';
import promisePollyfill from './utils/promisePollyfill';
const fields= [
    { name: "name", type: "input", value: "",  label:"Name"},
    { name: "name", type: "input", value: "" },
    { name: "name", type: "select", value: "" },
  ]

promisePollyfill();
const root =  document.getElementById('root');




//ReactDOM.render(<QuickFields config={myFormConfig}/>,root);
ReactDOM.render(<FormMaker fields={fields} />,root);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
/// Learn more about service workers: http://bit.ly/CRA-PWA

