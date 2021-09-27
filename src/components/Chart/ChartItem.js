import React from "react";
import "./ChartItem.css";

const ChartItem = (props) => {
  return (
    <div className="chart-item">
      <div className="chart-item__month-progress">
        <span style={{ height: props.height + "%" }}></span>
      </div>
      <span>{props.month}</span>
    </div>
  );
};

export default ChartItem;
