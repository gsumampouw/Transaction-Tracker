import { useRef, useState } from "react";
import Classes from './NewTransaction.module.css';

function NewTransaction(props) {
  const [isValid,setIsValid] = useState(true);

  const dateInputRef = useRef();
  const typeInputRef = useRef();
  const descriptionInputRef = useRef();
  const amountInputRef = useRef();
  const cardInputRef = useRef();

  function onSubmitHandler(event){

    const date = new Date(dateInputRef.current.value);
    const Year = date.getFullYear();
    const Month = date.getMonth();
    const Day = date.getDate()+1;

      event.preventDefault();
      const uniqueId= Math.random().toString(16).slice(5);
      const newDate = new Date(Year,Month,Day);
      const newType = typeInputRef.current.value;
      const newDescription = descriptionInputRef.current.value;
      const newAmount = parseFloat(amountInputRef.current.value);
      const newCard = cardInputRef.current.value;
      const newTransaction = {
        id: uniqueId,
        date: newDate,
        type: newType,
        description: newDescription,
        amount: newAmount,
        card: newCard,
      };

      props.onSubmit(newTransaction);

  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form className={Classes.form} onSubmit={onSubmitHandler}>
        <div className={Classes.inputs}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" ref={dateInputRef}></input>
        </div>
        <div className={Classes.inputs}>
          <label htmlFor="type">Type</label>
          <select className ={Classes.select} id="type" ref={typeInputRef}>
            <option>Eating Out</option>
                <option>Entertainment</option>
                <option>Gas</option>
                <option>Groceries</option>
                <option>Home</option>
                <option>Internet</option>
            </select>
        </div>
        <div className={Classes.inputs}>
            <label htmlFor="description">Description</label>
            <input type= "text" id="description" placeholder="Netflix" ref={descriptionInputRef}></input>
        </div>
        <div className={Classes.inputs}>
            <label htmlFor="amount">Amount ($)</label>
            <input type="text" id="amount" placeholder="1000.00"  ref={amountInputRef}></input>
        </div>
        <div className={Classes.inputs}>
            <label htmlFor="card">Card</label>
            <input type="text" id="card" placeholder="Visa"ref={cardInputRef}></input>
        </div >
        <div className={Classes.addButton}>
        <button className={Classes.button}>Add</button>
        </div>
        
      </form>
    </div>
  );
}

export default NewTransaction;
