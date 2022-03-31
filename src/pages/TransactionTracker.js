import Card from "../components/Card";
import classes from "./TransactionTracker.module.css";
import BarCharts from "../components/Transaction/BarChart";
import TransactionTable from "../components/Transaction/TransactionTable";
import TransactionItem from "../components/Transaction/TransactionItem";
import NewTransaction from "../components/Transaction/NewTransaction";
import { useState } from "react";
import { data } from "../TransactionData.js";
import { useEffect } from "react";

function TransactionTracker() {
  const [Transaction, SetTransaction] = useState(data);
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });
  let AmountTableData = new Array([]);

function checkSize(){
  setSize(window.innerWidth);
}

  function onNewTransactionAdded(newTransaction) {
    const newData = [newTransaction, ...Transaction];
    SetTransaction(newData);
  }

  function onDeleteHandler(ID) {
    let edited = Transaction.filter((transaction) => transaction.id !== ID);
    SetTransaction(edited);
  }

  function loadTableData(transaction) {
    let ammountTable = new Map([
      ["Eating Out", 0],
      ["Entertainment", 0],
      ["Gas", 0],
      ["Groceries", 0],
      ["Home", 0],
      ["Internet", 0],
    ]);

    for (let i = 0; i < transaction.length; i++) {
      const oldAmount = ammountTable.get(transaction[i].type);
      const newAmount = oldAmount + transaction[i].amount;
      ammountTable.set(transaction[i].type, newAmount);
    }

    const ammountKeys = Array.from(ammountTable.keys());
    const ammountValues = Array.from(ammountTable.values());
    const newAmountTable = new Array([]);

    for (let i = 0; i < ammountKeys.length; i++) {
      let dataObject = { type: ammountKeys[i], amount: ammountValues[i] };
      newAmountTable.unshift(dataObject);
    }
    AmountTableData = newAmountTable;
  }

  return (
    <section>
      <section className={classes.about}>
        <h1 className={classes.centerpage}>Transaction Tracker</h1>
      </section>

      <div className={classes.centerpage}>
        {loadTableData(Transaction)}
        <BarCharts size={size} data={AmountTableData} />
      </div>
      <div className={classes.forms}>
        <Card>
          <NewTransaction onSubmit={onNewTransactionAdded} />
        </Card>
      </div>
      <h1 className={classes.centerpage}>Transactions</h1>

      <div className={classes.centerpage}>
      {size<700 ? <TransactionItem data={Transaction} onDelete={onDeleteHandler} /> : <TransactionTable data={Transaction} onDelete={onDeleteHandler}/> }
      </div>
     
    </section>
  );
}

export default TransactionTracker;
