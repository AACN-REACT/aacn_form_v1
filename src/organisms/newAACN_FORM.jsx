import React,{useReducer, useContext, useRef, Suspense, lazy, Component} from 'react';
import ReactDOM from 'react-dom';
import newConfig from "../data/newconfig.js";
import promisePollyfill from "../utils/promisePollyfill";
import guidGenerator from "../utils/guid_generator.js";
import {StateContext, DispatchContext} from '../contexts/contexts.js';


const payload = [
    { thisfield: "name", type:"select",
     children:["city"], 
     options:[{name:"one",value:1, selected:true,key:"001"},
              {name:"two",value:2, key:"002",},
              {name:"two",value:2, key:"003",}]
    },
    { thisfield: "city", type:"select",
    parent:"name",
    options:[{name:"manchester",value:"man", selected:true, parentkey:"001"},
             {name:"liverpool",value:"lvp", parentkey:"002"},
             {name:"birmingham",value:"bgm", selected:true,parentkey:"002"},
             {name:"london",value:"lon",selected:true, parentkey:"003"},
             {name:"luton",value:"lut", parentkey:"003"},
             {name:"leeds",value:"lds", parentkey:"001"},
            ]
   },
]

//util functions 


//rename an object to a selected field


function createIntialState({fields}){

 let initalstate = {};
   fields.forEach(item=>item.type===("select" || "radio" || "dependent")? //  1. check if the field is a type with options
                                                        item.parent?   //2. Check if the field has a parent
                                                        fields[item.parent].
)
   return newstate

}

export default function(config){

    //extract state from config via the reducer hook, the state is generated from a function 'extractState'








}
