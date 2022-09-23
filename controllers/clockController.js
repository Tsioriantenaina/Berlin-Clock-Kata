const {
    secondLightRow, 
    fiveHoursRow, 
    singleHoursRow,
    singleMinutesRow,
    fiveMinutesRow,
    entireBerlinClock
} = require('../services/ChangeToBerlinService');
const { requestInputValidation } = require('../services/validationServices');

clockController = {
    postTime: (req, res) => {
        const {hour, minute, second } = req.body;
        const error = requestInputValidation(hour, minute, second);
        if(error.length > 0) {
            res.status(404).json(error);
        }
        const fullTime = hour + ':' + minute + ':' + second;
        const brelinClock = {
            second : secondLightRow(second),
            fiveHoursRow: fiveHoursRow(hour),
            singleHoursRow: singleHoursRow(hour),
            fiveMinuteRow: fiveMinutesRow(minute),
            singleMinutesRow: singleMinutesRow(minute),
            entireBerlinClock: entireBerlinClock(fullTime)
        }

        res.status(200).json(brelinClock);
    },
    postBerlinTime: (req, res) => {
        res.status(200).json({message: 'COOL COOL'});
    }
}

module.exports = clockController;