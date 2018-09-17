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


import ApiClient from '../ApiClient';





/**
* The Credentials model module.
* @module model/Credentials
* @version 1.0.0
*/
export default class Credentials {
    /**
    * Constructs a new <code>Credentials</code>.
    * @alias module:model/Credentials
    * @class
    * @param username {String} 
    * @param password {String} 
    */

    constructor(username, password) {
        

        
        

        this['username'] = username;this['password'] = password;

        
    }

    /**
    * Constructs a <code>Credentials</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Credentials} obj Optional instance to populate.
    * @return {module:model/Credentials} The populated <code>Credentials</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Credentials();

            
            
            

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
    username = undefined;
    /**
    * @member {String} password
    */
    password = undefined;








}


