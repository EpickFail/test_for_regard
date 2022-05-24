const _ = require('lodash');

function booleanToInt(value) {
    if (value === null) {
        return null;
    }

    switch(typeof value) {
        case "boolean":
            return +value;
        case "string":
        case "number":
        case "undefined":
        case "function":
        case "bigint":
        case "symbol":
            return value;
        case "object":
            for (const key in value) {
                value[key] = booleanToInt(value[key])
            }
            return value;
    }
}

module.exports = booleanToInt;