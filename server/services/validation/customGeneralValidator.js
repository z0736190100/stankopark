const Validator = require("validator");
const isEmpty = require("./is-empty");
const config = require("./userValidationConfig");

module.exports = function validateRegistrationData(data) {

// parameters mapped to methods we will use for validation
    const methods = {
        length: Validator.isLength,
        empty: isEmpty,
        confirmation: Validator.equals,
        email: Validator.isEmail
    };
// errors of validation
    let errors = [];

// config got to contain description for each piece of data we want to validate
  config.forEach(item => {

        if (data[item.param] === undefined) return;
        // loop to perform validation for each constraint of exact item
        item.constraints.forEach(constraint => {
            let parameterName = item.param;
            // setting method according to type of constraint we want to validate
            let checker = methods[constraint.type];
            // fetching from data we want to validate
            let dataParameter = data[item.param];
            // constraints we will pass to validation method
            let constraintValues = constraint.values;
            if (constraint.type !== "confirmation") {
                if (!checker(dataParameter, {...constraintValues})) {
                    errors.push({
                        parameter: parameterName,
                        [constraint.type]: constraint.errorMessage
                    })
                }
            }
            if (constraint.type === "confirmation") {
                if (!checker(constraintValues.first(data.password), constraintValues.second(data.password2)))
                    errors.push({
                        parameter: parameterName,
                        [constraint.type]: constraint.errorMessage
                    });
            }

        });
    });

    return {
        errors,
        isValid: errors.length === 0
    }
};