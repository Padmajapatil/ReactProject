// import React,{useState} from "react";
// import Header from "./Header";
// import Footer from "./Footer"
// import Note from "./Note.js"
// //import note from "../note";
// import CreateArea from "./CreateArea";
// //console.log(note);

// // function createNotes(noteItem){
// //   return <Note key={noteItem.key} title={noteItem.title} content={noteItem.content}/>
// //}
// function App() {
//   const [notes,setNotes]=useState([]);

//   function addNote(newNote){
  
//     setNotes(prevNotes => {
//       return [...prevNotes,newNote];
//     });
//   }

//   function deleteNote(id){
//     setNotes(prevNotes =>{
//      return prevNotes.filter((noteItems,index)=>{
//         return index!==id;
//       });
//     });
//   }

//   return (
//    <div>
//     <Header></Header>

//     <CreateArea onAdd={addNote}></CreateArea>

//    {notes.map((noteItem,index) =>{
//     return
//      <Note 
//      key={index}
//      id={index}
//      title={noteItem.title} content={noteItem.content}
//      onDelet={deleteNote}>
//      </Note>})}
  
//     <Footer>
//     </Footer>
//    </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

