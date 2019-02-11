import React, { useState, useReducer, useEffect, Suspense, lazy, Component } from "react";
import FormElements from "../atoms/form-elements/FormElements.jsx";
import { countryData , stateData} from "../data/freshdata.js";
import promisePollyfill from "../utils/promisePollyfill";
import guidGenerator from "../utils/guid_generator.js";




  export default function FormMaker({fields}){


    console.log(fields)
 
    function GenerateFields(myfields){
           
           return myfields.map((field,id)=> FormElements[field.type](field))

    }



return (

<div>
{GenerateFields(fields)}
</div>)
  }