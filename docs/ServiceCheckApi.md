# Reporting.ServiceCheckApi

All URIs are relative to *http://localhost:10210/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servicecheckGet**](ServiceCheckApi.md#servicecheckGet) | **GET** /servicecheck | 


<a name="servicecheckGet"></a>
# **servicecheckGet**
> ServiceStatus servicecheckGet()



Check the health of the service and dependent components

### Example
```javascript
import Reporting from 'reporting';

let apiInstance = new Reporting.ServiceCheckApi();
apiInstance.servicecheckGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

