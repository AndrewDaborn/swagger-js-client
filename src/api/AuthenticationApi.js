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
    define(['ApiClient', 'model/InlineObject', 'model/JwtToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineObject'), require('../model/JwtToken'));
  } else {
    // Browser globals (root is window)
    if (!root.Reporting) {
      root.Reporting = {};
    }
    root.Reporting.AuthenticationApi = factory(root.Reporting.ApiClient, root.Reporting.InlineObject, root.Reporting.JwtToken);
  }
}(this, function(ApiClient, InlineObject, JwtToken) {
  'use strict';

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AuthenticationApi. 
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a session for a user
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JwtToken} and HTTP response
     */
    this.sessionPostWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['inlineObject'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = JwtToken;

      return this.apiClient.callApi(
        '/session', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a session for a user
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JwtToken}
     */
    this.sessionPost = function(opts) {
      return this.sessionPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
