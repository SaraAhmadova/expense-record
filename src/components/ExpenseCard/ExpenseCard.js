import React, {useState} from 'react';
import DateItem from '../DateItem/DateItem';
import "./ExpenseCard.css"

function ExpenseCard(props) {
    const [title, setTitle] = useState(props.title)

    const changeTitle= ()=>{
        setTitle("Updated");
        console.log(title);
    }
    return (
        <div className="expense-card" onClick={changeTitle}>
            <DateItem date={props.date}/>
            <div className="name">{title}</div>
            <div className="price">{props.price}$</div>
        </div>
    )
}

export default ExpenseCard
