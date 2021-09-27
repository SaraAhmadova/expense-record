import React from 'react'
import "./FilterComponent.css";

const FilterComponent = (props) => {

    const onSelect = (e)=>{
        if(e.target.value !== "all") 
        props.filteredData(props.onFilter.filter(el => el.date.getFullYear().toString() === e.target.value));
        else props.filteredData(props.onFilter);
    }
    return (
        <div className="filter-container">
                <h4 className="title">Filter by Year</h4>
                <select defaultValue="all" onChange={onSelect} >
                    <option value="all">All expenses</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
        </div>
    )
}

export default FilterComponent
