import React from 'react';

const genericStyles= {height:"20px",width:"100px",margin:"10px",fontFamily:"arial",color:"slate",border:"1px solid blue"};
const genericButton = {borderRadius:"5px",height:"30px",width:"50px",margin:"10px",fontFamily:"arial",color:"slate",border:"1px solid blue"};

const FormElements = {

//input class is  a string, styles is an object, validation is an object,value is a string, handleChange is a function
"input": ({label})=><label >{label?label:"no label"}<input type="text" /></label>,
"password":()=><input type="password"/>,


"button":()=> <button className="">A button</button>
,

"select":()=>  <select><option></option></select>
}

export default FormElements