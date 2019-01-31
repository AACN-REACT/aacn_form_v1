
var myFormConfig =
{
    type: "custom",
    title: "Company Info",
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
        { field: "companyName", type: "input", label: "Company", placeholder: "Company name", class: "form-control", validate: [1] }
    ]
};

module.exports = myFormConfig;