import React from 'react';


function SubForm(props){

    return (
        <div style={{width:"300px",height:"100px",display:"flex",border:"5px solid skyblue"}}> 
        This is a subform
        
        {props.children()}
        </div>
    )
}

export default SubForm