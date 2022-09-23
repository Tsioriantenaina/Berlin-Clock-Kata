import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import { splitColor } from '../../utils/functionUtils';
import './FiveMinutes.css';

const FiveMinutes = ({isDigitalToBerlin}) => {
  const {fiveMinuteRow, handleClockClick, fiveMinuteActivate} = useContext(ClockContext);
  let lightTable = [];
  splitColor(fiveMinuteRow, lightTable, 'fiveMinuteRow')
  const row = 'fiveMinute';

  // console.log('activate =>', fiveMinuteActivate)
  
  let lights = lightTable.map((color, index) => {
                  const isYellow = ((index*1 + 1) % 3 !== 0 || index*1 === 0) ? "yellow " : "red ";
                  const isActivate = (Number(index) <= Number(fiveMinuteActivate)) ? 'active' : "";
                  return  <span 
                            className={ isYellow +  isActivate} 
                            key={index} 
                            id={index}
                            style={isDigitalToBerlin ? {backgroundColor: (color.lightTable === "Y") ? "yellow" : (color.lightTable === "R") ? "red" : null} : null}
                            onClick={(e) => handleClockClick(e, index, isDigitalToBerlin, row)}
                          ></span>
              });


  return (
    <div className='fiveMinute fourLight'>
        {lights}
    </div>
  )
}

export default FiveMinutes