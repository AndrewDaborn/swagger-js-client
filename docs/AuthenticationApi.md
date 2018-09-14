# Reporting.AuthenticationApi

All URIs are relative to *http://localhost:10500/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessionPost**](AuthenticationApi.md#sessionPost) | **POST** /session | 


<a name="sessionPost"></a>
# **sessionPost**
> JwtToken sessionPost(credentials)



Create a session for a user

### Example
```javascript
var Reporting = require('reporting');

var apiInstance = new Reporting.AuthenticationApi();

var credentials = new Reporting.Credentials(); // Credentials | Credentials to authenticate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionPost(credentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | [**Credentials**](Credentials.md)| Credentials to authenticate | 

### Return type

[**JwtToken**](JwtToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

