import React, {  Suspense, Component,lazy  } from 'react';
import Loaded from '../atoms/messages/loaded';



const SubForm  = lazy(()=>import('./subform.jsx'))




class QuickFields extends Component {
    constructor(props){
        super(props);
        this.state = {loaded:false, payload:{}, output:{},...this.props.config}
      
    }
componentDidMount(){

fetch(this.state.endpoints.getEndpoint).then(x=>{console.log(x)}).then(x=>x.json()).then(x=>{this.setState({payload:x[0]})}).then(x=>this.setState(prevState=>({loaded:true})))

}
    render(){
            console.log(this.state)
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