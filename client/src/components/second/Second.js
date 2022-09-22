import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import './Second.css';

const Second = () => {
    const { second }= useContext(ClockContext);
  return (
    <div className='second' style={{backgroundColor: (second == "Y") ?  "yellow" : "#837479"}}></div>
  )
}

export default Second;