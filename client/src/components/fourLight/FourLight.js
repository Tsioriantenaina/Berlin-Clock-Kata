import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import { splitColor } from '../../utils/functionUtils';
import './FourLight.css';

const FourLight = ({fiveHours, singleHours, singleMinutes}) => {
  const {fiveHoursRow, singleHoursRow, singleMinutesRow} = useContext(ClockContext);
  let fiveHoursT = [];

  if(fiveHours) splitColor(fiveHoursRow, fiveHoursT);
  if(singleHours) splitColor(singleHoursRow, fiveHoursT);
  if(singleMinutes) splitColor(singleMinutesRow, fiveHoursT);

  let lights = fiveHoursT.map((color, index) => {
    return <span key={index} style={{backgroundColor: (color == "R" || color == "Y") ? "#ff8245" : null}}></span>
  });

  return (
    <div className='fourLight'>
        {lights}
    </div>
  )
}

export default FourLight;