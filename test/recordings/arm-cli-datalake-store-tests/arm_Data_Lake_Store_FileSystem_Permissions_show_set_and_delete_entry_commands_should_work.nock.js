// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"group\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9d59c159-e8f8-4a6f-8998-93d9d9b1df8d',
  'server-perf': '[9d59c159e8f84a6f899893d9d9b1df8d][ AuthTime::875.062389895467::PostAuthTime::187.757765964863 ][SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:032 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:30 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"group\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9d59c159-e8f8-4a6f-8998-93d9d9b1df8d',
  'server-perf': '[9d59c159e8f84a6f899893d9d9b1df8d][ AuthTime::875.062389895467::PostAuthTime::187.757765964863 ][SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:032 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:30 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?op=MODIFYACLENTRIES&aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'c2067848-8072-408b-8bf6-6c0ccfa736c3',
  contentlength: '0',
  'server-perf': '[c20678488072408b8bf66c0ccfa736c3][ AuthTime::860.522258314925::PostAuthTime::187.330392217663 ][MODIFYACLENTRIES :: 00:00:111 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:31 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?op=MODIFYACLENTRIES&aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'c2067848-8072-408b-8bf6-6c0ccfa736c3',
  contentlength: '0',
  'server-perf': '[c20678488072408b8bf66c0ccfa736c3][ AuthTime::860.522258314925::PostAuthTime::187.330392217663 ][MODIFYACLENTRIES :: 00:00:111 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:31 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"group\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9c50493a-59cd-49f6-8f91-242dba471562',
  'server-perf': '[9c50493a59cd49f68f91242dba471562][ AuthTime::847.264439314952::PostAuthTime::189.896724409813 ][SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:029 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:31 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"group\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9c50493a-59cd-49f6-8f91-242dba471562',
  'server-perf': '[9c50493a59cd49f68f91242dba471562][ AuthTime::847.264439314952::PostAuthTime::189.896724409813 ][SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:029 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:31 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?op=MODIFYACLENTRIES&aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '766895f0-d948-4cf6-a6eb-5ff01d5f10d4',
  'set-cookie': [ 'UserPrincipalSession=a7c5758e-e5d8-4c5a-abda-f6c41d009472; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[766895f0d9484cf6a6eb5ff01d5f10d4][ AuthTime::1876.32186169451::PostAuthTime::1510567.83649867 ][MODIFYACLENTRIES :: 00:00:299 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:34 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?op=MODIFYACLENTRIES&aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '766895f0-d948-4cf6-a6eb-5ff01d5f10d4',
  'set-cookie': [ 'UserPrincipalSession=a7c5758e-e5d8-4c5a-abda-f6c41d009472; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[766895f0d9484cf6a6eb5ff01d5f10d4][ AuthTime::1876.32186169451::PostAuthTime::1510567.83649867 ][MODIFYACLENTRIES :: 00:00:299 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:34 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:-w-\"],\"owner\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"group\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4c0c74cb-c6ac-4410-9e9f-6f39e33dcca2',
  'server-perf': '[4c0c74cbc6ac44109e9f6f39e33dcca2][ AuthTime::889.605896034154::PostAuthTime::191.179728618878 ][SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:040 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:33 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:-w-\"],\"owner\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"group\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4c0c74cb-c6ac-4410-9e9f-6f39e33dcca2',
  'server-perf': '[4c0c74cbc6ac44109e9f6f39e33dcca2][ AuthTime::889.605896034154::PostAuthTime::191.179728618878 ][SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:040 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:33 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?op=REMOVEACLENTRIES&aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '7c6a2508-d4dc-4369-8701-2833705561f5',
  'set-cookie': [ 'UserPrincipalSession=760a6fe1-c1ac-4b65-8a4f-584a27a62d51; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[7c6a2508d4dc436987012833705561f5][ AuthTime::1875.44159485671::PostAuthTime::34977.3065151601 ][REMOVEACLENTRIES :: 00:00:091 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:34 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?op=REMOVEACLENTRIES&aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '7c6a2508-d4dc-4369-8701-2833705561f5',
  'set-cookie': [ 'UserPrincipalSession=760a6fe1-c1ac-4b65-8a4f-584a27a62d51; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[7c6a2508d4dc436987012833705561f5][ AuthTime::1875.44159485671::PostAuthTime::34977.3065151601 ][REMOVEACLENTRIES :: 00:00:091 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:34 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"group\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9e8eb505-903d-4bfd-8994-d45eefea84ca',
  'set-cookie': [ 'UserPrincipalSession=0015f211-189b-46db-afc6-2eec2863ad6a; path=/; secure; HttpOnly' ],
  'server-perf': '[9e8eb505903d4bfd8994d45eefea84ca][ AuthTime::1773.65099663618::PostAuthTime::1398387.59000306 ][SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:061 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:36 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"group\":\"f5181084-3fee-489a-9278-85f6fc92c3bb\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9e8eb505-903d-4bfd-8994-d45eefea84ca',
  'set-cookie': [ 'UserPrincipalSession=0015f211-189b-46db-afc6-2eec2863ad6a; path=/; secure; HttpOnly' ],
  'server-perf': '[9e8eb505903d4bfd8994d45eefea84ca][ AuthTime::1773.65099663618::PostAuthTime::1398387.59000306 ][SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:061 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:36 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; }]];