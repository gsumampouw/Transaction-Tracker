import classes from'./TransactionItem.module.css';
import Card from "../Card"

function TransactionItem (props){
    let data = props.data;
    function onDelete(id){
        props.onDelete(id);

    }
    const transactionItem = data.map((transaction)=>{
    return(

<Card  key={transaction.id}>
    <div className={classes.transactionMobile}> 
    <div>
    Date <h5>{transaction.date.toDateString()}</h5>
    </div>
    <div>
    Type <h5>{transaction.type}</h5>
    </div>
    <div>
    Amount 
    <h5>${transaction.amount}</h5>
    </div>
    <div className={classes.right}>
    <button className={classes.button} onClick={() => onDelete(transaction.id)}>Delete</button></div>
    </div>
    
</Card>
    );
});

return(
<div className={classes.cardWidth}>
    {transactionItem}
</div>
);
}

export default TransactionItem;