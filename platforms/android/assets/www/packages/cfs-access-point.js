//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var FS = Package['cfs-base-package'].FS;
var check = Package.check.check;
var Match = Package.check.Match;
var EJSON = Package.ejson.EJSON;
var HTTP = Package['http-methods'].HTTP;

/* Package-scope variables */
var baseUrl;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/cfs-access-point/access-point-common.js                                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
baseUrl = '/cfs';                                                                                                 // 1
FS.HTTP = FS.HTTP || {};                                                                                          // 2
                                                                                                                  // 3
// Note the upload URL so that client uploader packages know what it is                                           // 4
FS.HTTP.uploadUrl = baseUrl + '/files';                                                                           // 5
                                                                                                                  // 6
/**                                                                                                               // 7
 * @method FS.HTTP.setBaseUrl                                                                                     // 8
 * @public                                                                                                        // 9
 * @param {String} newBaseUrl - Change the base URL for the HTTP GET and DELETE endpoints.                        // 10
 * @returns {undefined}                                                                                           // 11
 */                                                                                                               // 12
FS.HTTP.setBaseUrl = function setBaseUrl(newBaseUrl) {                                                            // 13
                                                                                                                  // 14
  // Adjust the baseUrl if necessary                                                                              // 15
  if (newBaseUrl.slice(0, 1) !== '/') {                                                                           // 16
    newBaseUrl = '/' + newBaseUrl;                                                                                // 17
  }                                                                                                               // 18
  if (newBaseUrl.slice(-1) === '/') {                                                                             // 19
    newBaseUrl = newBaseUrl.slice(0, -1);                                                                         // 20
  }                                                                                                               // 21
                                                                                                                  // 22
  // Update the base URL                                                                                          // 23
  baseUrl = newBaseUrl;                                                                                           // 24
                                                                                                                  // 25
  // Change the upload URL so that client uploader packages know what it is                                       // 26
  FS.HTTP.uploadUrl = baseUrl + '/files';                                                                         // 27
                                                                                                                  // 28
  // Remount URLs with the new baseUrl, unmounting the old, on the server only.                                   // 29
  // If existingMountPoints is empty, then we haven't run the server startup                                      // 30
  // code yet, so this new URL will be used at that point for the initial mount.                                  // 31
  if (Meteor.isServer && !FS.Utility.isEmpty(_existingMountPoints)) {                                             // 32
    mountUrls();                                                                                                  // 33
  }                                                                                                               // 34
};                                                                                                                // 35
                                                                                                                  // 36
/*                                                                                                                // 37
 * FS.File extensions                                                                                             // 38
 */                                                                                                               // 39
                                                                                                                  // 40
/**                                                                                                               // 41
 * @method FS.File.prototype.url Construct the file url                                                           // 42
 * @public                                                                                                        // 43
 * @param {object} [options]                                                                                      // 44
 * @param {string} [options.store] Name of the store to get from. If not defined,                                 // 45
 * the first store defined in `options.stores` for the collection is used.                                        // 46
 * @param {boolean} [options.auth=null] Wether or not the authenticate                                            // 47
 * @param {boolean} [options.download=false] Should headers be set to force a download                            // 48
 * @param {boolean} [options.brokenIsFine=false] Return the URL even if                                           // 49
 * we know it's currently a broken link because the file hasn't been saved in                                     // 50
 * the requested store yet.                                                                                       // 51
 *                                                                                                                // 52
 * Return the http url for getting the file - on server set auth if wanting to                                    // 53
 * use authentication on client set auth to true or token                                                         // 54
 */                                                                                                               // 55
