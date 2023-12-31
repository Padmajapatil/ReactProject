import React,{useState} from "react";
function ToDoItems(props){
    const [isDone, setIsDone]= useState(false);
    
    function handleClick(){

        setIsDone((prevValue) =>{
            return !prevValue;

        });
    }
    return (<div onClick={handleClick}>
        <li style={{textDecoration: isDone?"line-through" :"none"}}>{props.text}</li>
        </div>); 
}
export default ToDoItems;



// import React from "react";
// function toDoItems(props){
//     return(
//         <div  onClick={()=>{
//             props.onChecked(props.id);
//             }}>
//             <li>{props.text}</li>
//         </div>
//     );
// }
// export default toDoItems; 