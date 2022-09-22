import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import './TimeInput.css';

const TimeInput = () => {
    const { getInput, handleSubmit} = useContext(ClockContext);
  return (
    <div className='timeForm'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form-group'>
                <label>Enter your time:</label>
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
            </div>
            <input className='btn-primary' type="submit" name="" value="CONVERT" />
        </form>
    </div>
  )
}

export default TimeInput