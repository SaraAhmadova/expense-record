import React, {useState} from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import "./Main.css";

function Main() {
  const [expenseList, setExpenseList] = useState([
    { id: 1, title: "Blouse", price: "24", date: new Date(2021,5,11) },
    { id: 2, title: "Nail Polish", price: "45", date:  new Date(2021,4,11)  },
    { id: 3, title: "Pants", price: "54", date:  new Date(2021,4,11) },
  ]) ;
  const onSaveExpense = expense => {
    console.log(expense,"main.jss");
    // expense.id = 5;
    const expenseItem = {
      ...expense,
      id: 5
    }

    setExpenseList(expenseList.push(expenseItem))
    console.log(expenseItem);

  }
  return (
    <div className="main w-60">
      <NewExpenseForm onSaveExpense = {onSaveExpense}/>
      <div className="cards main">
      {expenseList.map((el) => (
        <ExpenseCard key={el.id} title = {el.title} date={el.date} amount = {el.price}></ExpenseCard>
      ))}
      </div>
    </div>
  );
}

export default Main;
