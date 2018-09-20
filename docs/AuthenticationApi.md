# Reporting.AuthenticationApi

All URIs are relative to *http://localhost:10210/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessionPost**](AuthenticationApi.md#sessionPost) | **POST** /session | 


<a name="sessionPost"></a>
# **sessionPost**
> JwtToken sessionPost(opts)



Create a session for a user

### Example
```javascript
import Reporting from 'reporting';

let apiInstance = new Reporting.AuthenticationApi();
let opts = {
  'inlineObject': new Reporting.InlineObject() // InlineObject | 
};
apiInstance.sessionPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**JwtToken**](JwtToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

