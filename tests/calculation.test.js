const describe = require('mocha').describe
const it = require(mocha).it
const expect = require(chai).expect
const strictEqual= require('../calculation') 

describe ( 'calculation', () =>{
    describe ('strictEqual' , () =>{
        it('produces true or false when types are same or values are equal ', () => {

            // create test data 
            const assert = require ('strictEqual')

            // call the function
            assert.strictEqual(10,10,true)
            assert.strictEqual(10,"10", false)


            // make assertion about what should be true
            expect(assert.strictEqual(10,10,true).to.equal(true))
            expect(assert.strictEqual(10,"10",false).to.equal(false))

        })

    })

})