import React,{useState} from "react";

function Hello(){
  const [headingText , setHeadingText]=useState("Hello");
  const [isMouseOver , setMouseOver]=useState(false);
  function handleClicked(){
    setHeadingText("submitted");
    setHeading(name);
  }
  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
  const [name,setName]=useState("")
  
  function handleChange(event){
    //console.log(event.target.value);
    setName(event.target.value);
    const input = event.target.name;
    
    if(inputName === "fName"){
      setFullName({fName:newValue})
    }
    else if(inputName === "lName"){
      setFullName({lName:newValue});
    }
  }
  const [handlingText, setHeading]=useState(
  );
  const [fullName , setFullName]=useState({
    fName:"",
    lName:""
  })



    return(
    <div className="container">
      <h1 className="input">{headingText}
      {fullName.fName}{fullName.lName}</h1>
      <input name="fName" value={fullName.fName}
      className="input" onChange={handleChange} type="text" placeholder="What's your fname?" />
      <input name="lName"
      className="input" onChange={handleChange} type="text" value={fullName.fName} placeholder="What's your lname?" />
      <button 
      className="resister" 
      onClick={handleClicked}
      style={{ background: isMouseOver?"black":"pink"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >submit
      </button>  
    </div>
    );
}
export default Hello;