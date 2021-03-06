import React from 'react';
import '../../Style/index.css';

const SelectBox = (props) =>{
  return (
    <div className="SelectBox">
      <label>{props.cont}&nbsp;&nbsp;&nbsp;&nbsp;
        <select
          value={0}
          onChange={e => props.changeSelect(e)}
          name={props.name} >
          {props.choices}
        </select>
      </label>
    </div>
  )
}

export default SelectBox;
