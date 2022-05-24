const copy = require('./../tasks/copy');

function testCopy() {
    const test = {
        test: {
            f: {
                g: {
                    e: 1,
                    g: 3,
                    o: 0
                }
            },
            g: 2
        },
        h: {
            f: 5
        }
    };

    console.log('old before: ', JSON.stringify(test))
    const newTest = copy(test, ['test.f.g', 'test.f.g.t', 'test.f.g.o'])
    newTest.test.f.g.e = 5

    console.log('old: ', JSON.stringify(test))
    console.log('new: ', JSON.stringify(newTest))
}

module.exports = testCopy;