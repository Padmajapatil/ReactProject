
import React from 'react';
import './App.css';
import './index.css'
const PizzaDate=[
  {
     name:"Focaccia",
     ingredients: "Bread with italian olive oil rosemary",
     PhotoName:"/pizza/brade.jpg",
     price:6,
     soldOut:false,
  },
  {
     name:"Pizza Margerita",
     ingredients: "Tomato and Mozarella",
     PhotoName:"/pizza/margrita-pizza.jpg",
     price:10,
     soldOut:false,
  },
  {
     name:"Pizza Spinaci",
     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
     PhotoName:"/pizza/spinach-pizza.jpg",
     price:12,
     soldOut:false,
  },
  {
     name:"Pizza Funghi",
     ingredients: "Tomato,mozarella, and onion",
     PhotoName:"/pizza/pizza.jpg",
     price:12,
     soldOut:false,
  },
  {
     name:"Pizza Salamino",
     ingredients: "Tomato, mozarella, and pepperoni",
     PhotoName:"/pizza/paporini-piza.jpg",
     price:15,
     soldOut:true,
  },
  {
     name:"Pizza Proscitto",
     ingredients: "Tomato, mozarella , hum , aregula, and burrata cheese",
     PhotoName:"/pizza/burata-pizza.jpg",
     price:18,
     soldOut:false,
  }
 ];
function Pizza(props){
  return (
   <li className={`pizza ${props.soldOut? "sold-out": ""}`}>
   {/* // <li className=" pizza sold-out"> */}
   <img src={props.pizzaObj.PhotoName} alt={props.pizzaObj.name}  />
   <div>
   <h3>{props.pizzaObj.name}</h3>
   <p>{props.pizzaObj.ingredients}</p>
   <span>{props.pizzaObj.soldOut? "Sold out": props.pizzaObj.price}</span>
   </div>
  </li>
  );
}

function Header(){
  
   return <header className='header'><h1 >Fast React Pizza Co.</h1></header>
}
function Menu(){
   const pizzas = PizzaDate;
   //const pizzas=[];
   const numPizzas = pizzas.length;
   return <main className='menu'><h2>our manu</h2>
    {numPizzas >0 ?(
      <>
         <p>Authentic Itallic cuisine. 6 creative dises to choose form. all from our stone oven, all organic, all delicious. </p>
   <ul className='pizzas'>
      {PizzaDate.map((pizza)=>(
         <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
      ))}
   </ul>
   </>
   ) : <p>we are still working on our manu. plz come back later</p>}
  {/* <Pizza
 name="Focaccia"
 ingredients= "Bread with italian olive oil rosemary"
 PhotoName="/pizza/brade.jpg"
 price={6}
 />
  <Pizza
   name="Pizza Margerita"
   ingredients= "Tomato and Mozarella"
   PhotoName="/pizza/margrita-pizza.jpg"
   price={10}/>
  <Pizza
  />
  <Pizza
  name="Pizza Spinaci"
  ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
  PhotoName="/pizza/spinach-pizza.jpg"
  price={12}/>
  <Pizza
  
  name="Pizza Funghi"
  ingredients= "Tomato,mozarella, and onion"
  PhotoName="/pizza/pizza.jpg"
  price={12}/>
//   <Pizza */}
{/* //   name="Pizza Salamino"
//   ingredients= "Tomato, mozarella, and pepperoni"
//   PhotoName="/pizza/paporini-piza.jpg"
//   price={15}
//   />
//   <Pizza */}
{/* //    name="Pizza Proscitto"
//    ingredients= "Tomato, mozarella , hum , aregula, and burrata cheese"
//    PhotoName="/pizza/burata-pizza.jpg"
//    price={18}
//   /> */}
</main>
}
function Footer(){

   const hour = new Date().getHours();
   const openHour=12;
   const closeHour =22;
   const isOpen = hour>= openHour && hour <= closeHour;

   return <footer className='footer'>{isOpen ? (
   <Order></Order>
   ): (<p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)} 
</footer>
}

function Order(props){
   return(<div className='order'>
      <p>we,re open until {props.closeHours}:00. Come visit us or order online.</p>
   <button className='btn'>Order</button>

   </div>)
}

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default App;
