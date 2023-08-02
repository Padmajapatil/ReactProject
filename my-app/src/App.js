import './App.css';
//import ExpenseItems  from './componants/expanses/ExpenseItem';
import NewExpanse from './componants/NewExpense/NewExpanse';
import Expanses from './componants/expanses/Expanses';
//import NewExpanse from './componants/NewExpense/NewExpanse';
//import ExpenseDate from './componants/ExpenseDate';

function App() {
  
  const expense=[
    {
        id:'e1',
        title:'Paper',
        amount :94.12,
        date: new Date(2020,7,14),
    },
    {
        id:'e2',
        title:'Car Insurance',
        amount :294.12,
        date: new Date(2021,5,10),
    },
    {
        id:'e3',
        title:'New Desk',
        amount :450,
        date: new Date(2021,5,12),
    },
    {
        id:'e4',
        title:'computer' ,
        amount :550,
        date: new Date(2020,1,1),
    },
    ];
    const addExpanseHandler =expense =>{
      console.log('in app.js');
      console.log(expense);
    }
  return (
    <div>
     < NewExpanse onAddExpanse={addExpanseHandler} />

       {/* <Expanses items={expense}></Expanses>  */}
     
     { /* this is like div and h1 tag or componant but we have created that componant  */ }
     {/* custom componant shouls start from uppercase and predefind componant */}

    </div>
  );
}

export default App;