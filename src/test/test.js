import React, { createRef } from "react";
import ErrorBoundry from './error'
import listSorter from '../utils/connectingkeys'
import ReactDOM from "react-dom";





class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      field1:{
      value:"one",
      options: [
         { value: "one", dk: 4321, prop: "one" },
         { value:"blank", dk: 1234, prop: "blank" },
        {value:"two", dk: 4321, prop: "two" },
       {value: "three",  dk: 1234, prop: "three" }
      ]
    },
      field2: { 
          value:"",
          parent:"field1",
          options:[
        { value: "one", fk: 4321, prop: "one" },
        { value: "blank", fk: 1234, prop: "blank" },
        { value: "two", fk: 4321, prop: "two" },
        { value: "three", fk: 1234, prop: "three" }
      
          ]
    }}
    this.handleSelect = this.handleSelect.bind(this);
    this.myRef = createRef();
  }

  handleSelect(ev) {
      ev.persist()
    console.log("vahnge detected");
    this.setState(prevState=>({field1:{value1:ev.target.options}}))
    //this.setState(prevState => ({ selectValue: ev.target.selected }));
  }
  componentDidMount() {
    console.log("Initlaised");
    console.log(this.myRef.current.options.selectedIndex.value);
    console.log(this.state.value);
  }
  componentDidUpdate() {
    console.log("update fired");
    console.log(this.myRef.current.options.selectedIndex.value);
    console.log(this.state.value);
  }
  render() {
    return (
       <>

        <input onChange={this.handleSelect} />

        <select onChange={this.handleSelect} ref={this.myRef} value={this.state.field1.options[selectedIndex].value}>
          {this.state.field1.options.map(item => (
              <option>
              {item.prop}
            </option>
          ))}
        </select>
        <select >
               {listSorter(this.state.field1.options[1],"dk",this.state.field2.options,"fk").map(el=><option>{el.value}</option>)}
               
        </select>
       </>
    
    );
  }
}
export default Form