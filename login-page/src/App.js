
import React, {useState} from "react";
import Login from "./Login"
import Input from "./Input";
import Form from './Form'
import Task from "./Task"
import Hello from "./Hello"
import Hello2 from "./Hello2";
//var isLoggedIn = false;
var userIsResistered=false;
  


function App() 
  {
    const [count,setCount]=useState(0);

    function increase(){
      setCount(count +1);
    }
    function decrease(){
      setCount(count-1);
    }
    
    const now = new Date().toLocaleString();
    const [time,setTime]=useState(now);
    function updateTime(){
      const newTime = new Date().toLocaleString();
      setTime(newTime);
   }
      
    // return (<div>
    //   <h1>{time}</h1>
    //   <button onClick={updateTime}>Get Time</button>
    // </div>
    //);
    // return (<div className="container">
    //   <h1>{count}</h1>
    //   <button onClick={increase}>+</button>
    //   <button onClick={decrease}>-</button>
    // </div>)
    return(<div><Form isResister={userIsResistered}></Form>
    <Hello2/>
    </div>);
   // return(<Task></Task>);
  // return(<div className="container">
  //   {isLoggedIn ? <h1>Hello</h1> : <Login/>}
  // </div>
  // );
}

export default App;
