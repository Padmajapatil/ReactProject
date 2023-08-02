import React from "react";
var isDone=false;

function strike(){
    //document.querySelector(".p").style.textDecoration="line-through";
    isDone= true;
}
function unstrike(){
    //document.querySelector(".p").style.textDecoration=null;
    isDone=false;
}
function Task(){
    const strikeThrough ={textDecoration : "line-through"}
    return(
    <div><p className="p" style={isDone ? strikeThrough : null}>By milk</p>
    <button onClick={strike}>change to Strick</button>
    <button onClick={unstrike}>change back</button>
    </div>);
}
export default Task;