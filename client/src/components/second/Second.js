import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import './Second.css';

const Second = ({isDigitalToBerlin}) => {
    const { second, handleClockClick, secondActivate }= useContext(ClockContext);
    const isActivate = ((Number(secondActivate) % 2 === 0) || (Number(secondActivate) === 0))  ? 'active' : "";
    const classes = isDigitalToBerlin ? 'second digitalToBerlin' : 'second berlinToDigital';
    const row = 'second';

    const content = isDigitalToBerlin ? (
                      <div className={classes}
                      style={{backgroundColor: (second === "Y") ?  "yellow" : "#837479"}}
                      onClick={(e) => handleClockClick(e, secondActivate, isDigitalToBerlin, row)}
                      name={secondActivate}></div>
                    ) :
                    <div className={classes + ' ' + isActivate}
                      onClick={(e) => handleClockClick(e, secondActivate, isDigitalToBerlin, row)}
                      name={secondActivate}
                    ></div>
  return content;
}

export default Second;