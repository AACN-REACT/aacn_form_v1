import React, {  Suspense, Component,lazy  } from 'react';
import Loaded from '../atoms/messages/loaded';
import {fetch as fetchfill} from 'whatwg-fetch'   

// using what-wg fetch polyfill for ie11 https://github.com/github/fetch 


const SubForm  = lazy(()=>import('./subform.jsx'))




class QuickFields extends Component {
    constructor(props){
        super(props);
        this.state = {loaded:false, payload:{}, output:{},...this.props.config}
      
    }
componentDidMount(){
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if(isIE11){
        console.log("This is IE11")
        require('es6-promise').polyfill();
         window.fetch = fetchfill; 
        
    }
    else {console.log("you have fetch")}
fetch("https://jsonplaceholder.typicode.com/photos").then(x=>x.json()).then(x=>{this.setState({payload:x[0]})}).then(x=>this.setState(prevState=>({loaded:true})))
}

    render(){
            console.log(this.state.payload.x)
        return(
            <>
            <div>this text is not sub component </div>
            <Suspense fallback={<h1>...Loading</h1>}> 
            <SubForm>
            {()=>{if(this.state.loaded){return <Loaded.DataFetched/>};return <Loaded.NothingFetched/>}}
            </SubForm>
            </Suspense > 
            </>

            
        )
    }
}

export default QuickFields