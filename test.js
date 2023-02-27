var index = require('./index');
var assert = require ('assert');

try {
    assert.equal(index.sxon(), "Tba");
    console.log("Test succeeded!")
}
catch (error) {
    console.log("Test failed with " + error);
    error;
}
