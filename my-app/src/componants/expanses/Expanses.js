//import ExpenseItems from '../ExpenseItem'
import ExpanseItems from '../expanses/ExpenseItem';
import Card from '../UI/Card';
import './Expanses.css';

const Expanses= (props)=>{
    return(
        <Card className="expenses">
             <props.itemsItems ttt
      title={props.items[0].title}
      amount ={props.items[0].amount}
       date={props.items[0].date} 
       ></props.itemsItems>
      <props.itemsItems title={props.items[1].title}
      amount ={props.items[1].amount} 
      date={props.items[1].date} >
      </props.itemsItems>
      <props.itemsItems title={props.items[2].title }
      amount ={props.items[2].amount}
       date={props.items[2].date} >
       </props.itemsItems>
      <props.itemsItems title={props.items[3].title }
      amount ={props.items[3].amount} 
      date={props.items[3].date} >
      </props.itemsItems>
        </Card>
    );
}
export default Expanses;