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
* The JwtToken model module.
* @module model/JwtToken
* @version 1.0.0
*/
export default class JwtToken {
    /**
    * Constructs a new <code>JwtToken</code>.
    * @alias module:model/JwtToken
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>JwtToken</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JwtToken} obj Optional instance to populate.
    * @return {module:model/JwtToken} The populated <code>JwtToken</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JwtToken();

            
            
            

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} token
    */
    token = undefined;








}


