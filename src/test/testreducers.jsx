import React,{useReducer, useContext, useState, createContext} from 'react';
import ReactDOM from 'react-dom';

const myaction = function(text) {
    return {payload: {name:text}}
}
const mystate={name:"empty",
               address: "empty",
                age: 0}
const myreducer = function(state,action){
    return action.payload
}
const Mycontext = createContext()

function LowestLevel() {
const dispatch = useContext(Mycontext)
    return (
        <input type="text" onChange={(ev)=>dispatch(myaction(ev.target.value))} />
     
    )
}

function InnerLevel(){
    return (
        <div> Mid-Level 
            <LowestLevel />
        </div>
    )
}

function TopLevel() {
    
    const [state,dispatch] =useReducer(myreducer,mystate)

    return (
    <Mycontext.Provider value={state} >
    <Mycontext.Provider value={dispatch} >
        <div><h1>{state.name}</h1>
            <InnerLevel />
        </div>
    </Mycontext.Provider  >
    </Mycontext.Provider  >
    )
}





export default TopLevel