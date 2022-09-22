import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import { splitColor } from '../../utils/functionUtils';
import './FiveMinutes.css';

const FiveMinutes = () => {
  const {fiveMinuteRow} = useContext(ClockContext);
  let lightTable = [];
  splitColor(fiveMinuteRow, lightTable)

  let lights = lightTable.map((color, index) => {
    return <span key={index} style={{backgroundColor: (color == "Y") ? "yellow" : (color == "R") ? "red" : null}}></span>
  })
  return (
    <div className='fiveMinute fourLight'>
        {lights}
    </div>
  )
}

export default FiveMinutes