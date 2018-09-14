# Reporting.ServiceCheckApi

All URIs are relative to *http://localhost:10500/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servicecheckGet**](ServiceCheckApi.md#servicecheckGet) | **GET** /servicecheck | 


<a name="servicecheckGet"></a>
# **servicecheckGet**
> ServiceStatus servicecheckGet()



Check the health of the service and dependent components

### Example
```javascript
var Reporting = require('reporting');

var apiInstance = new Reporting.ServiceCheckApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicecheckGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceStatus**](ServiceStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

