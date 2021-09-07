import React from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import "./Main.css";

function Main() {
  const expenseList = [
    { id: 1, name: "Blouse", price: "24", date: new Date(2021,5,11) },
    { id: 2, name: "Nail Polish", price: "45", date:  new Date(2021,4,11)  },
    { id: 3, name: "Pants", price: "54", date:  new Date(2021,4,11) },
  ];
  return (
    <div className="main">
      <NewExpenseForm/>
      {expenseList.map((el) => (
        <ExpenseCard key={el.id}
          name={el.name}
          price={el.price}
          date={el.date}
        ></ExpenseCard>
      ))}
    </div>
  );
}

export default Main;
