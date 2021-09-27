import React from 'react';
import ChartItem from "../Chart/ChartItem";
import "./Chart.css";

const Chart = (props) => {
    let chartData = [
        {month: "Jan", value: 0},
        {month: "Feb", value: 0},
        {month: "Mar", value: 0},
        {month: "Apr", value: 0},
        {month: "May", value: 0},
        {month: "Jun", value: 0},
        {month: "Jul", value: 0},
        {month: "Aug", value: 0},
        {month: "Sep", value: 0},
        {month: "Oct", value: 0},
        {month: "Nov", value: 0},
        {month: "Dec", value: 0}
    ];

    props.expenses.forEach(el => {
        let index = el.date.getMonth();
        chartData[index].value += el.price;
    });
    
    let max = Math.max(...chartData.map(e=>e.value));

    return (
        <div className="chart-box">
            {chartData.map((data,i) => (
                <ChartItem key={i} month={data.month} height={props.expenses.length===0? 0 : 100*data.value/max}/>
            ))}
        </div>
    )
}

export default Chart
