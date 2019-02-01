//thsi function checks for ie11 and loads polyfills in needed
import {fetch as fetchfill} from 'whatwg-fetch'   

function promisePolyfill(){ 
var missingPromises = window.Promise;
if(!missingPromises){
    console.log("This is IE11")
    require('es6-promise').polyfill();
     window.fetch = fetchfill; 
    
}
else{
    console.log("this browser does not need polyfilling")
}
return "pollyfilled"
}
export default promisePolyfill