import React from 'react';
import DateItem from '../DateItem/DateItem';
import "./ExpenseCard.css"

function ExpenseCard(props) {

    return (
        <div className="expense-card">
            <DateItem date={props.date}/>
            <div className="name">{props.title}</div>
            <div className="price">{props.price}$</div>
        </div>
    )
}

export default ExpenseCard
