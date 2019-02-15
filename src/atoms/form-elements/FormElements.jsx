import React,{useContext} from 'react';
import { StateContext, DispatchContext} from '../../contexts/contexts';

const genericStyles= {height:"20px",width:"100px",margin:"10px",fontFamily:"arial",color:"slate",border:"1px solid blue"};
const genericButton = {borderRadius:"5px",height:"30px",width:"50px",margin:"10px",fontFamily:"arial",color:"slate",border:"1px solid blue"};


// function generateSelect(parent) {

//    let filteredoptions =   options.filter(item=>item.Parentkey===state[parent].key).filter((item,i)=>Object.keys(item).indexOf('selected')>=0)[0]:
//    fel.options.filter(item=>item.Parentkey===state[fel.parent].key)[0]:      
//    fel.options.filter((item,i)=>Object.keys(item).indexOf('selected')>=0).length>0?
//    fel.options.filter((item,i)=>Object.keys(item).indexOf('selected')>=0)
//   }





const FormElements = {

//input class is  a string, styles is an object, validation is an object,value is a string, handleChange is a function
"text": ({label,name,classes,length,required=true},id)=><label key={id}>{label?label:"no label"}<input  maxlength={length} name={name} 
class={classes} required={required}/></label>,
"password":({label,name,length,classes,required=true},id)=><label key={id}>{label?label:"no label"}<input maxlength={length} type="password" name={name} class={classes} required={required}/></label>,


"button":({label,name,classes,length,required=true},id)=> <button key={id} className="">{label}</button>
,

"select": function ({field,label,options},id) { const state = useContext(StateContext), dispatch = useContext(DispatchContext); 
    return (   
    <label><select onChnage={(ev)=>dispatch({payload:{"state":ev.target.value}})} value={state[field].name}>{options.map(item=><option>{item.name}</option>)}</select></label>  )
}
}

export default FormElements