// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"xplatTestAppGw\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\r\n  \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"71e2ae95-484c-4b8e-ae22-d003828fc842\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Small\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [\r\n      {\r\n        \"name\": \"cert01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQD\",\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.6\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 112,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.1.1.1\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 111,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Https\",\r\n          \"sslCertificate\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\"\r\n          },\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '9402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1"',
  'x-ms-request-id': '0e1a961d-d628-4359-9dbc-e1c3bb5da543',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': 'd931f4ae-7bc4-4691-ad7b-1c9af46117b8',
  'x-ms-routing-request-id': 'EASTUS:20160718T201139Z:d931f4ae-7bc4-4691-ad7b-1c9af46117b8',
  date: 'Mon, 18 Jul 2016 20:11:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"xplatTestAppGw\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\r\n  \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"71e2ae95-484c-4b8e-ae22-d003828fc842\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Small\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [\r\n      {\r\n        \"name\": \"cert01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQD\",\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.6\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 112,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.1.1.1\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 111,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Https\",\r\n          \"sslCertificate\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\"\r\n          },\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '9402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6f77a0b9-4841-41bd-90fd-79a0e9b54ff1"',
  'x-ms-request-id': '0e1a961d-d628-4359-9dbc-e1c3bb5da543',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': 'd931f4ae-7bc4-4691-ad7b-1c9af46117b8',
  'x-ms-routing-request-id': 'EASTUS:20160718T201139Z:d931f4ae-7bc4-4691-ad7b-1c9af46117b8',
  date: 'Mon, 18 Jul 2016 20:11:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'f0b55466-8b49-4d54-abba-bada551a4532',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e77021d9-b771-4bb7-9459-9de3cfd0d3a0',
  'x-ms-routing-request-id': 'EASTUS:20160718T201141Z:e77021d9-b771-4bb7-9459-9de3cfd0d3a0',
  date: 'Mon, 18 Jul 2016 20:11:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupCreateAppGw3/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'f0b55466-8b49-4d54-abba-bada551a4532',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e77021d9-b771-4bb7-9459-9de3cfd0d3a0',
  'x-ms-routing-request-id': 'EASTUS:20160718T201141Z:e77021d9-b771-4bb7-9459-9de3cfd0d3a0',
  date: 'Mon, 18 Jul 2016 20:11:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '57db98e3-0860-41fe-83a6-47f7a93441ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '3d6611c0-caae-4ff7-bf1c-988f14d9242a',
  'x-ms-routing-request-id': 'EASTUS:20160718T201212Z:3d6611c0-caae-4ff7-bf1c-988f14d9242a',
  date: 'Mon, 18 Jul 2016 20:12:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '57db98e3-0860-41fe-83a6-47f7a93441ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '3d6611c0-caae-4ff7-bf1c-988f14d9242a',
  'x-ms-routing-request-id': 'EASTUS:20160718T201212Z:3d6611c0-caae-4ff7-bf1c-988f14d9242a',
  date: 'Mon, 18 Jul 2016 20:12:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f6457a2-f201-4ba3-bc30-17669a96722b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': 'd45f0bb9-1e94-4bd4-9397-db73b344da20',
  'x-ms-routing-request-id': 'EASTUS:20160718T201243Z:d45f0bb9-1e94-4bd4-9397-db73b344da20',
  date: 'Mon, 18 Jul 2016 20:12:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f6457a2-f201-4ba3-bc30-17669a96722b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': 'd45f0bb9-1e94-4bd4-9397-db73b344da20',
  'x-ms-routing-request-id': 'EASTUS:20160718T201243Z:d45f0bb9-1e94-4bd4-9397-db73b344da20',
  date: 'Mon, 18 Jul 2016 20:12:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '022ad975-ff42-4129-be2f-2e4b88df5c6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': 'cfbb754e-a983-43b3-9ae8-d8d21833ba94',
  'x-ms-routing-request-id': 'EASTUS:20160718T201314Z:cfbb754e-a983-43b3-9ae8-d8d21833ba94',
  date: 'Mon, 18 Jul 2016 20:13:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/f0b55466-8b49-4d54-abba-bada551a4532?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '022ad975-ff42-4129-be2f-2e4b88df5c6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': 'cfbb754e-a983-43b3-9ae8-d8d21833ba94',
  'x-ms-routing-request-id': 'EASTUS:20160718T201314Z:cfbb754e-a983-43b3-9ae8-d8d21833ba94',
  date: 'Mon, 18 Jul 2016 20:13:13 GMT',
  connection: 'close' });
 return result; }]];
