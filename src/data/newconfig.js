const newConfig = {
    title: "My Simple Form",
    endpoints: {},
    fields: [
      {
        field: "name",
        type: "text",
        label: "Name",
        placeholder: "your first name",
        length: 20,
        handler: undefined,
        classes: "",
        styling: {},
        validation: "",
        value: ""
      },
  
      {
        field: "lastname",
        type: "password",
        label: "Password",
        placeholder: "your last name",
        length: 20,
        handler: undefined,
        classes: "",
        styling: {},
        validation: "",
        value: ""
      },
  
      {
        field: "country",
        type: "select",
        parent: "false",
        child: "state",
        options: [
          {
            name: "USA",
            key: "222",
            selected: true,
            value: "USA"
          },
          {
            name: "UK",
            key: "333",
            value: "USA"
          },
          {
            name: "CANADA",
            key: "444",
            value: "CAN"
          }
        ],
        label: "Country",
        placeholder: "",
        length: 20,
        handler: undefined,
        classes: "",
        styling: {},
        validation: "",
        value: ""
      },
      {
        field: "state",
        type: "select",
        parent: "country",
        options: [
          {
            name: "California",
            Parentkey: "222",
            key: "001",
            value: "CA"
          },
          {
            name: "London",
            Parentkey: "333",
            key: "002",
            value: "LON"
          },
          {
            name: "Ontario",
            Parentkey: "444",
            key: "003",
            value: "ONT"
          }
        ],
        label: "State or Province",
        placeholder: "",
        length: 20,
        handler: undefined,
        classes: "",
        styling: {},
        validation: "",
        value: ""
      },
      { field: "submit", type: "button", handler: undefined, label: "SUMBIT" }
    ],
    classes:"myform"
  };
  

  export default newConfig