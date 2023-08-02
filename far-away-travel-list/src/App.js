import { useState } from "react"; 
const initalItems=[
  {id:1, description:"passport",quantity:2,packed:false},
  {id:2, description:"socks",quantity:12,packed:false},
];


function App() {
const [items, setItems]=useState([]);

function handleItems(item){
  setItems((items) => [...items , Item]);
}

function handleDeleteItems()

  return(<div>
  <Logo></Logo>
  <Form onAddItems={handleAddItems}></Form>
  <PackingList items={items}></PackingList>
  <Stats></Stats>
  </div>)
}
function Logo(){
 return<h1>Far Away </h1>
} 

function Form(){
 
  const [description, setDescription]=useState("");
  const [quantity,setQuantity]=useState();
  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;
    
    const newItem ={description,quantity, packed:false,id:Date.now()};
    console.log(newItem);
  }

  return (<form className="add-form" onSubmit={handleSubmit}>
    <h3>what do u need for your trip?</h3>
    <select value={quantity}
    onChange={(e)=> setQuantity(Number(e.target.value))}> 
      {/* <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option> */}

      {Array.from({ length:20 } ,(_,i) => i+1).map((num)=>
      (<option value={num} key={num} >{num}</option>
      ))}
    </select>
    <input type="text" placeholder="Item..." value={description} onChange={(e)=>{
      setDescription(e.target.value)
      }}/>
    <button>Add</button>
  </form>
  );
}

function PackingList(){
  return (
 <div className="list">
  <ul>
    {initalItems.map((item)=>(
      <Item item={item} key ={item.id}></Item>
    ))}
  </ul>
 </div>
  )
}

function Item({item}){
  return <li>
    <span style={item.packed?{textDecoration:"line-through"}:{}}>{item.quantity} {item.description}
    </span>
    <button>x</button>
  </li>
}

function Stats(){
  return(
    <footer className="stats">
    <em>You have X items on list, and you already packed x (X%)</em>
    </footer>
  )
}

export default App;
