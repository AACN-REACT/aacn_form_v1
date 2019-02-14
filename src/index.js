import React, { useState, useReducer, useEffect, Suspense, lazy, Component } from "react";
import ReactDOM from 'react-dom';
//import QuickFields from './molecules/quick_fields.js';
import AACNform from './organisms/AACN_FORM.jsx';
import MakeSelect  from './molecules/makeselect';
import FormMaker  from './organisms/formmaker.jsx';
import FormElements from './atoms/form-elements/FormElements.jsx';
import './index.css';
import newConfig from "./data/newconfig.js";
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

const options1 = [{display:"USA", key:"111"},
               {display:"UK", key:"222",selected:true},
               {display:"CAN", key:"333"}]
const options2 =[{display:"TEX",pk:"111"},
              {display:"BERK",pk:"222"},
              {display:"ONT",pk:"333"},
              {display:"CA",pk:"111"},
              {display:"LON",pk:"222"},
              {display:"MON",pk:"333"},]

const select1 = {type:"select", name:"Country", options:options1,  classes:"myselect"}
const select2 = {type:"select",name:"State", options:options2,  classes:"myselect", parent:"Country"}
  
//function MakeSelect({fields,selectClass, data1, data2})

//ReactDOM.render(<QuickFields config={myFormConfig}/>,root);
ReactDOM.render(<AACNform config={newConfig} />,root);

//let myrequest = new Client("http://nfdev:9023/index.html");
//myrequest.then(res=>console.log(res))
// function NewApp(){
//     return (
//         <div>   

//         <MakeSelect selectElement={select1}/>
//         <MakeSelect selectElement={select2}/>
//         </div>
//     )
// }
//ReactDOM.render(<NewApp />,root);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
/// Learn more about service workers: http://bit.ly/CRA-PWA

