import React from "react";
import ReactDOM from 'react-dom/client';

function Greeting(){
  return <h2> my First Componant</h2>;
}

const root=ReactDOM.createRoot(Document.getElementById('root'));

root.render(<Greeting></Greeting>);
