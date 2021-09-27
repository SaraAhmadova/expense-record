import React, { useState } from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import FilterComponent from "../FilterComponent/FilterComponent";
import Chart from "../Chart/Chart";
import "./Main.css";

function Main() {
  const [expenseList, setExpenseList] = useState([
    { id: 1, title: "Blouse", price: 24, date: new Date(2021, 5, 11) },
    { id: 6, title: "Jacket", price: 212, date: new Date(2021, 5, 11) },
    { id: 2, title: "Shampoo", price: 45, date: new Date(2019, 8, 11) },
    { id: 3, title: "Jeans", price: 45, date: new Date(2020, 4, 16) },
    { id: 4, title: "Nail Polish", price: 45, date: new Date(2021, 4, 11) },
    { id: 5, title: "Pants", price: 54, date: new Date(2021, 4, 11) },
  ]);

  const [filteredExpenses, setFilteredExpenses] = useState(expenseList);
  const filterFunction = (list) => {
    setFilteredExpenses(list);
  };

  const onSaveExpense = (newExpense) => {
    const expense = {
      ...newExpense,
      id: expenseList.length + 1,
      date: new Date(newExpense.date),
    };
    setExpenseList((prevExpenses) => [expense, ...prevExpenses]);
    setFilteredExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="main w-60">
      <NewExpenseForm onSaveExpense={onSaveExpense} />

      <div className="cards main">
        <FilterComponent onFilter={expenseList} filteredData={filterFunction} />
        <Chart expenses = {filteredExpenses}/>
        {filteredExpenses.length === 0 ? (
          <p className="text-mute">No data found!</p>
        ) : (
          filteredExpenses.map((el) => (
            <ExpenseCard
              key={el.id}
              title={el.title}
              date={el.date}
              price={el.price}
            ></ExpenseCard>
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
