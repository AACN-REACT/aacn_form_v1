import React, { Suspense, lazy, Component } from "react";
import FormElements from "../atoms/form-elements/FormElements.jsx";
import countries from "../data/Lookup/countryData.js";
import states from "../data/Lookup/stateData.js";
import promisePollyfill from "../utils/promisePollyfill";
import guidGenerator from "../utils/guid_generator.js";
// import countryData from '../data/Lookup/countryData';
// import stateData from '../data/Lookup/stateData';

// ------------------------------FUNCTIONS USED --------------------------------------------------//
//-----------------------------------------------------------------------------------------------//

// filterList - utility for filtering a list of objects based on the FK/PK match with a Parent object
// the function takes four parameters, ParentObject(object),ParentPrimaryKey(string), ListToBeFiltered(array of objects), ForeignKey()

function filterList(parent, pk, list, fk) {
  return list.filter(item => item[fk] === parent[pk]);
}


const countryData = [
  { code: "USA", display: "United States", key: "1111", selected: true },
  { code: "CAN", display: "Canada", key: "2222" },
  { code: "UK", display: "United Kingdom", key: "3333" },
  { code: "RUS", display: "Russia", key: "4444" }
];

const stateData = [
  { code: "MIL", display: "Milwaukae", pk: "1111" },
  { code: "TEX", display: "Texas", pk: "1111", selected: true },
  { code: "BERK", display: "berkshire", pk: "3333" },
  { code: "PET", display: "st petersburg", pk: "4444" },
  { code: "ONT", display: "ontario", pk: "2222" },
  { code: "LON", display: "london", pk: "3333" },
  { code: "ATL", display: "atlanta", pk: "1111" },
  { code: "MOS", display: "moscow", pk: "4444" },
  { code: "MON", display: "montreal", pk: "2222" },
  { code: "NFL", display: "NewfoundLand", pk: "2222" },
  { code: "LVP", display: "Liverpool", pk: "3333" },
  { code: "SBR", display: "Siberia", pk: "4444" },
  { code: "CA", display: "California", pk: "1111" }
];
const test = {
  title: "My Form",
  endpoints: {
    getEndpoint: "",
    deleteEndpoint: "",
    postEndpoint: "",
    putEndpoint: ""
  },
  fields: [
    { name: "name", type: "password", value: "" },
    { name: "country", type: "select", options: countryData, value: "" },
    {
      name: "state",
      type: "select",
      options: stateData,
      value: "",
      parent: "country"
    },
    { name: "state", type: "select", options: stateData }
  ],
  key: "123435"
};

const test2 = {
  title: "My Form",
  endpoints: {
    getEndpoint: "",
    deleteEndpoint: "",
    postEndpoint: "",
    putEndpoint: ""
  },
  fields: {
    name: { label: "Name", type: "password", prop: "", pos: 1 },
    country: {
      label: "Country",
      type: "select",
      options: countryData,
      prop: "",
      pos: 2
    },
    state: {
      label: "State/region",
      type: "select",
      options: stateData,
      parent: "country",
      prop: "",
      pos: 3
    },
    Number: {
      label: "Number",
      type: "select",
      options: [
        { display: "1", prop: 1 },
        { display: "2", prop: 2 },
        { display: "3", prop: 3 }
      ],
      prop: "",
      pos: 4
    }
  },
  key: "123435"
};

promisePollyfill();

export default class AACNform extends Component {
  constructor(props) {
    super(props);
    this.state = this.generatingState(test2);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.persist();
    console.log("This event target props", event);
    event.preventDefault();
    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        [event.target.name]: {
          ...prevState.fields[event.target.name],
          prop: [event.target.value]
        }
      }
    }));
  }

  //function that takes filed object and generates the input fields

  generatingState(config) {
    this.state = { ...config };
    console.log(this.state);
  }
  generateMarkUp(fields) {
    const fieldset = [];
    for (let key in fields) {
      console.log(fields[key]);
      fieldset.push(
        fields[key].type == "select" ? (
          <label pos={fields[key].pos}>
            {fields[key].label}

            <select
              onChange={this.handleChange}
              name={key}
              style={{ width: "200px", color: "black" }}
            >
              {fields[key].options
                .map(el => <option value={el}>{el.display}</option>)
                .filter(e =>
                  fields[key].options.parent
                    ? fields[key].options.parent.value.key === e.pk
                    : e
                )}
            </select>
          </label>
        ) : (
          <label pos={fields[key].pos}>
            {fields[key].label}
            <input
              onChange={this.handleChange}
              name={key}
              type={fields[key]}
              value={fields[key].prop}
            />
          </label>
        )
      );
    }

    let sortedArr = fieldset.sort((a, b) => a.props.pos - b.props.pos);
    console.log("SORTED ARR:", sortedArr);
    return sortedArr;
  }

  componentDidMount() {
    let myGui = guidGenerator();
    this.setState(prevState => ({ ...prevState, id: myGui }));
  }

  handleSubmit = ev => {
    console.log("clicked");
    ev.preventDefault();
    console.log("submitted");
    console.log(ev.target);
    fetch(this.state.endpoints.postEndpoint);
  };

  render() {
    console.log("RENDERED FIELDS:", this.state.fields);
    return (
      <>
        {this.generateMarkUp(this.state.fields)}

        {/*<pre>{JSON.stringify(countryData,0,2)}</pre>*/}
      </>
    );
  }
}
