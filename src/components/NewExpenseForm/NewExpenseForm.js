import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = () => {
    const [FormInfo,setFormInfo] = useState({
        title: "",
        date: "",
        amount: ""
    })
    function changeTitleHandler(e) { 
        setFormInfo({
            ...FormInfo,
            title: e.currentTarget.value
        })
        console.log(FormInfo.title);
     }

  return (
      <form className="addForm">
        <input placeholder="Title" type="text" onChange={changeTitleHandler}></input>
        <input type="date"></input>
        <input placeholder="Amount" type="number" min="0.1" step="0.1"></input>
        <button type="submit">Add</button>
      </form>
  );
};

export default NewExpenseForm;
