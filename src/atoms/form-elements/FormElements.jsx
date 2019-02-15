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
"text": function (field, id) {
    
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    return (<label style={field.styling}  className={field.classes} key={id}>{field.label?field.label:"My label"}<input name={field.name} value={state[this.name]} onChange={ev=>dispatch({payload:{[field.field]:ev.target.value}})}/></label>) 

},



"password":function (field, id) { 
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    return(
        <label style={field.styling} className={field.classes} key={id}>{field.label?field.label:"My label"}><input name={field.field} onChange={ev=>dispatch({payload:{[field.field]:ev.target.value}})} type="password" /></label>
    )

},

"button":function (field,id) { 
    return field.field==="submit"?<input style={field.styling} className={field.classes} type="submit" />:field.field==="reset"?<button style={field.styling} className={field.classes} >Reset</button>:<button style={field.styling} className={field.classes} >{field.label}</button>
}
,

"select": function (field,id) { 
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    let con = "country"
    console.log("STATE>FIELD>FIELD", field)

    
    return(
        <label  className={field.classes} style={field.styling}   key={id}>{field.label?field.label:"My label"} 
        <select name={field.field} onChange={ev=>dispatch({payload:{[state[field.field]]:{...state[field.field].filter(item=>item.value===ev.target.value)[0] }}} )} value={state[this.name]}>
        {field.options.filter(item=>item.Parentkey?item.Parentkey===state[field.parent].key:item).map(fitem=><option>{fitem.name}</option>)}
        </select>
        </label>
    )
}
}
export default FormElements