/**
 * Reporting
 * Clearswift Reporting Service API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    instance = new Reporting.JwtToken();
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

  describe('JwtToken', function() {
    it('should create an instance of JwtToken', function() {
      // uncomment below and update the code to test JwtToken
      //var instane = new Reporting.JwtToken();
      //expect(instance).to.be.a(Reporting.JwtToken);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new Reporting.JwtToken();
      //expect(instance).to.be();
    });

  });

}));
