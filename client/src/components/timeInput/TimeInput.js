import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import './TimeInput.css';

const TimeInput = ({isDigitalToBerlin}) => {
    const { getInput, handleSubmit, secondActivate, fiveHoursActivate, singleHoursActivate, fiveMinuteActivate, singleMinuteActivate} = useContext(ClockContext);

    const button = isDigitalToBerlin ? <input className='btn-primary' type="submit" name="" value="CONVERT" /> : null;
    const label = isDigitalToBerlin ? <label>Enter your time:</label> : <label>The result is:</label>;

    const hoursValue = ((Number(fiveHoursActivate) + 1) * 5) + ((Number(singleHoursActivate) + 1));
    const minutesValue = ((Number(fiveMinuteActivate) + 1) * 5) + (Number(singleMinuteActivate) + 1);

    const digitalTime = isDigitalToBerlin ?
                            <div className='input'>
                                <input type="number" 
                                    id='hour' 
                                    name="hour" 
                                    placeholder='00' 
                                    min="00" max="24"
                                    onChange={(e) => getInput(e.target.value, e.target.name)} />
                                <strong>H</strong>
                                <input type="number" 
                                    name="minute" 
                                    placeholder='00' 
                                    min="00" max="59"
                                    onChange={(e) => getInput(e.target.value, e.target.name)}/>
                                <strong>Mn</strong>
                                <input type="number" 
                                    name="second"  
                                    placeholder='00' 
                                    min="00" max="59"
                                    onChange={(e) => getInput(e.target.value, e.target.name)}/>
                                <strong>S</strong>
                            </div>
                        : 
                        <div className='input'>
                            <input type="number" 
                                name="hour" 
                                placeholder='00' 
                                disabled
                                value={hoursValue < 10 ? "0"+hoursValue : hoursValue}
                            />
                            <strong>:</strong>
                            <input type="number" 
                                name="minute" 
                                placeholder='00'
                                disabled
                                value={minutesValue < 10 ? "0"+minutesValue : minutesValue}
                            />
                            <strong>:</strong>
                            <input type="number" 
                                name="second"  
                                placeholder='00'
                                disabled
                                value={secondActivate < 10 ? "0"+secondActivate : secondActivate}
                             />
                        </div>
  return (
    <div className='timeForm'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form-group'>
                {label}
                {digitalTime}
            </div>
            {button}
        </form>
    </div>
  )
}

export default TimeInput