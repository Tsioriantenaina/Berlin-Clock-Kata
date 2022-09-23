import { useState } from 'react';
import './App.css';
import { axiosConfig } from './axiosConfig';
import { ClockContext } from './ClockContext';
import BerlinToDigital from './components/BerlinToDigital/BerlinToDigital';
import DigitalToBerlin from './components/digitalToBerlin/DigitalToBerlin';



function App() {
  /**
   * All State
   */
  const [second , setSecond] = useState("");
  const [fiveHoursRow , setFiveHoursRow] = useState("OOOO");
  const [singleHoursRow, setSingleHoursRow] = useState("OOOO");
  const [fiveMinuteRow, setFiveMinuteRow] = useState("OOOOOOOOOOO");
  const [singleMinutesRow, setSingleMinutesRow] = useState("OOOO");
  const [time, setTime] = useState({hour: "00", minute: "00", second: "00"});
  const [secondActivate , setSecondActivate] = useState("0");
  const [fiveHoursActivate , setFiveHoursActivate] = useState("");
  const [singleHoursActivate , setSingleHoursActivate] = useState("");
  const [fiveMinuteActivate , setFiveMinuteActivate] = useState("");
  const [singleMinuteActivate , setSingleMinuteActivate] = useState("");


  /**
   * @function getInput Get value in input by key (name) and value. Set this key: value in state
   * @param {string} value the data value in input
   * @param {string} name data attribute name in input
   * 
   */
  const getInput = (value, name) =>  {
    const data = {[name]: value}
    setTime({...time, ...data});
  }

  /**
   * @function handleSubmit Handle converted submit, Fetch an API and set the response in the state
   * @param {Event} e 
   * @return void
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post('/api/timetoberlin', time);
      const data = response.data;
      setSecond(data.second);
      setFiveHoursRow(data.fiveHoursRow);
      setSingleHoursRow(data.singleHoursRow);
      setFiveMinuteRow(data.fiveMinuteRow);
      setSingleMinutesRow(data.singleMinutesRow);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClockClick = (e, index, isDtoB, row) => {
    if(row === 'second'){
      index++;
      setSecondActivate(index);
    }

    if(row === 'fiveHours'){setFiveHoursActivate(index)}
    if(row === 'singleHours'){setSingleHoursActivate(index)}
    if(row === 'fiveMinute') {setFiveMinuteActivate(index)}
    if(row === 'singleMinutes'){setSingleMinuteActivate(index)}
    
    console.log('index =>', index)
  }

  return (
    <ClockContext.Provider value={{second, fiveHoursRow, singleHoursRow, fiveMinuteRow, singleMinutesRow, time, getInput, handleSubmit, handleClockClick, fiveMinuteActivate, secondActivate, fiveHoursActivate, singleHoursActivate, singleMinuteActivate}}>
      <div className='main'>
        <DigitalToBerlin isDigitalToBerlin/>
        <BerlinToDigital isBerlinToDigital/>
      </div>
    </ClockContext.Provider>
  );
}

export default App;
