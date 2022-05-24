const _ = require('lodash');

/**
 * @param obj Object
 * @param keys Array
 */
function copy(obj, keys) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }

    if (!keys || !Array.isArray(keys) || !keys.length) {
        return JSON.parse(JSON.stringify(obj));
    }
    const newObj = {};
    for (const key of keys) {
        let value = _.get(obj, key);
        if (value === undefined) {
            continue;
        }

        if (typeof value === 'object') {
            value = JSON.parse(JSON.stringify(value));
        }
        _.set(newObj, key, value);
    }

    return Object.freeze(newObj);
}

module.exports = copy;
