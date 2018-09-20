# Reporting.AuthenticationApi

All URIs are relative to *http://localhost:10210/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessionPost**](AuthenticationApi.md#sessionPost) | **POST** /session | 


<a name="sessionPost"></a>
# **sessionPost**
> JwtToken sessionPost(credentials)



Create a session for a user

### Example
```javascript
import Reporting from 'reporting';

let apiInstance = new Reporting.AuthenticationApi();
let credentials = new Reporting.Credentials(); // Credentials | Credentials to authenticate
apiInstance.sessionPost(credentials).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

