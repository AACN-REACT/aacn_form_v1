

var myformConfig = {
    type:"custom",
    fields: [{field:"firstname", type:"text", size:"10",focus:false,validate:[1],label:"name",placeholder:"first name"},
             {field:"surname", type:"text", size:"10",focus:false,validate:[1],label:"name",placeholder:"surname"},
             {field:"address1", type:"text", size:"12",focus:false,validate:[1],label:"address",placeholder:"address"},
             {field:"city", type:"text", size:"10",focus:false,validate:[1],label:"City",placeholder:"address"},

            ],
    endpoint: "https://jsonplaceholder.typicode.com/posts",
    styling: "material"
}

module.exports = myformConfig


/* '{
    "type":"custom",
    "fields": [{"field":"firstname", "type":"text", "size":"10","focus":"false","validate":"1","label":"name","placeholder":"first name"},
             {"field":"surname", "type":"text", "size":"10","focus":"false","validate":"1","label":"name","placeholder":"surname"},
             {"field":"city", "type":"text", "size":"10","focus":"false","validate":"1","label":"City","placeholder":"city"}],
    "endpoint": "https://jsonplaceholder.typicode.com/posts",
    "css": "material"
}' */