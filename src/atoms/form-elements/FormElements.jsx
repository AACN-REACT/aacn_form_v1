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

//field = individual field, id = id of field, fields = whole fields
function extractValues(obj,key){
    return obj[key]
}

function changeChild(fields, field, state, ev) {
    let myval = field.options.filter(item => item.name === ev.target.value)[0].key;
    if (field.children) {
        field.children.forEach(
            function (item, idx) {
                if (item === undefined) { return null }
                state[item] = (fields.filter(item => item.thisfield === field.children[idx])[0]).options.
                    filter(item => item.Parentkey === myval)[0];
            })
    }

    else {
        return null
    }
}

const FormElements = {


//input class is  a string, styles is an object, validation is an object,value is a string, handleChange is a function
"text": function (field, id) {
    
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    return (<label style={field.styling}  className={field.classes} key={id}>{field.label?field.label:"My label"}<input placeholder={field.thisfield.placeholder}  name={field.name} value={state[this.name]} onChange={ev=>dispatch({payload:{[field.thisfield]:ev.target.value}})}/></label>) 

},



"password":function (field, id) { 
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    return(
        <label style={field.styling} className={field.classes} key={id}>{field.label?field.label:"My label"}<input placeholder={field.thisfield.placeholder} name={field.thisfield} onChange={ev=>dispatch({payload:{[field.thisfield]:ev.target.value}})} type="password" /></label>
    )

},

"button":function (field,id,fields) { 
console.log("BUTTON HAS STYLING:", field.classes)
const state = useContext(StateContext)
const dispatch = useContext(DispatchContext)
    switch(field.thisfield){

        case "submit":
    
    return <input onClick={(ev)=>{ev.preventDefault(); fetch(fields.endpoints.post, {method:"post", body:state}) } }style={field.styling} value={field.label} className={field.classes.length>0?field.classes:"btn"} type="submit" />

        case "reset":

 
       return  <button  style={field.styling} className={field.classes.length>0?field.classes:"btn"} >Reset</button>;

    case "generic":

    return <button style={field.styling}  className={field.classes.length>0?field.classes:"btn"} >{field.label}</button>;

    default :

    return <input style={field.styling} className={field.classes} type="submit" />

}
}
,

"select": function (field,id,fields) { 
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    let con = "country"
    console.log("STATE>FIELD>FIELD", fields)
    let fieldToChange = extractValues(field,"thisfield")
    console.log("FIELD TO CHANGE:",fieldToChange)
    return(
        <label  className={field.classes} style={field.styling}   key={id}>{field.label?field.label:"My label"} 
        <select value={state[field.thisfield]?state[field.thisfield].name:null} onChange={ev=>{
                                                        console.log("from inside chnageHandler", ev.target.selectedIndex)
                                                        dispatch({payload:{[fieldToChange]:field.options.filter(item=>item.name===ev.target.value)[0]}}); 
                                                        changeChild(fields, field,state,ev);
        }
            }  >
        {field.options.filter(item=>item.Parentkey?item.Parentkey===state[field.parent].key:item).map(fitem=><option >{fitem.name}</option>)}
        </select>
        </label>
    )
},

"radio": function (field,id,fields) { 
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    let fieldToChange = extractValues(field,"thisfield")
    console.log("FIELD TO CHANGE:",fieldToChange)
    return(
        <label  className={field.classes} style={field.styling}   key={id}>{field.label?field.label:"My label"} <div>
            {field.options.filter(item=>item.Parentkey?item.Parentkey===state[field.parent].key:item===item).map(fitem=><><input type="radio" /><span>{fitem.name}</span><br/></>)}
       </div>
        </label>
    )
}
}
export default FormElements