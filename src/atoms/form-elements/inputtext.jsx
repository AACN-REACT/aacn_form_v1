import React,{useState, useReducer, useContext } from 'react';




export default function ({label, placeholder, type, classes, filter, length, value}){


    return <input {label, placeholder, type, classes, filter, length, value} /> 
}