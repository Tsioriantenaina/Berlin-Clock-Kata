import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import FiveMinutes from '../fiveMinutes/FiveMinutes';
import FourLight from '../fourLightList/FourLightList';
import Second from '../second/Second';
import TimeInput from '../timeInput/TimeInput';
import './BerlinToGigital.css';

const BerlinToDigital = ({isBerlinToDigital, isDigitalToBerlin}) => {
  const { handleResetClick } = useContext(ClockContext);
  return (
    <div className='App'>
        <div className='container'>
            <h1>Converting Berlin Time<br/> to Digital Time</h1>
            <button className='btn-primary' 
                style={{backgroundColor: 'red', borderColor: 'red'}} 
                onClick={handleResetClick}>RESET</button>
            <div className='berlinClock toDigital' style={{marginBottom: "20px"}}>
                <Second isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight fiveHours isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight singleHours isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FiveMinutes isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight singleMinutes isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
            </div>
            <TimeInput isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
        </div>
    </div>
  )
}

export default BerlinToDigital;