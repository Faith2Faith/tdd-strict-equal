const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual= require('../calculation') 

describe ( 'calculation', () =>{
    describe ('strictEqual' , () =>{
        it('produces true when given two parameters of same type and value  ', () => {

            const result = strictEqual (5,5)

            expect(result).to.equal(true)

        
        })

        it('produces false when given two parameters of same type and different value', () => {

            const result = strictEqual (5,6)

            expect(result).to.equal(false)

        
        })

        it('produces false when given two parameters of different type and different value', () => {

            const result = strictEqual (5,'x')

            expect(result).to.equal(false)

        
        })


        it('produces false when given two parameters of different type and same value', () => {

            const result = strictEqual (6,5)

            expect(result).to.equal(false)

        
        })


    })

})