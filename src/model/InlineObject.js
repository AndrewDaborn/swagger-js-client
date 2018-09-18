/**
 * Reporting
 * Clearswift Reporting Service API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Reporting) {
      root.Reporting = {};
    }
    root.Reporting.InlineObject = factory(root.Reporting.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineObject model module.
   * @module model/InlineObject
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineObject</code>.
   * @alias module:model/InlineObject
   * @class
   * @param username {String} 
   * @param password {String} 
   */
  var exports = function(username, password) {
    var _this = this;

    _this['username'] = username;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject} obj Optional instance to populate.
   * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));

