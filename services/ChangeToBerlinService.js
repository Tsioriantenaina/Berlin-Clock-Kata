
/**
 * 
 * @param {Number} time time to convert
 * @param {boolean} isSingle true if we check the single row
 * @param {string} color Color to returned
 * @returns {string} string value equvallent of the time entered
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmail.com>
 */
const changeTime = (time, isSingle, color) => {
    let result= "";
    if(time == NaN) return;
    let lampOn = isSingle ? Math.floor(time % 5) : Math.floor(time / 5);
    for(let i=0; i < 4; i++) {
        if(lampOn > i){
            result = result + color;
        } else {
            result = result + "O";
        }
    }
    return result;
}

/**
 * Change the eleven five minute 
 * @param {Number} time minute to change
 * @returns {string} the string equivalent of the minut entered
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmail.com>
 */
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

/**
 * Change Second row
 * @param {string} second second to convert
 * @returns {string} Berlin clock second row
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmain.com>
 */
const secondLightRow =  (second) => {
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

/**
 * Change the five hours row
 * @param {string} hours hours to convert
 * @returns {string} Berlin clock five hours row
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmain.com>
 */
const fiveHoursRow = (hours) => {
    let result = "";
    let intHours = Number(hours);
    return changeTime(intHours, false, "R");
}

/**
 * Change the Hours for second row
 * @param {string} hours hours to convert
 * @returns {string} Berlin clock single hour row
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmain.com>
 */
const singleHoursRow = (hours) => {
    let intHours = Number(hours);
    return changeTime(intHours, true, "R");
}

/**
 * Change Single minutes row
 * @param {string} minutes minute to convert
 * @returns {string} berlin clock single minutes Row value
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmain.com>
 */
const singleMinutesRow = (minutes) => {
    let intMinute = Number(minutes);
    return changeTime(intMinute, true, "Y");
}

/**
 * Change Five minutes row 
 * @param {string} minutes minutes to convert
 * @returns {string} Berlin clock five minutes row value
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmain.com>
 */
const fiveMinutesRow = (minutes) => {
    let intMinute = Number(minutes);
    return changeTimeToElevenString(intMinute);
}

/**
 * Change Entire time 
 * @param {string} time time to convert
 * @returns {string} Berlin clock complet time change returned
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmain.com>
 */
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