import React from "react";
import Input from "./Input";
function Login(){
    return <from className="from">
    
    <Input
    type="text"
    placeholder="name"></Input>
    <Input type="password" placeholder="Password"></Input>
    <button className="resister" type='submit'>LogIn</button>
  </from>
}
export default Login;