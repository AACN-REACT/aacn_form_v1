const newConfig = {
    title:{text:"My Simple ", classes:["form-control"]},
    classes:"form-control-lg",
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
        styling: {border:"10px solid pink"},
        validation: "",
        value: "Tony"
      },
  
      {
        field: "surname",
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
        child: "state",
        options: [
          {
            name: "USA",
            key: "222",
            
            value: "USA"
          },
          {
            name: "UK",
            key: "333",

            value: "UK"
          },
          {
            name: "CANADA",
            key: "444",
            selected: true,
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
            selected:true,
            key: "002",
            value: "LON"
          },
          {
            name: "Ontario",
            Parentkey: "444",
            selected:true,
            key: "003",
            value: "ONT"
          },
          {
            name: "Montreal",
            Parentkey: "444",

            key: "003",
            value: "MONT"
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
      { field: "submit", type: "button", handler: (ev)=>{ev.preventDefault(); }, label: "SUMBIT", classes:"", styling:{width:"100px"} }
    ],
    classes:"myform"
  };
  

  export default newConfig