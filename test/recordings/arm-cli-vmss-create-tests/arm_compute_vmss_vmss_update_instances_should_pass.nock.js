// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'D:\public.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestVMSSCreate5174/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1/manualupgrade?api-version=2016-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/1bcb9a8c-a41d-4867-addc-76fc668f5593?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/1bcb9a8c-a41d-4867-addc-76fc668f5593?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131052418054615531',
  'x-ms-request-id': '1bcb9a8c-a41d-4867-addc-76fc668f5593',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '72c00f65-f7d2-4667-b7e9-3f0ede0deb3c',
  'x-ms-routing-request-id': 'JAPANEAST:20160420T043534Z:72c00f65-f7d2-4667-b7e9-3f0ede0deb3c',
  date: 'Wed, 20 Apr 2016 04:35:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestVMSSCreate5174/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1/manualupgrade?api-version=2016-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/1bcb9a8c-a41d-4867-addc-76fc668f5593?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/1bcb9a8c-a41d-4867-addc-76fc668f5593?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131052418054615531',
  'x-ms-request-id': '1bcb9a8c-a41d-4867-addc-76fc668f5593',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '72c00f65-f7d2-4667-b7e9-3f0ede0deb3c',
  'x-ms-routing-request-id': 'JAPANEAST:20160420T043534Z:72c00f65-f7d2-4667-b7e9-3f0ede0deb3c',
  date: 'Wed, 20 Apr 2016 04:35:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/1bcb9a8c-a41d-4867-addc-76fc668f5593?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"1bcb9a8c-a41d-4867-addc-76fc668f5593\",\r\n  \"startTime\": \"2016-04-20T04:35:34.2990054+00:00\",\r\n  \"endTime\": \"2016-04-20T04:35:34.955248+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131052418054615531',
  'x-ms-request-id': '7cc41faa-4480-46cc-906c-a71437621864',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '9be520a2-7af2-4bac-bec8-a95d649587eb',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160420T043606Z:9be520a2-7af2-4bac-bec8-a95d649587eb',
  date: 'Wed, 20 Apr 2016 04:36:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/1bcb9a8c-a41d-4867-addc-76fc668f5593?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"1bcb9a8c-a41d-4867-addc-76fc668f5593\",\r\n  \"startTime\": \"2016-04-20T04:35:34.2990054+00:00\",\r\n  \"endTime\": \"2016-04-20T04:35:34.955248+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131052418054615531',
  'x-ms-request-id': '7cc41faa-4480-46cc-906c-a71437621864',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '9be520a2-7af2-4bac-bec8-a95d649587eb',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160420T043606Z:9be520a2-7af2-4bac-bec8-a95d649587eb',
  date: 'Wed, 20 Apr 2016 04:36:06 GMT',
  connection: 'close' });
 return result; }]];