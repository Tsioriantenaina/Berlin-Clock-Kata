import React, { useContext } from 'react';
import { ClockContext } from '../../ClockContext';
import { splitColor } from '../../utils/functionUtils';
import './FourLight.css';

const FourLight = ({fiveHours, singleHours, singleMinutes, isDigitalToBerlin}) => {
	const {
			fiveHoursRow, 
			singleHoursRow, 
			singleMinutesRow, 
			handleClockClick, 
			fiveHoursActivate, 
			singleHoursActivate,
			singleMinuteActivate
			} = useContext(ClockContext);

	/**
	 * Split the string color and push it to fiveHoursT Array
	 */
	let fiveHoursT = [];
	if(fiveHours) splitColor(fiveHoursRow, fiveHoursT, 'fiveHours');
	if(singleHours) splitColor(singleHoursRow, fiveHoursT, 'singleHours');
	if(singleMinutes) splitColor(singleMinutesRow, fiveHoursT, 'singleMinutes');

	//Define the classes for the container
	const classes = fiveHours ? `fourLight fiveHours` : singleHours ? `fourLight singleHours` : singleMinutes ? `fourLight singleMinutes` : null;
	const isDigitaToBerliClass = isDigitalToBerlin ? 'digitalToBerlin' : 'berlinToDigital';

	//Check the row that we should activate and update
	const row = fiveHours ? `fiveHours` : singleHours ? `singleHours` : singleMinutes ? `singleMinutes` : null;

	//Each fiveHoutsT array and activate the corespondant color
	let lights = fiveHoursT.map((color, index) => {
										let content = "";
										let isActive = "";
										if(row === 'fiveHours'){
											isActive = (Number(index) < Number(fiveHoursActivate) + 1) ? 'active' : "";
										}
										if(row === 'singleHours') {
											isActive = (Number(index) < Number(singleHoursActivate) + 1) ? 'active' : "";
										}
										if(row === 'singleMinutes') {
											isActive = (Number(index) < Number(singleMinuteActivate) + 1) ? 'active' : "";
										}
										if(isDigitalToBerlin) {
											content = <span key={index} 
																			name={fiveHours ? `fiveHours` : singleHours ? `singleHours` : singleMinutes ? `singleMinutes` : null}
																			style={{backgroundColor: (color.lightTable === "R" || color.lightTable === "Y") ? "#ff8245" : null}}
																></span>
										} else {
											content = <span className={isActive}
																			key={index} 
																			name={fiveHours ? `fiveHours` : singleHours ? `singleHours` : singleMinutes ? `singleMinutes` : null}
																			onClick={(e) => handleClockClick(e, index, isDigitalToBerlin, row )}
																></span>
										}

										return content; 
								});

	return (
		<div className={classes + ' '+ isDigitaToBerliClass}>
			{lights}
		</div>
	)
}

export default FourLight;