
const changeTime = (time, isSingle, color) => {
    let result= "";
    if(time == NaN) return;
    let lampOne = isSingle ? Math.floor(time % 5) : Math.floor(time / 5);
    for(let i=0; i < 4; i++) {
        if(lampOne > i){
            result = result + color;
        } else {
            result = result + "O";
        }
    }
    return result;
}

const changeTimeToElevenString = (time) => {
    let result= "";
    if(time == NaN) return;
    let lampOn  = Math.floor(time / 5);

    for(let i=1; i <= lampOn; i++) {
        result += (i % 3 == 0 ) ? "R" : "Y";
    }

    for(let i = lampOn; i < 11; i++) {
        result += "O";
    }
    
    return result;
}


const secondLightRow =  (second) => {
    //To do check if second is > 59
    let result = "";
    const intSecond = Number(second);
    if(intSecond == NaN ) return
    if(intSecond == 0 || (intSecond % 2 == 0)) {
        result = "Y";
    } else {
        result = "O";
    }
    return result;
}

const fiveHoursRow = (hours) => {
    let result = "";
    let intHours = Number(hours);
    return changeTime(intHours, false, "R");
}

/**
 * Change the Hours for second row
 * @param {string} hours 
 * @returns {string}
 */
const singleHoursRow = (hours) => {
    let intHours = Number(hours);
    return changeTime(intHours, true, "R");
}

const singleMinutesRow = (minutes) => {
    let intMinute = Number(minutes);
    return changeTime(intMinute, true, "Y");
}

const fiveMinutesRow = (minutes) => {
    let intMinute = Number(minutes);
    return changeTimeToElevenString(intMinute);
}

const entireBerlinClock = (time) => {
    const timeTable = time.split(':');
    return secondLightRow(timeTable[2]) + fiveHoursRow(timeTable[0]) + singleHoursRow(timeTable[0]) + 
            fiveMinutesRow(timeTable[1]) + singleMinutesRow(timeTable[1]);
}




module.exports = {
    secondLightRow,
    fiveHoursRow,
    singleHoursRow,
    singleMinutesRow,
    fiveMinutesRow,
    entireBerlinClock
}