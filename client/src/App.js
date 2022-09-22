import { useEffect, useState } from 'react';
import './App.css';
import FourLight from './components/fourLight/FourLight';
import FiveMinutes from './components/fiveMinutes/FiveMinutes';
import Second from './components/second/Second';
// import SingleHours from './components/singleHours/SingleHours';
// import SingleMinutes from './components/singleMinutes/SingleMinutes';
import TimeInput from './components/timeInput/TimeInput';
import { axiosConfig } from './axiosConfig';
import { ClockContext } from './ClockContext';



function App() {
  const [second , setSecond] = useState("");
  const [fiveHoursRow , setFiveHoursRow] = useState("OOOO");
  const [singleHoursRow, setSingleHoursRow] = useState("OOOO");
  const [fiveMinuteRow, setFiveMinuteRow] = useState("OOOOOOOOOOO");
  const [singleMinutesRow, setSingleMinutesRow] = useState("OOOO");
  const [time, setTime] = useState({hour: "00", minute: "00", second: "00"});

  const getInput = (value, name) =>  {
    const data = {[name]: value}
    setTime({...time, ...data});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post('/api/clock', time);
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

  return (
    <ClockContext.Provider value={{second, fiveHoursRow, singleHoursRow, fiveMinuteRow, singleMinutesRow, time, getInput, handleSubmit}}>
      <div className="App">
        <h1>Berlin Clock Converter</h1>
          <TimeInput />
          <div className='berlinClock'>
            <Second/>
            <FourLight fiveHours/>
            <FourLight singleHours/>
            <FiveMinutes />
            <FourLight singleMinutes/>
          </div>
      </div>
    </ClockContext.Provider>
  );
}

export default App;
