//this is custom componant;
import React, {useState} from "react";
import "./ExpenseItems.css"
 import ExpenseDate from './ExpenseDate.js';
 import Card from "../UI/Card";
function ExpenseItems(props){
   const [title , setTitle]=useState(props.title);

 
   
   const clickHandler=()=>{
    setTitle("update");
    console.log("update")
   }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            {/* {}called as dynamic place holders used to take the inputs or we dont need to hard code the value */}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
           <button onClick={clickHandler}>change title</button>
        </Card>
    );
}
export default ExpenseItems;