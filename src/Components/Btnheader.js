import React from "react";

const BtnHeader = (props) =>{
    return (<a className={props.class} href={props.href}>
        {props.content}
    </a>)  
}

export default BtnHeader