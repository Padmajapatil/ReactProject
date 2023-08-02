// import React,{useState} from "react";
// import ToDoItems from "./ToDoItems"
// import InputArea from "./InputArea";

// function App() {
//   const [items, setItems]=useState([]);
 
//   function addItems(inputText){
//     setItems(prevItems => {
//       return[...prevItems,inputText];
//     });
//     setInputText("");
//   }

//   function deleteItems(id){
//     setItems(prevItems => {
//       return prevItems.filter((item,index)=>{
//         return index !==id;
//       })
//     }); 
//   }
//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <InputArea onAdd={addItems} />
//       <div>
//         <ul>
//           {/* {items.map(todoItems =>(
//          <ToDoItems text={todoItems}/>
//           ))} */}
//           {items.map((todoItems, index) =>(<ToDoItems text={todoItems} onChecked={deleteItems} id={index} key={index}></ToDoItems>))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import ToDoItem from "./ToDoItems";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
