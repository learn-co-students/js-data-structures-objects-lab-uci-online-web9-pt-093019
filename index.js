// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {[key]: value}
    return Object.assign({}, driver, newDriver)
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {[key]: value}
    return Object.assign(driver, newDriver)
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = {...driver}
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}