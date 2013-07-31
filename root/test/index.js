// Load modules

var Lab = require('lab');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;
var describe = Lab.experiment;
var it = Lab.test;


describe('{%= name %}', function () {

    it('can be required', function (done) {

        var {%= name %} = require('..');
        expect({%= name %}).to.exist;
        done();
    });
});