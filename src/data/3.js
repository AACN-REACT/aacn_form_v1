

var myformConfig = {
    type:"custom",
    fields: [{field:"firstname", type:"text", size:"10",focus:false,validate:[1],label:"name",placeholder:"first name"},
             {field:"surname", type:"text", size:"10",focus:false,validate:[1],label:"name",placeholder:"surname"},
             {field:"address1", type:"text", size:"12",focus:false,validate:[1],label:"address",placeholder:"address"},
             {field:"city", type:"text", size:"10",focus:false,validate:[1],label:"City",placeholder:"city"},
             {field:"city", type:"text", size:"10",focus:false,validate:[1],label:"City",placeholder:"Country"}

            ],
    endpoint: "https://jsonplaceholder.typicode.com/posts",
    styling: "material"
}

module.exports = myformConfig