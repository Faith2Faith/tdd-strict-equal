function strictEqual(val1, val2) {
    //returns true when the parameters are of the same value and type  
    if ((val1 == val2) && (typeof val1 == typeof val2 )) {
        return true
    }
    
    else return false
}

module.exports = strictEqual 