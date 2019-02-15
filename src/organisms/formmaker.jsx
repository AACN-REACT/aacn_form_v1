import React, { useState, useReducer, useEffect, Suspense, lazy, Component } from "react";
import FormElements from "../atoms/form-elements/FormElements.jsx";
import { countryData , stateData} from "../data/freshdata.js";
import promisePollyfill from "../utils/promisePollyfill";
import guidGenerator from "../utils/guid_generator.js";




  export default function FormMaker({fields,dispatch}){


    console.log(fields)
 
    function GenerateFields(myfields,dispatch){
           
<<<<<<< HEAD
           return myfields.map((field,id)=> FormElements[field.type]({...field,dispatch:dispatch}))
=======
           return myfields.map((field,id)=> field.type!="select"||"radio"||"dependent"?FormElements[field.type](field,id):FormElements[field.type](field,id))
>>>>>>> b817b4b83456e03818fe48c54e61f21479e68156

    }



return (

<div>
{GenerateFields(fields)}
</div>)
  }