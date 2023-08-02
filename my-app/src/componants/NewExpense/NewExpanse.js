import React from 'react';
import ExpanseForm from './ExpanseForm';
import './NewExpanse.css';
const NewExpanse=(props)=>{
    const saveExpanseDataHandler=(enterdExpanseData)=>{ 
        const expanseData={
            ...enterdExpanseData,
            id:Math.random().toString()
        };
    props.onAddExpense(expanseData);
    }
    return(
        <div className="new-expanse">
            <ExpanseForm onSaveExpanseData={saveExpanseDataHandler}/>
        </div>
    );
}
export default NewExpanse;