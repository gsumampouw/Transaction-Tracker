
import classes from "../../pages/TransactionTracker.module.css";
import BarCharts from "./BarChart";
import TransactionTable from "./TransactionTable";
import FillterByType from "./FillterByType";
import { useState } from "react";

function TransactionDisplay(props){
    const [TypeSelected, SetTypeSelected] = useState("All");
    const [FilteredTransaction, SetFilteredTransaction] =
    useState(props.data);
    let AmountTableData = new Array();

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
        const newAmountTable = new Array();
    
        for (let i = 0; i < ammountKeys.length; i++) {
          let dataObject = { type: ammountKeys[i], amount: ammountValues[i] };
          newAmountTable.unshift(dataObject);
        }
        AmountTableData = newAmountTable;
    }

    function typeSelectedHandler(value) {
        SetTypeSelected(value);
        function filteredData(transaction) {
          return transaction.type === value;
        }
    
        if (value === "All") {
          SetFilteredTransaction(props.data);
        } else {
          SetFilteredTransaction(props.data.filter(filteredData));
        }
      }

        return(
            <div>
                <div className={classes.centerpage}>
            {loadTableData(FilteredTransaction)}
            <BarCharts data={AmountTableData} />
          </div>
          <div className={classes.centerpage}>
            <FillterByType onTypeSelected={typeSelectedHandler} />
          </div>
    
          <h1 className={classes.centerpage}>Transactions</h1>
    
          <div className={classes.centerpage}>
            <TransactionTable
              data={FilteredTransaction}
            />
          </div>

            </div>
            
        );

}

export default TransactionDisplay;