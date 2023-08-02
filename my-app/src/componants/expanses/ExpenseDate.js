import  './ExpenseDate.css'
// import '.\ExpenseDate.js';

function ExpensrDate(props){
    const month = props.date.toLocaleString('en-US',{month:'long'});
const day =props.date.toLocaleString('en-US',{day:'2-digit'});
const year =props.date.getFullYear(); 
//for the calander like look 
    return(<div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>)
}
export default ExpensrDate;