FS.File.prototype.url = function(options) {                                                                       // 56
  var self = this;                                                                                                // 57
  options = options || {};                                                                                        // 58
  options = FS.Utility.extend({                                                                                   // 59
    store: null,                                                                                                  // 60
    auth: null,                                                                                                   // 61
    download: false,                                                                                              // 62
    metadata: false,                                                                                              // 63
    brokenIsFine: false,                                                                                          // 64
    uploading: null, // return this URL while uploading                                                           // 65
    storing: null // return this URL while storing                                                                // 66
  }, options.hash || options); // check for "hash" prop if called as helper                                       // 67
                                                                                                                  // 68
  // Primarily useful for displaying a temporary image while uploading an image                                   // 69
  if (options.uploading && !self.isUploaded()) {                                                                  // 70
    return options.uploading;                                                                                     // 71
  }                                                                                                               // 72
                                                                                                                  // 73
  if (self.isMounted()) {                                                                                         // 74
    // See if we've stored in the requested store yet                                                             // 75
    var storeName = options.store || self.collection.primaryStore.name;                                           // 76
    if (!self.hasStored(storeName)) {                                                                             // 77
      if (options.storing) {                                                                                      // 78
        return options.storing;                                                                                   // 79
      } else if (!options.brokenIsFine) {                                                                         // 80
        // We want to return null if we know the URL will be a broken                                             // 81
        // link because then we can avoid rendering broken links, broken                                          // 82
        // images, etc.                                                                                           // 83
        return null;                                                                                              // 84
      }                                                                                                           // 85
    }                                                                                                             // 86
                                                                                                                  // 87
    // Add filename to end of URL if we can determine one                                                         // 88
    var filename = self.name({store: storeName});                                                                 // 89
    if (typeof filename === "string" && filename.length) {                                                        // 90
      filename = '/' + filename;                                                                                  // 91
    } else {                                                                                                      // 92
      filename = '';                                                                                              // 93
    }                                                                                                             // 94
                                                                                                                  // 95
    // TODO: Could we somehow figure out if the collection requires login?                                        // 96
    var authToken = '';                                                                                           // 97
    if (Meteor.isClient && typeof Accounts !== "undefined" && typeof Accounts._storedLoginToken === "function") { // 98
      if (options.auth !== false) {                                                                               // 99
        // Add reactive deps on the user                                                                          // 100
        Meteor.userId();                                                                                          // 101
                                                                                                                  // 102
        var authObject = {                                                                                        // 103
          authToken: Accounts._storedLoginToken() || ''                                                           // 104
        };                                                                                                        // 105
                                                                                                                  // 106
        // If it's a number, we use that as the expiration time (in seconds)                                      // 107
        if (options.auth === +options.auth) {                                                                     // 108
          authObject.expiration = FS.HTTP.now() + options.auth * 1000;                                            // 109
        }                                                                                                         // 110
                                                                                                                  // 111
        // Set the authToken                                                                                      // 112
        var authString = JSON.stringify(authObject);                                                              // 113
        authToken = FS.Utility.btoa(authString);                                                                  // 114
      }                                                                                                           // 115
    } else if (typeof options.auth === "string") {                                                                // 116
      // If the user supplies auth token the user will be responsible for                                         // 117
      // updating                                                                                                 // 118
      authToken = options.auth;                                                                                   // 119
    }                                                                                                             // 120
                                                                                                                  // 121
    // Construct query string                                                                                     // 122
    var params = {};                                                                                              // 123
    if (authToken !== '') {                                                                                       // 124
      params.token = authToken;                                                                                   // 125
    }                                                                                                             // 126
    if (options.download) {                                                                                       // 127
      params.download = true;                                                                                     // 128
    }                                                                                                             // 129
    if (options.store) {                                                                                          // 130
      // We use options.store here instead of storeName because we want to omit the queryString                   // 131
      // whenever possible, allowing users to have "clean" URLs if they want. The server will                     // 132
      // assume the first store defined on the server, which means that we are assuming that                      // 133
      // the first on the client is also the first on the server. If that's not the case, the                     // 134
      // store option should be supplied.                                                                         // 135
      params.store = options.store;                                                                               // 136
    }                                                                                                             // 137
    var queryString = FS.Utility.encodeParams(params);                                                            // 138
    if (queryString.length) {                                                                                     // 139
      queryString = '?' + queryString;                                                                            // 140
    }                                                                                                             // 141
                                                                                                                  // 142
    // Determine which URL to use                                                                                 // 143
    var area;                                                                                                     // 144
    if (options.metadata) {                                                                                       // 145
      area = '/record';                                                                                           // 146
    } else {                                                                                                      // 147
      area = '/files';                                                                                            // 148
    }                                                                                                             // 149
                                                                                                                  // 150
    // Construct and return the http method url                                                                   // 151
    return baseUrl + area + '/' + self.collection.name + '/' + self._id + filename + queryString;                 // 152
  }                                                                                                               // 153
                                                                                                                  // 154
};                                                                                                                // 155
                                                                                                                  // 156
                                                                                                                  // 157
                                                                                                                  // 158
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/cfs-access-point/access-point-client.js                                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FS.HTTP.setHeadersForGet = function setHeadersForGet() {                                                          // 1
  // Client Stub                                                                                                  // 2
};                                                                                                                // 3
                                                                                                                  // 4
