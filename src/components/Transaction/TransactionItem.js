import classes from'./TransactionItem.module.css';
import Card from '../Card.js';
import { Button } from 'bootstrap';


function TransactionItem (prop){
    return(
<div className={classes.expense}>
    <h3>{prop.date}</h3>
    <h3>{prop.type}</h3>
    <h3>{prop.description}</h3>
    <h3>${prop.amount}</h3>
    <button className='classes.button'>Delete</button>
</div>
    );

}

export default TransactionItem;