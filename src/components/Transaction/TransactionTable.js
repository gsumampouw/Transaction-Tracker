import TransactionItem from "./TransactionItem";
import classes from"./TransactionTable.module.css";

function TransactionTable(props) {
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

function onDelete(id){
  props.onDelete(id);

}

  const tableData = data.map((transaction) => {
    return (

      <tr key={transaction.id}>
        <td>{transaction.date.toDateString()}</td>
        <td>{transaction.type}</td>
        <td>{transaction.description}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.card}</td>
        <td><button onClick={() =>onDelete(transaction.id)}>Delete</button></td>
      </tr>
    );
  });


  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Description</th>
          <th>Amount ($)</th>
          <th> Card</th>
          <th>Remove</th>
        </tr>
        </thead>
        <tbody>
        {tableData}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
