// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e7c5daef-98e6-4f19-83aa-aadbd0ffaf57',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '991e0fb8-b2a3-4637-92e1-9f924f580664',
  'x-ms-routing-request-id': 'CENTRALUS:20160914T212437Z:991e0fb8-b2a3-4637-92e1-9f924f580664',
  date: 'Wed, 14 Sep 2016 21:24:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '299',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e7c5daef-98e6-4f19-83aa-aadbd0ffaf57',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '991e0fb8-b2a3-4637-92e1-9f924f580664',
  'x-ms-routing-request-id': 'CENTRALUS:20160914T212437Z:991e0fb8-b2a3-4637-92e1-9f924f580664',
  date: 'Wed, 14 Sep 2016 21:24:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586\",\"name\":\"webappclitests2586\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests2586\",\"state\":\"Running\",\"hostNames\":[\"webappclitests2586.azurewebsites.net\"],\"webSpace\":\"testrg11203-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-059.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg11203-WestUSwebspace/sites/webappclitests2586\",\"repositorySiteName\":\"webappclitests2586\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests2586.azurewebsites.net\",\"webappclitests2586.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests2586.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests2586.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests8044\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-09-14T21:24:36.207\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests2586\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"23.99.7.165,23.99.4.206,23.99.7.131,23.99.3.236\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-059\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg11203\",\"defaultHostName\":\"webappclitests2586.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2510',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D20ECE64A9D7F0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7e09846e-4436-4ca5-9fca-bef18d9f6a46',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6379b26a-2f42-43d7-b155-963ae0bbecad',
  'x-ms-routing-request-id': 'CENTRALUS:20160914T212438Z:6379b26a-2f42-43d7-b155-963ae0bbecad',
  date: 'Wed, 14 Sep 2016 21:24:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586\",\"name\":\"webappclitests2586\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests2586\",\"state\":\"Running\",\"hostNames\":[\"webappclitests2586.azurewebsites.net\"],\"webSpace\":\"testrg11203-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-059.api.azurewebsites.windows.net:454/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/webspaces/testrg11203-WestUSwebspace/sites/webappclitests2586\",\"repositorySiteName\":\"webappclitests2586\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests2586.azurewebsites.net\",\"webappclitests2586.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests2586.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests2586.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests8044\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-09-14T21:24:36.207\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests2586\",\"trafficManagerHostNames\":null,\"sku\":\"Basic\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"23.99.7.165,23.99.4.206,23.99.7.131,23.99.3.236\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"siteDisabledReason\":0,\"functionExecutionUnitsCache\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-059\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg11203\",\"defaultHostName\":\"webappclitests2586.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2510',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D20ECE64A9D7F0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '7e09846e-4436-4ca5-9fca-bef18d9f6a46',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6379b26a-2f42-43d7-b155-963ae0bbecad',
  'x-ms-routing-request-id': 'CENTRALUS:20160914T212438Z:6379b26a-2f42-43d7-b155-963ae0bbecad',
  date: 'Wed, 14 Sep 2016 21:24:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"testkey11859\":\"testval1460\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '328',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ff46d9d0-449e-4bab-8d6e-9e44728bcd30',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f8fee796-d310-4448-8875-68e2017578b7',
  'x-ms-routing-request-id': 'CENTRALUS:20160914T212439Z:f8fee796-d310-4448-8875-68e2017578b7',
  date: 'Wed, 14 Sep 2016 21:24:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg11203/providers/Microsoft.Web/sites/webappclitests2586/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"testkey11859\":\"testval1460\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '328',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ff46d9d0-449e-4bab-8d6e-9e44728bcd30',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f8fee796-d310-4448-8875-68e2017578b7',
  'x-ms-routing-request-id': 'CENTRALUS:20160914T212439Z:f8fee796-d310-4448-8875-68e2017578b7',
  date: 'Wed, 14 Sep 2016 21:24:39 GMT',
  connection: 'close' });
 return result; }]];