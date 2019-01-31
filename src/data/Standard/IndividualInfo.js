
var myFormConfig =
{
    type: "custom",
    title: "Individual Info",
    endpoints: {
        getEndpoint: "http://services{environment}.aacn.org/customer/api/address/{addressKey}",
        postEndpoint: "http://services{environment}.aacn.org/customer/api/{customerKey}/address/{addressKey}",
        putEndpoint: "http://services{environment}.aacn.org/customer/api/{customerKey}/address/{addressKey}",
        deleteEndpoint: "http://service{environment}s.aacn.org/customer/api/address/{addressKey}"
    },

    styling: {
        styleType: "material",
        styleSheet: ["http://{environment}.aacn.org/static/aacn.css"],
        styleClass: ""
    },

    fields: [
        { field: "key", type: "hidden", label: "key", placeholder: "", validate: [1] },
        { field: "firstName", type: "input", label: "First Name", placeholder: "First Name", class: "form-control", validate: [1] },
        { field: "middleName", type: "input", label: "Middle Name", placeholder: "Middle Name", class: "form-control", validate: [1] },
        { field: "lastName", type: "input", label: "Last Name", placeholder: "Last Name", class: "form-control", validate: [1] },
        { field: "birthDate", type: "date", label: "Birth Date", placeholder: "Birth Date", class: "form-control", validate: [1] }
    ]
};

module.exports = myFormConfig;