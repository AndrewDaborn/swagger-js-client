# Reporting.IGApi

All URIs are relative to *http://localhost:10210/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**igDocumentsIdMatchesGet**](IGApi.md#igDocumentsIdMatchesGet) | **GET** /ig/documents/{id}/matches | 
[**igDocumentsPost**](IGApi.md#igDocumentsPost) | **POST** /ig/documents | 
[**igUsersIdActiveDocumentsGet**](IGApi.md#igUsersIdActiveDocumentsGet) | **GET** /ig/users/{id}/activeDocuments | 


<a name="igDocumentsIdMatchesGet"></a>
# **igDocumentsIdMatchesGet**
> [DocumentMatch] igDocumentsIdMatchesGet(id, opts)



Retrieves the list of matches for a chosen document

### Example
```javascript
import Reporting from 'reporting';

let apiInstance = new Reporting.IGApi();
let id = 56; // Number | The document id to get matches for
let opts = {
  'authorization': "authorization_example" // String | 
};
apiInstance.igDocumentsIdMatchesGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

<a name="igDocumentsPost"></a>
# **igDocumentsPost**
> [DocumentDetail] igDocumentsPost(opts)



### Example
```javascript
import Reporting from 'reporting';

let apiInstance = new Reporting.IGApi();
let opts = {
  'authorization': "authorization_example", // String | 
  'documentFilter': new Reporting.DocumentFilter() // DocumentFilter | Provides filters for querying documents
};
apiInstance.igDocumentsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [optional] 
 **documentFilter** | [**DocumentFilter**](DocumentFilter.md)| Provides filters for querying documents | [optional] 

### Return type

[**[DocumentDetail]**](DocumentDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="igUsersIdActiveDocumentsGet"></a>
# **igUsersIdActiveDocumentsGet**
> [RegisteredDocument] igUsersIdActiveDocumentsGet(id, opts)



Retrieves a specific user&#39;s registered documents

### Example
```javascript
import Reporting from 'reporting';

let apiInstance = new Reporting.IGApi();
let id = 56; // Number | User to select documents for
let opts = {
  'authorization': "authorization_example" // String | 
};
apiInstance.igUsersIdActiveDocumentsGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| User to select documents for | 
 **authorization** | **String**|  | [optional] 

### Return type

[**[RegisteredDocument]**](RegisteredDocument.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