FS.HTTP.now = function() {                                                                                        // 5
  return Date.now() + FS.HTTP._serverTimeDiff;                                                                    // 6
};                                                                                                                // 7
                                                                                                                  // 8
// Returns the localstorage if its found and working                                                              // 9
// TODO: check if this works in IE                                                                                // 10
// could use Meteor._localStorage - just needs a rewrite                                                          // 11
FS.HTTP._storage = function() {                                                                                   // 12
  var storage,                                                                                                    // 13
      fail,                                                                                                       // 14
      uid;                                                                                                        // 15
  try {                                                                                                           // 16
    uid = "test";                                                                                                 // 17
    (storage = window.localStorage).setItem(uid, uid);                                                            // 18
    fail = (storage.getItem(uid) !== uid);                                                                        // 19
    storage.removeItem(uid);                                                                                      // 20
    if (fail) {                                                                                                   // 21
      storage = false;                                                                                            // 22
    }                                                                                                             // 23
  } catch(e) {                                                                                                    // 24
    console.log("Error initializing storage for FS.HTTP");                                                        // 25
    console.log(e);                                                                                               // 26
  }                                                                                                               // 27
                                                                                                                  // 28
  return storage;                                                                                                 // 29
};                                                                                                                // 30
                                                                                                                  // 31
// get our storage if found                                                                                       // 32
FS.HTTP.storage = FS.HTTP._storage();                                                                             // 33
                                                                                                                  // 34
FS.HTTP._prefix = 'fsHTTP.';                                                                                      // 35
                                                                                                                  // 36
FS.HTTP._serverTimeDiff = 0; // Time difference in ms                                                             // 37
                                                                                                                  // 38
if (FS.HTTP.storage) {                                                                                            // 39
  // Initialize the FS.HTTP._serverTimeDiff                                                                       // 40
  FS.HTTP._serverTimeDiff = (1*FS.HTTP.storage.getItem(FS.HTTP._prefix+'timeDiff')) || 0;                         // 41
  // At client startup we figure out the time difference between server and                                       // 42
  // client time - this includes lag and timezone                                                                 // 43
  Meteor.startup(function() {                                                                                     // 44
    // Call the server method an get server time                                                                  // 45
    HTTP.get('/cfs/servertime', function(error, result) {                                                         // 46
      if (!error) {                                                                                               // 47
        // Update our server time diff                                                                            // 48
        var dateNew = new Date(+result.content);                                                                  // 49
        FS.HTTP._serverTimeDiff = dateNew - Date.now();// - lag or/and timezone                                   // 50
        // Update the localstorage                                                                                // 51
        FS.HTTP.storage.setItem(FS.HTTP._prefix + 'timeDiff', FS.HTTP._serverTimeDiff);                           // 52
      } else {                                                                                                    // 53
      	console.log(error.message);                                                                                // 54
      }                                                                                                           // 55
    }); // EO Server call                                                                                         // 56
  });                                                                                                             // 57
}                                                                                                                 // 58
                                                                                                                  // 59
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cfs-access-point'] = {};

})();

//# sourceMappingURL=e83dc55947bb1511a58df06a1efb67c4ce583fc9.map
