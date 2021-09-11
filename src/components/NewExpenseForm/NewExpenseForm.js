import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
    const [FormInfo,setFormInfo] = useState({
        title: "",
        date: "",
        amount: ""
    });
 
    function changeTitleHandler(e) { 
        setFormInfo({
            ...FormInfo,
            title: e.currentTarget.value
        })
     }
    function changeDateHandler(e) { 
        setFormInfo({
            ...FormInfo,
            date: e.currentTarget.value
        })
     }
    function changeAmountHandler(e) { 
        setFormInfo({
            ...FormInfo,
            amount: e.currentTarget.value
        })
     }

     function saveRecordHandler(e) { 
         e.preventDefault();
         setFormInfo({
             title: "",
             date: "",
             amount: ""
         });
        
        props.onSaveExpense(FormInfo);
      }

  return (
      <form className="addForm" onSubmit={saveRecordHandler}>
        <input placeholder="Title" type="text" value={FormInfo.title} onChange={changeTitleHandler}></input>
        <input type="date" value={FormInfo.date} onChange={changeDateHandler}></input>
        <input placeholder="Amount" type="number" value={FormInfo.amount} min="0.1" step="0.1" onChange={changeAmountHandler}></input>
        <button type="submit">Add</button>
      </form>
  );
};

export default NewExpenseForm;
