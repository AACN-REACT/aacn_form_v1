
var myFormConfig =
{
    type: "custom",
    title: "Badge Info",
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
        { field: "companyName", type: "input", label: "Company", placeholder: "Company name", class: "form-control", validate: [1] },
        { field: "city", type: "input", label: "City", placeholder: "City", class: "form-control", validate: [1] },
        { field: "state", type: ["select", [["AZ", "code"], ["CA", "code"], ["CO", "code"]]], label: "State", placeholder: "state", class: "form-control", validate: [1] },
        { field: "country", type: ["select", ["UNITED STATES", "UNITED KINGDOM"]], label: "Country", placeholder: "country", class: "form-control", validate: [1] }
    ]
};

module.exports = myFormConfig;