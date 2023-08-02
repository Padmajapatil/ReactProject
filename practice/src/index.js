import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//props means the properties like className, is Style by using that we can manibulate the data
//this also called as attribute
function Card(props){
  return(
    <div>
      <h1>{props.name}</h1>
      
      <img src={props.src} alt="avtar" />
    
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
  <Card name="padmaja" src="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_1280.jpg"></Card>
  

 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

