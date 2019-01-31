import React, { Component } from 'react';



class QuickFields extends Component {
    constructor(props){
        super(props);

        this.state = {selected:"a"}
    }



onSelect = (ev)=>{this.setState({selected:ev.target.value})}

    render(){

        return(
            <>
            <div>{this.state.selected}</div>
                <select onChange= {this.onSelect} > Multiple choice
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                 </select>
            </>
        )
    }
}

export default QuickFields 