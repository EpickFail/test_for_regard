const booleanToInt = require('./../tasks/boolean-to-int');

function testBooleanToInt() {
    const cases = [
        {
            test: 'qwerty',
            result: 'qwerty'
        },
        {
            test: 1,
            result: 1
        },
        {
            test: false,
            result: 0
        },
        {
            test: true,
            result: 1
        },
        {
            test: [1, 'qwerty', false],
            result: [1, 'qwerty', 0]
        },
        {
            test: [1, 'qwerty', { a: true }],
            result: [1, 'qwerty', { a: 1 }]
        },
        {
            test: { a: { b: true }, c: false, d: 'qwerty' },
            result: { a: { b: 1 }, c: 0, d: 'qwerty' }
        },
        {
            test: {
                date1: {
                    date1_1: 1,
                    date1_2: [
                        {
                            date2_1: false,
                            date2_2: 'str1',
                        },
                        {
                            date2_3: true,
                            date2_4: 'str2',
                        },
                        {
                            date2_5: false,
                            date2_6: 'str1',
                        },
                    ],
                    date1_3: false,
                    date1_4: {
                        date3_1: true,
                        date3_2: false,
                        date3_3: 'str1',
                        date3_4: true,
                        date3_4: 123,
                    },
                    date1_5: 'true',
                }
            },
            result: {
                date1: {
                    date1_1: 1,
                    date1_2: [
                        {
                            date2_1: 0,
                            date2_2: 'str1',
                        },
                        {
                            date2_3: 1,
                            date2_4: 'str2',
                        },
                        {
                            date2_5: 0,
                            date2_6: 'str1',
                        },
                    ],
                    date1_3: 0,
                    date1_4: {
                        date3_1: 1,
                        date3_2: 0,
                        date3_3: 'str1',
                        date3_4: 1,
                        date3_4: 123,
                    },
                    date1_5: 'true',
                }
            }
        },
    ];

    for (const testCase of cases) {
        const test = booleanToInt(testCase.test)
        console.log(JSON.stringify(test));
        console.log(JSON.stringify(testCase.result));
        console.log(JSON.stringify(test) === JSON.stringify(testCase.result));
        console.log('=================');
    }
}

module.exports = testBooleanToInt;