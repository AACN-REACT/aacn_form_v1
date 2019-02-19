const newConfig = {
    title:{text:"My Simple Form ", classes:["form-title"]},
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
        styling: {border:"5px solid green"},
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
        children: ["state"],
        options: [
          {
            name: "USA",
            selected: true, 
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
        disappear:false,
        children: ["bands"],
        options: [
            { name: "Manchester",
              Parentkey: "333",
              selected:true,
              key: "005",
              value: "MAN"
            },
            { name: "Liverpool",
            Parentkey: "333",
            key: "006",
            value: "LVP"
          },
          {
            name: "California",
            Parentkey: "222",
            selected:true,
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

            key: "002",
            value: "LON"
          },
          {
            name: "Ontario",
            Parentkey: "444",

            key: "007",
            value: "ONT"
          },
          {
            name: "Montreal",
            Parentkey: "444",
            selected:true,
            key: "003",
            value: "MONT"
          },
          
          
        ],
        label: "State",
        placeholder: "",
        length: 20,
        handler: undefined,
        classes: "",
        styling: {},
        validation: "",
        value: ""
      },
      {
        thisfield: "bands",
        type: "select",
        parent: "state",
        options: [
            { name: "Smiths",
              Parentkey: "005",
              selected:true,
              key: "005",
              value: "MAN"
            },
            { name: "Beatles",
            Parentkey: "006",
            key: "006",
            value: "LVP"
          },
          { name: "Cure",
          Parentkey: "005",
          selected:true,
          key: "005",
          value: "Cure"
        },          
          {
            name: "Beachboys",
            Parentkey: "001",
            selected:true,
            key: "001",
            value: "CA"
          },
          {
            name: "Slipknot",
            Parentkey: "004",
            key: "004",
            value: "TEX"
          },
          {
            name: "RollingStones",
            Parentkey: "002",

            key: "002",
            value: "LON"
          },
          {
            name: "national",
            Parentkey: "003",

            key: "003",
            value: "ONT"
          },
          {
            name: "They Might be Giants",
            Parentkey: "003",
            selected:true,
            key: "003",
            value: "MONT"
          },
          
          
        ],
        label: "bands",
        placeholder: "",
        length: 20,
        handler: undefined,
        classes: "",
        styling: {},
        validation: "",
        value: ""
      },
      {
        thisfield: "flowers",
        type: "radio",
        options: [
            { name: "roses",
              selected:true,
              key: "005",
              value: "ROSE"
            },
            { name: "DAFFODILS",
            key: "006",
            value: "DAF"
          },
          { name: "Cure",
          selected:true,
          key: "005",
          value: "Cure"
        },          
          {
            name: "Beachboys",
            selected:true,
            key: "001",
            value: "CA"
          },
          {
            name: "Slipknot",
            key: "004",
            value: "TEX"
          }
          
          
        ],
        label: "more bands",
        placeholder: "",
        length: 20,
        handler: undefined,
        classes: "",
        styling: {},
        validation: "",
        value: ""
      },
     
    
      { thisfield: "submit", type: "button", label: "SUMBIT", classes:[], styling:{width:"300px"} }
    ],
    classes:"myform"
  };
  

  export default newConfig