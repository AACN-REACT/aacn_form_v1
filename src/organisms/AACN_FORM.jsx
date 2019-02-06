import React, { Suspense, lazy, Component } from 'react';
import FormElements from '../atoms/form-elements/FormElements.jsx'
import countries from '../data/Lookup/countryData.js'
import states from '../data/Lookup/stateData.js'
import promisePollyfill from '../utils/promisePollyfill'
import  guidGenerator from '../utils/guid_generator.js'
import countryData from '../data/Lookup/countryData';
import stateData from '../data/Lookup/stateData';
let test = [  
    {name:"name" , type:"password", value:"", sometext:"jdfsljfd"},
    {name:"country", type:"select", options:countryData,  sometext:"jdfsljfd"},
    {name:"state", type:"select", options : stateData, parent:"country"},
    {name:"state", type:"select", options : stateData}
]


promisePollyfill()


export default class AACNform extends Component {

    constructor(props){
        super(props);
        this.state={fields:[...test]}
    }
//function that takes filed object and generates the input fields
generateMarkUp(fields){

    let arr = fields.map((el,i)=>{ return (
                   el.type=="select"?(<label>{el.name}
                   
                   <select style={{width:"200px",color:"black"}} >
                       {el.options.map(e=><option>{el.parent?this.state.fields.filter(entry=>entry===el.parent).options:e.name}</option>)}
                   </select>
                   </label>):(
                   <label>{el.name}
                   <input type={el.type} />
                   </label>)
    )
                   } )
            
    

    return arr
                                

}
componentDidMount(){
    let myGui = guidGenerator();
    this.setState(prevState=>({...prevState, id:myGui,}));
    
}

handleSubmit=ev=>{
    
    console.log("clicked")
    ev.preventDefault()
    console.log("submitted")
    console.log(ev.target);
    fetch(this.state.endpoints.postEndpoint)
}

    render(){
       
        return (
            <>
               {this.generateMarkUp(this.state.fields)}

            <pre>{JSON.stringify(countryData,0,2)}</pre> 
            </>
        )
    }
}


