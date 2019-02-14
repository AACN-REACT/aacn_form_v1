import React from 'react';

const genericStyles= {height:"20px",width:"100px",margin:"10px",fontFamily:"arial",color:"slate",border:"1px solid blue"};
const genericButton = {borderRadius:"5px",height:"30px",width:"50px",margin:"10px",fontFamily:"arial",color:"slate",border:"1px solid blue"};

const FormElements = {

//input class is  a string, styles is an object, validation is an object,value is a string, handleChange is a function
"text": ({label,name,classes,length,required=true,dispatch})=><label >{label?label:"no label"}<input  maxlength={length} name={name} 
class={classes} required={required}/></label>,
"password":({label,name,length,classes,required=true})=><label >{label?label:"no label"}<input maxlength={length} type="password" name={name} class={classes} required={required}/></label>,


"button":({label,name,classes,length,required=true})=> <button className="">{label}</button>
,

"select":()=>  <select><option></option></select>
}

export default FormElements