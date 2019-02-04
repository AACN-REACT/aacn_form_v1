import React, { Suspense, lazy, Component } from 'react';
import FormElements from '../atoms/form-elements/FormElements.jsx'

import promisePollyfill from '../utils/promisePollyfill'
import  guidGenerator from '../utils/guid_generator.js'



promisePollyfill()


export default class AACNform extends Component {

    constructor(props){
        super(props);
        this.state={buttons:[{buttonText:"submit",buttonType:"submit"}], ...props.config}
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
            <form name={this.state.title} onSubmit={this.handleSubmit} > 
            <div>{this.state.title}</div>
             <FormElements.button buttonText={this.state.buttons[0].buttonText} />
            <pre>{JSON.stringify(this.state,0,2)}</pre>

            </form>
        )
    }
}


