import React, { useState, useReducer, useEffect, Suspense, lazy, Component } from "react";
import FormElements from "../atoms/form-elements/FormElements.jsx";
import { countryData , stateData} from "../data/freshdata.js";
import promisePollyfill from "../utils/promisePollyfill";
import guidGenerator from "../utils/guid_generator.js";


function GenerateFields(fields){
  
  return fields.map((field,id)=> FormElements[field.type](field,id,fields)) }

  export default function FormMaker(fields){


    console.log("thessseees",fields)



return (

<div>
   {JSON.stringify(fields,0,2)} {/*} {GenerateFields(fields)}  */}
</div>)
  }