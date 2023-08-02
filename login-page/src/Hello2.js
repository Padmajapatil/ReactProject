import React,{useState} from "react";
function Hello2(){
    const [fName,setFName]= useState("");
    const[lName, setLName]=useState("");

    function updateFName(event){
        const firstName = event.target.value;
        setFName(firstName);
    }

    function updateLName(event){
        const lastName = event.target.value;
        setLName(lastName);
       // const lastName= event.target.value;
       // setLName(lastName);
    }
    return(
        <div className="container">
            <h1 className="input"> Hello {fName}{lName}</h1>
            <input type="text" 
            value={fName} 
            onChange={updateFName}
            className="input" placeholder="first name" />
            <input type="text" placeholder="last Name" 
            value={lName}
            onChange ={updateLName}
            className="input" />
            <button className="resister">submit</button>
        </div>
    );
}
export default Hello2;
