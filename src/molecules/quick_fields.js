import React, {  Suspense, Component } from 'react';
// using what-wg fetch polyfill for ie11 https://github.com/github/fetch 
import {fetch as fetchfill} from 'whatwg-fetch'




class QuickFields extends Component {
    constructor(props){
        super(props);
        this.state = {payload:{}, output:{},...this.props.config}
      
    }
componentDidMount(){
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    try { console.log(!!isIE11)}
    catch (err) {console.log("NO SUCH ERROR",err)}
    if(isIE11){
        console.log("no fetch")
        window.Promise = require("bluebird");
         window.fetch = fetchfill;
        
    }
    else {console.log("you have fetch")}
fetch("https://jsonplaceholder.typicode.com/photos").then(x=>x.json()).then(x=>{this.setState({payload:x[0]})})
}

    render(){
            console.log(this.state.payload.x)
        return(
            <>

            <h1> hello</h1>
            {this.state.payload.title}

            </>
        )
    }
}

export default QuickFields