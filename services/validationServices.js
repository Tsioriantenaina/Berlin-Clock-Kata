/**
 * @function specialCaracterTest Check if the data have a special character
 * @param {string} hour hour geting in req.body
 * @param {string} minute minute geting in req.body
 * @param {string} second second geting in req.body
 * @returns {boolean}
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmail.com>
 */
const specialCaracterTest = (hour, minute, second) => {
    const  format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const haveSpecialCaracter = format.test(hour + minute + second);
    return haveSpecialCaracter;
}

/**
 * @function requestInputValidation Validate the data retrived in the request
 * @param {string} hour hour geting in req.body
 * @param {string} minute minute geting in req.body
 * @param {string} second second geting in req.body
 * @returns {Array} Array off error message
 * @author Solo Tsioriantenaina RAZAFY <misangy.dev@gmail.com>
 */
const requestInputValidation = (hour, minute, second) => {
    let error = [];
    
    if( Number(hour) > 24 || Number(minute) > 59 || Number(second) > 59 ) {
        error.push('"Hour, minute, second" does not bigger than "24, 59, 59"');
    }

    const isHaveSpecialCharacter = specialCaracterTest(hour, minute, second);
    if(isHaveSpecialCharacter) {
        error.push('"Hour, minute, second" does not have a special character');
    }

    if(isNaN(hour) || isNaN(minute) || isNaN(second)) {
        error.push('"Hour, minute, second" must a letter 0 to 9');
    }

    return error;
}


module.exports = {
    requestInputValidation
};