import React from 'react'
import "./DateItem.css"

function DateItem(props) {
    return (
        <div className="date-item">
            <div className="month">{props.date.toLocaleString("en-US", {month: "short"})}</div>
            <div className="year">{props.date.getFullYear()}</div>
            <div className="day">{props.date.toLocaleString("en-US", {day: "2-digit"})}</div>
        </div>
    )
}

export default DateItem
