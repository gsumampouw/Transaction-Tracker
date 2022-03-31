import Card from "../Card.js";
import TransactionItem from "./TransactionItem";

function TransactionItemMobile(props){
    let data = props.data;
    const item = data.map((transaction) => {
      return (
        <TransactionItem
          key={transaction.id}
          date={transaction.date.toDateString()}
          type={transaction.type}
          description={transaction.description}
          amount={transaction.amount}
          card={transaction.card}
        />
      );
    });
}   

export default TransactionItemMobile;