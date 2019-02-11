import React from 'react';
import FormElements from '../atoms/form-elements/FormElements.jsx'


function FieldGenerator({fields}){

    
const display  = fields.map((el,index)=><FormElements[el.type]  />)

return display


}