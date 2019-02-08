
const parent = { name:"peter", code:"pt", key:"123456"}

const myList = [

    {name:"option1", fk:"123456"},
    {name:"option2", fk:"fgdfgdg"},
    {name:"option3", fk:"849349"},
    {name:"option4", fk:"123456"},
    {name:"option5", fk:"1233456"},
    {name:"option6", fk:"454454"},
    {name:"option7", fk:"123456"},
    {name:"option8", fk:"1fgf56"},
    {name:"option9", fk:"123456"},
    {name:"option10", fk:"123456"},
    {name:"option11", fk:"451236"},
    {name:"option1", fk:"123456"},
    {name:"option1", fk:"1245456"},
]

function listSorter (parent, pk, list,fk){

 
 return list.filter(item => item[fk] === parent[pk] )

    
}

export default listSorter