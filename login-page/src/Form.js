import React from "react";
import Input from "./Input";
import Login from "./Login";

function Form(props){
    return <div className="container">
        <Input type="name" placeholder="username"></Input>
    
        <Input type="password" placeholder="passworld"></Input>
       
        {!props.isResister && (<Input type="passworld" placeholder="conform passworld"></Input>)}
        
        <button className="resister" type="submit" placeholder="resister">
            {props.isResister ? "Login" :" Resister"}
        </button>
    </div> 
}
export default Form;