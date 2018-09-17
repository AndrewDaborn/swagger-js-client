/**
 * Reporting
 * Clearswift Reporting Service API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Reporting);
  }
}(this, function(expect, Reporting) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Reporting.DocumentMatch();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DocumentMatch', function() {
    it('should create an instance of DocumentMatch', function() {
      // uncomment below and update the code to test DocumentMatch
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be.a(Reporting.DocumentMatch);
    });

    it('should have the property matchTime (base name: "matchTime")', function() {
      // uncomment below and update the code to test the property matchTime
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

    it('should have the property matchType (base name: "matchType")', function() {
      // uncomment below and update the code to test the property matchType
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

    it('should have the property transferMode (base name: "transferMode")', function() {
      // uncomment below and update the code to test the property transferMode
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

    it('should have the property sourceName (base name: "sourceName")', function() {
      // uncomment below and update the code to test the property sourceName
      //var instane = new Reporting.DocumentMatch();
      //expect(instance).to.be();
    });

  });

}));
