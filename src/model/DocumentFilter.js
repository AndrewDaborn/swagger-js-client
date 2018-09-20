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

import ApiClient from '../ApiClient';

/**
 * The DocumentFilter model module.
 * @module model/DocumentFilter
 * @version 1.0.0
 */
class DocumentFilter {
    /**
     * Constructs a new <code>DocumentFilter</code>.
     * @alias module:model/DocumentFilter
     */
    constructor() { 
        
        DocumentFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentFilter} obj Optional instance to populate.
     * @return {module:model/DocumentFilter} The populated <code>DocumentFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentFilter();

            if (data.hasOwnProperty('documentName')) {
                obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} documentName
 */
DocumentFilter.prototype['documentName'] = undefined;






export default DocumentFilter;

