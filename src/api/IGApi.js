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


import ApiClient from "../ApiClient";
import ActiveDocument from '../model/ActiveDocument';
import DocumentMatch from '../model/DocumentMatch';

/**
* IG service.
* @module api/IGApi
* @version 1.0.0
*/
export default class IGApi {

    /**
    * Constructs a new IGApi. 
    * @alias module:api/IGApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieves the list of matches for a chosen document
     * @param {Number} id The document id to get matches for
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DocumentMatch>} and HTTP response
     */
    igDocumentsIdMatchesGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling igDocumentsIdMatchesGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DocumentMatch];

      return this.apiClient.callApi(
        '/ig/documents/{id}/matches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    igDocumentsIdMatchesGet(id, opts) {
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
    igUsersIdActiveDocumentsGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling igUsersIdActiveDocumentsGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ActiveDocument];

      return this.apiClient.callApi(
        '/ig/users/{id}/activeDocuments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
    igUsersIdActiveDocumentsGet(id, opts) {
      return this.igUsersIdActiveDocumentsGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
