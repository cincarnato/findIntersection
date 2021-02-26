const findIntersection = require('./index.js')
const assert = require('assert')

describe('findIntersection Challenge', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1', () => {

        let result = findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])
        let expected = "1,4,13"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2', () => {

        let result = findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])
        let expected = "1,9,10"

        assert.strictEqual(result,expected)
    })
    /**
     * TEST DESCRIPTION
     */

    it('Test3', () => {

        let result = findIntersection(["1, 3, 5, 7, 9", "2, 4, 6, 8"])
        let expected = "false"

        assert.strictEqual(result,expected)
    })
})
