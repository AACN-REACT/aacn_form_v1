 const myconfig1  = {

    title: "My Form",
    formstyle: "",
    formtype:"",
    fields:{
            GenericField: {},
            Country:{type:"text",
                  pos:1,
                  value:"",
                  validation:{
                          required:true,
                          pattern: "my regex",
                          message:function(){return `You need to validate ${this.pattern}` }
                            }
                  },
              State: {
                type: ["select", ["option 1", "option2"]],
                pos: 1,
                validation: {
                  required: true,
                  pattern: "my regex",
                  message: function () { return `You need to validate ${this.pattern}` }
                }
              },
              
    },
  
    endpoints:{
      getEndpoint: "http://servicesdev.aacn.org/customer/api/customers/1F5A81E7-2B73-4D5F-B087-3267F9E14BC8/addresses/9b7b3285-7d62-4158-88dc-23b41f9616e1/",
      postEndpoint: "http://services{environment}.aacn.org/customer/api/{customerKey}/address/{addressKey}",
      putEndpoint: "http://services{environment}.aacn.org/customer/api/{customerKey}/address/{addressKey}",
      deleteEndpoint: "http://service{environment}s.aacn.org/customer/api/address/{addressKey}"
    },
    }

    export default myconfig1