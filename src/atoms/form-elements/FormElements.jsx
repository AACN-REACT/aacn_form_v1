import React from 'react';

const genericStyles= {height:"20px",width:"100px",margin:"10px",fontFamily:"arial",color:"slate",border:"1px solid blue"};
const genericButton = {borderRadius:"5px",height:"30px",width:"50px",margin:"10px",fontFamily:"arial",color:"slate",border:"1px solid blue"};

const FormElements = {

//input class is  a string, styles is an object, validation is an object,value is a string, handleChange is a function
text: function({ name, label,class_of_box="",length=10,validation,value="", handleChange,styles=genericStyles,placeholder=""}) {

    return ( 

        <label htmlFor={label && name}> 
        <input name={name} styles={{...genericStyles,...styles}} className={class_of_box} length={length} required={validation.required} onChange={handleChange} placeholder={placeholder} value={value} >
    </input>
        </label>
        )
},


button:function(props){
    return(
        <button className={props.buttonClass} style={genericButton} type={props.buttonType}>{props.buttonText}</button>
    )
}

}

export default FormElements