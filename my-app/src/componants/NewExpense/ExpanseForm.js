import React,{useState} from "react";
import './ExpanseForm.css';
const ExpanseForm = (props)=>
{
 const [enterTitle, setEnterTitle]=useState('');
  const [enterAmount, setEnterAmount]=useState('');
  const [enterDate, setEnterDate]=useState('');
 /* const inputhangeHandler=(identifier,value)=>{
    if(identifier==='title'){
      setEnterTitle(value);
    }else if(identifier==='date'){
      setEnterDate(value);
    }else{
      setEnterAmount(value);
    }
  }*/

  /*const [userInput,setUserInput]=userState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  })*/
  const titleChangeHandeler =(event)=>{
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value,
    // })
    setEnterTitle(event.target.value);
  };


  const amountChangeHandler= (event)=>{
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value,
    //  })
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) =>{
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value,
    //  })
    setEnterDate(event.target.value);
  };

  //it will create the obj of the data we have added
  const submitHandler = (event)=>{
    event.preventDefault();
    
    const expanseData ={
      title:enterTitle,
      amount:enterAmount,
      date:new Date(enterDate)
    };
    props.onSaveExpanseDate(expanseData);
    setEnterTitle('');//it will help to clear the input whenever we submit the form
    setEnterAmount('');
    setEnterDate('');
  };
return(
   <form action="" onSubmit={submitHandler}>
    <div className="new-expanse__controls">
    <div className="new-expanse__controls">
      <label htmlFor="">Title</label>  
      <input type="text"
      value={enterTitle}
      onChange={titleChangeHandeler}/>
     </div>  
     <div className="new-expanse__controls">
     <label >Amount</label>  
      <input type="number"min='0.01' step='0.01'
      value={enterAmount}onChange={ amountChangeHandler} />
     </div> 
     <div className="new-expanse__controls">
      <label>Date</label>  
      <input type="date" min='2019-01-01' max='2024-12-31'
      value={enterDate} onChange={dateChangeHandler} />
     </div> 
    </div>
    <div className="new-expanse__actions">
        <button type="submit">Add Expanse</button>
    </div>
   </form>
)
};
export default ExpanseForm;