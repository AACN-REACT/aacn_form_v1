import React, { useReducer, useEffect, useRef, useContext, Suspense, lazy, Component } from "react";
import FormElements from "../atoms/form-elements/FormElements.jsx";
import countries from "../data/Lookup/countryData.js";
import states from "../data/Lookup/stateData.js";
import newConfig from "../data/newconfig.js";
import promisePollyfill from "../utils/promisePollyfill";
import guidGenerator from "../utils/guid_generator.js";
import {StateContext, DispatchContext} from '../contexts/contexts.js';
// import countryData from '../data/Lookup/countryData';
// import stateData from '../data/Lookup/stateData';

// ------------------------------FUNCTIONS USED --------------------------------------------------//
//-----------------------------------------------------------------------------------------------//

// filterList - utility for filtering a list of objects based on the FK/PK match with a Parent object
// the function takes four parameters, ParentObject(object),ParentPrimaryKey(string), ListToBeFiltered(array of objects), ForeignKey()

function filterList(parent, pk, list, fk) {
  return list.filter(item => item[fk] === parent[pk]);
}


const countryData = [
  { code: "USA", display: "United States", key: "1111", selected: true },
  { code: "CAN", display: "Canada", key: "2222" },
  { code: "UK", display: "United Kingdom", key: "3333" },
  { code: "RUS", display: "Russia", key: "4444" }
];

const stateData = [
  { code: "MIL", display: "Milwaukae", pk: "1111" },
  { code: "TEX", display: "Texas", pk: "1111", selected: true },
  { code: "BERK", display: "berkshire", pk: "3333" },
  { code: "PET", display: "st petersburg", pk: "4444" },
  { code: "ONT", display: "ontario", pk: "2222" },
  { code: "LON", display: "london", pk: "3333" },
  { code: "ATL", display: "atlanta", pk: "1111" },
  { code: "MOS", display: "moscow", pk: "4444" },
  { code: "MON", display: "montreal", pk: "2222" },
  { code: "NFL", display: "NewfoundLand", pk: "2222" },
  { code: "LVP", display: "Liverpool", pk: "3333" },
  { code: "SBR", display: "Siberia", pk: "4444" },
  { code: "CA", display: "California", pk: "1111" }
];


promisePollyfill();


function extract(config){
  const myfields = config.fields;
let formInitialState = {};
for(let i=0;i<myfields.length;i++){


}


}


//define the function used to extract State from the config

function extractStatefromConfig(config) {
  let formInitialState = {};
  config.fields.forEach((fel,i)=>{
    console.log("looping over..", fel)
    formInitialState[fel.field]=fel.options? 
    fel.parent?fel.options.filter((item,i)=>Object.keys(item).indexOf('selected')>=0).length>0 ? // so we check if there is a selected option
    fel.options.filter(item=>item.Parentkey===formInitialState[fel.parent].key).filter((item,i)=>Object.keys(item).indexOf('selected')>=0)[0]:
    fel.options.filter(item=>item.Parentkey===formInitialState[fel.parent].key)[0]:      
    fel.options.filter((item,i)=>Object.keys(item).indexOf('selected')>=0).length>0?
    fel.options.filter((item,i)=>Object.keys(item).indexOf('selected')>=0)[0]:fel.options
        
        :fel.value})
  console.log("Looping state after loop..",formInitialState)    
  return formInitialState
  
}


// generate fields from config object //
function FormMaker({fields}){

  console.log(fields)

  function GenerateFields(myfields){
         console.log(FormElements)
         return myfields.map((field,id)=>FormElements[field.type](field))

  }


return (

<div>
  
{GenerateFields(fields)}
</div>)
}

// reducer used to change state in response to dispatch 

function formreducer(state, action) {
  return {...state,...action.payload}
}


// actioncreator function used by dispatcher
function actionChangeState(value, stateField, state){
  
  return {...state, [stateField]:value}
}

// use this actioncreator if other won't generate correct keyname
function actionChangeState2(value, field, state){
  
  return {...state, [Object.keys(state).filter(el=>el===field)[0]]:value}
}

//_____________________________________________________________________________________________________//

//______________________________NEW FORM WITH REDUCERS_________________________________________________//
//_____________________________________________________________________________________________________//

export default function AACNform({config}){
  
  //_________________________CREATE STATE FROM CONFIG_______________________________//
  // Use useReducer hook to set up state, formreducer is defined in another file.
  const [state, dispatch] = useReducer(formreducer, extractStatefromConfig(config));
  
 
  //extract endpoints and form title from config
  const {endpoints,title,classes} =config


//_________________________GENERATE MARKUP FROM CONFIG______________________________//


return    (

  <StateContext.Provider value={state}> 
    <DispatchContext.Provider value={dispatch}>
  <form action={endpoints.post} method="post" className={classes || "form-control-lg"}  >
  <div>{title.text}</div>
   <FormMaker fields={config.fields} dispatch={dispatch} state={state} />
   <pre>{JSON.stringify(state,0,2)}</pre>
  
  </form>

    </DispatchContext.Provider>
  </StateContext.Provider>
)

}