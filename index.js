// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    // returns a driver with the original key value pairs and the new key value pair
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    // updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
    driver[key] = value 
    return driver 
}

function deleteFromDriverByKey(driver, key) {
    // deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
    // does not modify the original driver (it is non-destructive):
    const copy = Object.assign({}, driver)
    delete copy[key]
    return copy
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    // returns driver without the delete key/value pair:
    //  modifies the original driver:
    delete driver[key]
    return driver 
}