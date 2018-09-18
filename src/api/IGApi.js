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
    define(['ApiClient', 'model/ActiveDocument', 'model/DocumentMatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActiveDocument'), require('../model/DocumentMatch'));
  } else {
    // Browser globals (root is window)
    if (!root.Reporting) {
      root.Reporting = {};
    }
    root.Reporting.IGApi = factory(root.Reporting.ApiClient, root.Reporting.ActiveDocument, root.Reporting.DocumentMatch);
  }
}(this, function(ApiClient, ActiveDocument, DocumentMatch) {
  'use strict';

  /**
   * IG service.
   * @module api/IGApi
   * @version 1.0.0
   */

  /**
   * Constructs a new IGApi. 
   * @alias module:api/IGApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieves the list of matches for a chosen document
     * @param {Number} id The document id to get matches for
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DocumentMatch>} and HTTP response
     */
    this.igDocumentsIdMatchesGetWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling igDocumentsIdMatchesGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DocumentMatch];

      return this.apiClient.callApi(
        '/ig/documents/{id}/matches', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves the list of matches for a chosen document
     * @param {Number} id The document id to get matches for
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DocumentMatch>}
     */
    this.igDocumentsIdMatchesGet = function(id, opts) {
      return this.igDocumentsIdMatchesGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves document activity for a specific user&#39;s registered documents
     * @param {Number} id User to select documents for
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ActiveDocument>} and HTTP response
     */
    this.igUsersIdActiveDocumentsGetWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling igUsersIdActiveDocumentsGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ActiveDocument];

      return this.apiClient.callApi(
        '/ig/users/{id}/activeDocuments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves document activity for a specific user&#39;s registered documents
     * @param {Number} id User to select documents for
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ActiveDocument>}
     */
    this.igUsersIdActiveDocumentsGet = function(id, opts) {
      return this.igUsersIdActiveDocumentsGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
