import React from "react";

const Scroll = (props)=>{
    return(
        <div style={{overflowY: 'Scroll', border: '2px solid purple',height:'500px'}}>
            {props.children}
        </div>
    )
}
export default Scroll