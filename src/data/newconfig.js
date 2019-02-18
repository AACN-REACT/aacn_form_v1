const newConfig = {
    title:{text:"My Simple ", classes:["form-control"]},
    classes:"form-control-lg",
    endpoints: {},
    fields: [
      {
        thisfield: "name",
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
        thisfield: "surname",
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
        thisfield: "country",
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
            selected: true,
            value: "UK"
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
        thisfield: "state",
        type: "select",
        parent: "country",
        options: [
         { name: "Manchester",
          Parentkey: "333",
          key: "005",
          value: "MAN"
        },
          {
            name: "California",
            Parentkey: "222",
            key: "001",
            value: "CA"
          },
          {
            name: "Texas",
            Parentkey: "222",
            key: "004",
            value: "TEX"
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
      { thisfield: "submit", type: "button", handler: (ev)=>{ev.preventDefault(); }, label: "SUMBIT", classes:"", styling:{width:"100px"} }
    ],
    classes:"myform"
  };
  

  export default newConfig