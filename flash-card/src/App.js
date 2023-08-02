
import './App.css'
import {useState} from "react";
function App() {
  return (
    <div className='app'>
      <FlashCards></FlashCards>
    </div>
  );
}

const question=[
{id:1111,
  question:"What lang is react based on",
  answer:"javasript"
},
{id:2222,
  question:"What are building blocks of react app?",
  answer:"componant"
},
{id:3333,
  question:"How to pass data from parent to child components",
  answer:"props"
},
{id:4444,
  question:"How to give componants memorey",
  answer:"useState hook"
},
{id:5555,
  question:"What do we call an input element that is completly synchronised with state?",
  answer:"Controlled element"
},
{id:6666,
  question:"What is the name of syntax we use to describe UI in react?",
  answer:"JSX"
},
];
  
function FlashCards(){
  const [selectedId, setSelectedId]=useState(null);
  
  function handleClicked(id){
    setSelectedId(id !== selectedId ? id :null);
  }
  
  return (
   
    <div className="flashcards">
        
          {question.map((question)=>(
      <div
       key={question.id}
      onClick={ ()=>handleClicked(question.id)}
    className={question.id === selectedId ? "selected" : ""}>
            <p>{question.id === selectedId ? question.answer:question.question}</p>
            </div>
           ))}
        </div>
  );
}
export default App;
