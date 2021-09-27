import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [FormInfo, setFormInfo] = useState({
    title: "",
    date: "",
    price: "",
  });

  function changeTitleHandler(e) {
    setFormInfo({
      ...FormInfo,
      title: e.currentTarget.value,
    });
  }
  function changeDateHandler(e) {
    setFormInfo({
      ...FormInfo,
      date: e.currentTarget.value,
    });
  }
  function changeAmountHandler(e) {
    setFormInfo({
      ...FormInfo,
      price: parseFloat(e.currentTarget.value),
    });
  }

  function saveRecordHandler(e) {
    e.preventDefault();
    props.onSaveExpense(FormInfo);

    setFormInfo({
      title: "",
      date: "",
      price: "",
    });
  }
  const [showForm, setShowForm] = useState(false);
  return (
    <form className="addForm" onSubmit={saveRecordHandler}>
      {showForm ? (
        <React.Fragment>
          <input
            placeholder="Title"
            type="text"
            value={FormInfo.title}
            onChange={changeTitleHandler}
            required
          />{" "}
          <input
            type="date"
            value={FormInfo.date}
            onChange={changeDateHandler}
            required
          />
          <input
            placeholder="Amount"
            type="number"
            value={FormInfo.price}
            min="0.1"
            step="0.01"
            onChange={changeAmountHandler}
            required
          />
          <button type="submit">Add</button>
        </React.Fragment>
      ) : (
        <button
          type="button"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add New Expense
        </button>
      )}
    </form>
  );
};

export default NewExpenseForm;
