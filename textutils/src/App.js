import './Componants/Navbar'
import './App.css';
import Navbar from './Componants/Navbar';
import Textarea from './Componants/TextArea'
import About from './Componants/About';
import React, {useState} from 'react';


function App() {
  const [mode, setMode]= useState('light');
// whather dark mode is enable or not
  
const toggleMode=()=>{
  if(mode =='light'){
    setMode('dark');
    console.log("function is running");
    document.body.style.backgroundColor='black';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
}   
  return (
    <div >
     <Navbar title="Textutils" about="About Text" mode={"mode"} toggleMode={toggleMode}></Navbar>
     {/* <Navbar></Navbar> */}
     <Textarea></Textarea>
     {/* <About></About> */}
    </div>
  );
}

export default App;
