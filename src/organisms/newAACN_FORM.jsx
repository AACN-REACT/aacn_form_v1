import React,{useReducer, useContext, useRef, Suspense, lazy, Component} from 'react';
import ReactDOM from 'react-dom';
import newConfig from "../data/newconfig.js";
import promisePollyfill from "../utils/promisePollyfill";
import guidGenerator from "../utils/guid_generator.js";
import {StateContext, DispatchContext} from '../contexts/contexts.js';




//util functions 


//rename an object to a selected field


function extractState({fields}){

 let newstate = {};
   fields.forEach(item=>)
   return newstate

}

export default function(config){

    //extract state from config via the reducer hook, the state is generated from a function 'extractState'








}
