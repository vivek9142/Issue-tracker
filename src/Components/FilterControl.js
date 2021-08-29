import React from 'react';

const FilterControl = (props) => {
    return (
        <>
        <label htmlFor={props.name}>
        
        <input type="checkbox" 
        name={props.name} 
        defaultChecked='checked' 
        onChange={(ev) => props.handleChange(props.name,ev.target.checked)}/>

        {props.label}

        </label>
        </>
    );
}

export default FilterControl;