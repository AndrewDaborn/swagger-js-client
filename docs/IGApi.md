# Reporting.IGApi

All URIs are relative to *http://localhost:10500/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**igDocumentsIdMatchesGet**](IGApi.md#igDocumentsIdMatchesGet) | **GET** /ig/documents/{id}/matches | 
[**igUsersIdActiveDocumentsGet**](IGApi.md#igUsersIdActiveDocumentsGet) | **GET** /ig/users/{id}/activeDocuments | 


<a name="igDocumentsIdMatchesGet"></a>
# **igDocumentsIdMatchesGet**
> [DocumentMatch] igDocumentsIdMatchesGet(id, opts)



Retrieves the list of matches for a chosen document

### Example
```javascript
var Reporting = require('reporting');

var apiInstance = new Reporting.IGApi();

var id = 56; // Number | The document id to get matches for

var opts = { 
  'authorization': "authorization_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.igDocumentsIdMatchesGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The document id to get matches for | 
 **authorization** | **String**|  | [optional] 

### Return type

[**[DocumentMatch]**](DocumentMatch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="igUsersIdActiveDocumentsGet"></a>
# **igUsersIdActiveDocumentsGet**
> [DocumentActivity] igUsersIdActiveDocumentsGet(id, opts)



Retrieves document activity for a specific user&#39;s registered documents

### Example
```javascript
var Reporting = require('reporting');

var apiInstance = new Reporting.IGApi();

var id = 56; // Number | User to select documents for

var opts = { 
  'authorization': "authorization_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.igUsersIdActiveDocumentsGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User to select documents for | 
 **authorization** | **String**|  | [optional] 

### Return type

[**[DocumentActivity]**](DocumentActivity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

