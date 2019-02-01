import React from 'react';


const Loaded = {  

    
    DataFetched:function (props){
        
        return (
            <div style={{width:"300px",height:"50px",border:"2px solid lightgreen"}}>
        Data successfully loaded!
        </div>
    )
},

NothingFetched:function (props){
    
    return (
        <div style={{width:"300px",height:"50px",border:"2px solid red"}}>
    Fetched Failed
    </div>
)
} 

}
export default Loaded