export default class AACNform_old extends Component {
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