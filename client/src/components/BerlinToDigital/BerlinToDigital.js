import React from 'react';
import FiveMinutes from '../fiveMinutes/FiveMinutes';
import FourLight from '../fourLightList/FourLightList';
import Second from '../second/Second';
import TimeInput from '../timeInput/TimeInput';
import './BerlinToGigital.css';

const BerlinToDigital = ({isBerlinToDigital, isDigitalToBerlin}) => {
  return (
    <div className='App'>
        <div className='container'>
            <h1>Converting Berlin Time to Digital Time</h1>
            
            <div className='berlinClock toDigital' style={{marginBottom: "20px"}}>
                <Second isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight fiveHours isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight singleHours isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FiveMinutes isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight singleMinutes isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
            </div>
            <button className='btn-primary'>CONVERT TO DIGITAL</button>
            <TimeInput isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
        </div>
    </div>
  )
}

export default BerlinToDigital;