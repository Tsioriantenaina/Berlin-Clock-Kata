import React from 'react'
import FiveMinutes from '../fiveMinutes/FiveMinutes';
import FourLight from '../fourLightList/FourLightList';
import Second from '../second/Second';
import TimeInput from '../timeInput/TimeInput';

const DigitalToBerlin = ({isBerlinToDigital, isDigitalToBerlin}) => {
  return (
    <div className="App">
        <div className='container'>
            <h1>Converting Digital Time to Berlin Time</h1>
            <TimeInput isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
            <div className='berlinClock'>
                <Second isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight fiveHours isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight singleHours isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FiveMinutes isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
                <FourLight singleMinutes isBerlinToDigital={isBerlinToDigital} isDigitalToBerlin={isDigitalToBerlin}/>
            </div>
        </div>
    </div>
  )
}

export default DigitalToBerlin;