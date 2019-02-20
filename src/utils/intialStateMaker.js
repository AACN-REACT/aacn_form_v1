export default function initialStateMaker (fieldtocheck){ 
    switch (fel.type){
    case "select":
      return fel.parent? //check if field has a parent
        fel.options.filter((item,i)=>Object.keys(item).indexOf('selected')>=0).length>0 ? // check if there is a selected option
              fel.options.filter(item=>item.Parentkey===formInitialState[fel.parent].key).filter((item,i)=>Object.keys(item).indexOf('selected')>=0)[0]:
              fel.options.filter(item=>item.Parentkey===formInitialState[fel.parent].key)[0]:      
              fel.options.filter((item,i)=>Object.keys(item).indexOf('selected')>=0).length>0?
              fel.options.filter((item,i)=>Object.keys(item).indexOf('selected')>=0)[0]:fel.options[0];
   case "text":
        return
   case "textbox":
    return  fel.value;

   case "radio":
   return 

   case "autofill":
   return

   case "datepicker":
   return 

   case "simpledate":
    
    case "color":
    
    case "date":
    
    case "datetime-l:ocal":
    
    case "email":
    
    case "month":
    
    case "number":
    
    case "range":
    
    case "search":
    
    case "tel":
    
    case "time":
    
    case "url":
    
    case "week":
    
     }
    }