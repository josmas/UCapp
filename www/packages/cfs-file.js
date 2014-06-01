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
var Deps = Package.deps.Deps;
var check = Package.check.check;
var Match = Package.check.Match;
var DDP = Package.livedata.DDP;
var HTTP = Package.http.HTTP;
var DataMan = Package['data-man'].DataMan;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/cfs-file/fsFile-common.js                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
/**                                                                                                               // 1
 * @method FS.File                                                                                                // 2
 * @namespace FS.File                                                                                             // 3
 * @public                                                                                                        // 4
 * @constructor                                                                                                   // 5
 * @param {object|FS.File|data to attach} [ref] Another FS.File instance, a filerecord, or some data to pass to attachData
 */                                                                                                               // 7
FS.File = function(ref, createdByTransform) {                                                                     // 8
  var self = this;                                                                                                // 9
                                                                                                                  // 10
  self.createdByTransform = !!createdByTransform;                                                                 // 11
                                                                                                                  // 12
  if (ref instanceof FS.File || isBasicObject(ref)) {                                                             // 13
    // Extend self with filerecord related data                                                                   // 14
    FS.Utility.extend(self, FS.Utility.cloneFileRecord(ref, {full: true}));                                       // 15
  } else if (ref) {                                                                                               // 16
    self.attachData(ref);                                                                                         // 17
  }                                                                                                               // 18
};                                                                                                                // 19
                                                                                                                  // 20
/**                                                                                                               // 21
 * @method FS.File.prototype.attachData                                                                           // 22
 * @public                                                                                                        // 23
 * @param {File|Blob|Buffer|ArrayBuffer|Uint8Array|String} data The data that you want to attach to the file.     // 24
 * @param {Object} [options] Options                                                                              // 25
 * @param {String} [options.type] The data content (MIME) type, if known.                                         // 26
 * @param {Function} [callback] Callback function, callback(error). On the client, a callback is required if data is a URL.
 * @returns {FS.File} This FS.File instance.                                                                      // 28
 */                                                                                                               // 29
FS.File.prototype.attachData = function fsFileAttachData(data, options, callback) {                               // 30
  var self = this;                                                                                                // 31
                                                                                                                  // 32
  if (!callback && typeof options === "function") {                                                               // 33
    callback = options;                                                                                           // 34
    options = {};                                                                                                 // 35
  }                                                                                                               // 36
  options = options || {};                                                                                        // 37
                                                                                                                  // 38
  if (!data) {                                                                                                    // 39
    throw new Error('FS.File.attachData requires a data argument with some data');                                // 40
  }                                                                                                               // 41
                                                                                                                  // 42
  // Set any other properties we can determine from the source data                                               // 43
  // File                                                                                                         // 44
  if (typeof File !== "undefined" && data instanceof File) {                                                      // 45
    self.name(data.name)                                                                                          // 46
    self.updatedAt(data.lastModifiedDate);                                                                        // 47
    self.size(data.size);                                                                                         // 48
    setData(data.type);                                                                                           // 49
  }                                                                                                               // 50
  // Blob                                                                                                         // 51
  else if (typeof Blob !== "undefined" && data instanceof Blob) {                                                 // 52
    self.updatedAt(new Date);                                                                                     // 53
    self.size(data.size);                                                                                         // 54
    setData(data.type);                                                                                           // 55
  }                                                                                                               // 56
  // URL: we need to do a HEAD request to get the type because type                                               // 57
  // is required for filtering to work.                                                                           // 58
  else if (typeof data === "string" && (data.slice(0, 5) === "http:" || data.slice(0, 6) === "https:")) {         // 59
    if (!callback) {                                                                                              // 60
      if (Meteor.isClient) {                                                                                      // 61
        throw new Error('FS.File.attachData requires a callback when attaching a URL on the client');             // 62
      }                                                                                                           // 63
      var result = Meteor.call('_cfs_getUrlInfo', data);                                                          // 64
      FS.Utility.extend(self, {original: result});                                                                // 65
      setData(result.type);                                                                                       // 66
    } else {                                                                                                      // 67
      Meteor.call('_cfs_getUrlInfo', data, function (error, result) {                                             // 68
        FS.debug && console.log("URL HEAD RESULT:", result);                                                      // 69
        if (error) {                                                                                              // 70
          callback(error);                                                                                        // 71
        } else {                                                                                                  // 72
          FS.Utility.extend(self, {original: result});                                                            // 73
          setData(result.type);                                                                                   // 74
        }                                                                                                         // 75
      });                                                                                                         // 76
    }                                                                                                             // 77
  }                                                                                                               // 78
  // Everything else                                                                                              // 79
  else {                                                                                                          // 80
    setData(options.type);                                                                                        // 81
  }                                                                                                               // 82
                                                                                                                  // 83
  // Set the data                                                                                                 // 84
  function setData(type) {                                                                                        // 85
    self.data = new DataMan(data, type);                                                                          // 86
                                                                                                                  // 87
    // Update the type to match what the data is                                                                  // 88
    self.type(self.data.type());                                                                                  // 89
                                                                                                                  // 90
    // Update the size to match what the data is.                                                                 // 91
    // It's always safe to call self.data.size() without supplying a callback                                     // 92
    // because it requires a callback only for URLs on the client, and we                                         // 93
    // already added size for URLs when we got the result from '_cfs_getUrlInfo' method.                          // 94
    if (!self.size()) {                                                                                           // 95
      if (callback) {                                                                                             // 96
        self.data.size(function (error, size) {                                                                   // 97
          if (error) {                                                                                            // 98
            callback && callback(error);                                                                          // 99
          } else {                                                                                                // 100
            self.size(size);                                                                                      // 101
            setName();                                                                                            // 102
          }                                                                                                       // 103
        });                                                                                                       // 104
      } else {                                                                                                    // 105
        self.size(self.data.size());                                                                              // 106
        setName();                                                                                                // 107
      }                                                                                                           // 108
    } else {                                                                                                      // 109
      setName();                                                                                                  // 110
    }                                                                                                             // 111
  }                                                                                                               // 112
                                                                                                                  // 113
  function setName() {                                                                                            // 114
    // See if we can extract a file name from URL or filepath                                                     // 115
    if (!self.name() && typeof data === "string") {                                                               // 116
      // name from URL                                                                                            // 117
      if (data.slice(0, 5) === "http:" || data.slice(0, 6) === "https:") {                                        // 118
        if (FS.Utility.getFileExtension(data).length) {                                                           // 119
          // for a URL we assume the end is a filename only if it has an extension                                // 120
          self.name(FS.Utility.getFileName(data));                                                                // 121
        }                                                                                                         // 122
      }                                                                                                           // 123
      // name from filepath                                                                                       // 124
      else if (data.slice(0, 5) !== "data:") {                                                                    // 125
        self.name(FS.Utility.getFileName(data));                                                                  // 126
      }                                                                                                           // 127
    }                                                                                                             // 128
                                                                                                                  // 129
    callback && callback();                                                                                       // 130
  }                                                                                                               // 131
                                                                                                                  // 132
  return self; //allow chaining                                                                                   // 133
};                                                                                                                // 134
                                                                                                                  // 135
/**                                                                                                               // 136
 * @method FS.File.prototype.uploadProgress                                                                       // 137
 * @public                                                                                                        // 138
 * @returns {number} The server confirmed upload progress                                                         // 139
 */                                                                                                               // 140
FS.File.prototype.uploadProgress = function() {                                                                   // 141
  var self = this;                                                                                                // 142
  // Make sure our file record is updated                                                                         // 143
  self.getFileRecord();                                                                                           // 144
                                                                                                                  // 145
  // If fully uploaded, return 100                                                                                // 146
  if (self.uploadedAt) {                                                                                          // 147
    return 100;                                                                                                   // 148
  }                                                                                                               // 149
  // Otherwise return the confirmed progress or 0                                                                 // 150
  else {                                                                                                          // 151
    return Math.round((self.chunkCount || 0) / (self.chunkSum || 1) * 100);                                       // 152
  }                                                                                                               // 153
};                                                                                                                // 154
                                                                                                                  // 155
/**                                                                                                               // 156
 * @method FS.File.prototype.controlledByDeps                                                                     // 157
 * @public                                                                                                        // 158
 * @returns {FS.Collection} Returns true if this FS.File is reactive                                              // 159
 *                                                                                                                // 160
 * > Note: Returns true if this FS.File object was created by a FS.Collection                                     // 161
 * > and we are in a reactive computations. What does this mean? Well it should                                   // 162
 * > mean that our fileRecord is fully updated by Meteor and we are mounted on                                    // 163
 * > a collection                                                                                                 // 164
 */                                                                                                               // 165
FS.File.prototype.controlledByDeps = function() {                                                                 // 166
  var self = this;                                                                                                // 167
  return self.createdByTransform && Deps.active;                                                                  // 168
};                                                                                                                // 169
                                                                                                                  // 170
/**                                                                                                               // 171
 * @method FS.File.prototype.getCollection                                                                        // 172
 * @public                                                                                                        // 173
 * @returns {FS.Collection} Returns attached collection or undefined if not mounted                               // 174
 */                                                                                                               // 175
FS.File.prototype.getCollection = function() {                                                                    // 176
  // Get the collection reference                                                                                 // 177
  var self = this;                                                                                                // 178
                                                                                                                  // 179
  // If we already made the link then do no more                                                                  // 180
  if (self.collection) {                                                                                          // 181
    return self.collection;                                                                                       // 182
  }                                                                                                               // 183
                                                                                                                  // 184
  // If we don't have a collectionName then there's not much to do, the file is                                   // 185
  // not mounted yet                                                                                              // 186
  if (!self.collectionName) {                                                                                     // 187
    // Should not throw an error here - could be common that the file is not                                      // 188
    // yet mounted into a collection                                                                              // 189
    return;                                                                                                       // 190
  }                                                                                                               // 191
                                                                                                                  // 192
  // Link the collection to the file                                                                              // 193
  self.collection = FS._collections[self.collectionName];                                                         // 194
                                                                                                                  // 195
  return self.collection; //possibly undefined, but that's desired behavior                                       // 196
};                                                                                                                // 197
                                                                                                                  // 198
/**                                                                                                               // 199
 * @method FS.File.prototype.isMounted                                                                            // 200
 * @public                                                                                                        // 201
 * @returns {FS.Collection} Returns attached collection or undefined if not mounted                               // 202
 */                                                                                                               // 203
FS.File.prototype.isMounted = FS.File.prototype.getCollection;                                                    // 204
                                                                                                                  // 205
/**                                                                                                               // 206
 * @method FS.File.prototype.getFileRecord Returns the fileRecord                                                 // 207
 * @public                                                                                                        // 208
 * @returns {object} The filerecord                                                                               // 209
 */                                                                                                               // 210
FS.File.prototype.getFileRecord = function() {                                                                    // 211
  var self = this;                                                                                                // 212
  // Check if this file object fileRecord is kept updated by Meteor, if so                                        // 213
  // return self                                                                                                  // 214
  if (self.controlledByDeps()) {                                                                                  // 215
    return self;                                                                                                  // 216
  }                                                                                                               // 217
  // Go for manually updating the file record                                                                     // 218
  if (self.isMounted()) {                                                                                         // 219
    FS.debug && console.log('GET FILERECORD: ' + self._id);                                                       // 220
                                                                                                                  // 221
    // Return the fileRecord or an empty object                                                                   // 222
    var fileRecord = self.collection.files.findOne({_id: self._id}) || {};                                        // 223
    FS.Utility.extend(self, fileRecord);                                                                          // 224
    return fileRecord;                                                                                            // 225
  } else {                                                                                                        // 226
    // We return an empty object, this way users can still do `getRecord().size`                                  // 227
    // Without getting an error                                                                                   // 228
    return {};                                                                                                    // 229
  }                                                                                                               // 230
};                                                                                                                // 231
                                                                                                                  // 232
/**                                                                                                               // 233
 * @method FS.File.prototype.update                                                                               // 234
 * @public                                                                                                        // 235
 * @param {modifier} modifier                                                                                     // 236
 * @param {object} [options]                                                                                      // 237
 * @param {function} [callback]                                                                                   // 238
 *                                                                                                                // 239
 * Updates the fileRecord.                                                                                        // 240
 */                                                                                                               // 241
FS.File.prototype.update = function(modifier, options, callback) {                                                // 242
  var self = this;                                                                                                // 243
                                                                                                                  // 244
  FS.debug && console.log('UPDATE: ' + JSON.stringify(modifier));                                                 // 245
                                                                                                                  // 246
  // Make sure we have options and callback                                                                       // 247
  if (!callback && typeof options === 'function') {                                                               // 248
    callback = options;                                                                                           // 249
    options = {};                                                                                                 // 250
  }                                                                                                               // 251
  callback = callback || FS.Utility.defaultCallback;                                                              // 252
                                                                                                                  // 253
  if (!self.isMounted()) {                                                                                        // 254
    callback(new Error("Cannot update a file that is not associated with a collection"));                         // 255
    return;                                                                                                       // 256
  }                                                                                                               // 257
                                                                                                                  // 258
  // Call collection update - File record                                                                         // 259
  return self.collection.files.update({_id: self._id}, modifier, options, function(err, count) {                  // 260
    // Update the fileRecord if it was changed and on the client                                                  // 261
    // The server-side methods will pull the fileRecord if needed                                                 // 262
    if (count > 0 && Meteor.isClient)                                                                             // 263
      self.getFileRecord();                                                                                       // 264
    // Call callback                                                                                              // 265
    callback(err, count);                                                                                         // 266
  });                                                                                                             // 267
};                                                                                                                // 268
                                                                                                                  // 269
/**                                                                                                               // 270
 * @method FS.File.prototype.remove                                                                               // 271
 * @public                                                                                                        // 272
 * @param {Function} [callback]                                                                                   // 273
 * @returns {number} Count                                                                                        // 274
 *                                                                                                                // 275
 * Remove the current file from its FS.Collection                                                                 // 276
 */                                                                                                               // 277
FS.File.prototype.remove = function(callback) {                                                                   // 278
  var self = this;                                                                                                // 279
                                                                                                                  // 280
  FS.debug && console.log('REMOVE: ' + self._id);                                                                 // 281
                                                                                                                  // 282
  callback = callback || FS.Utility.defaultCallback;                                                              // 283
                                                                                                                  // 284
  if (!self.isMounted()) {                                                                                        // 285
    callback(new Error("Cannot remove a file that is not associated with a collection"));                         // 286
    return;                                                                                                       // 287
  }                                                                                                               // 288
                                                                                                                  // 289
  return self.collection.files.remove({_id: self._id}, function(err, res) {                                       // 290
    if (!err) {                                                                                                   // 291
      delete self._id;                                                                                            // 292
      delete self.collection;                                                                                     // 293
      delete self.collectionName;                                                                                 // 294
    }                                                                                                             // 295
    callback(err, res);                                                                                           // 296
  });                                                                                                             // 297
};                                                                                                                // 298
                                                                                                                  // 299
/**                                                                                                               // 300
 * @method FS.File.prototype.moveTo                                                                               // 301
 * @param {FS.Collection} targetCollection                                                                        // 302
 * @private // Marked private until implemented                                                                   // 303
 * @todo Needs to be implemented                                                                                  // 304
 *                                                                                                                // 305
 * Move the file from current collection to another collection                                                    // 306
 *                                                                                                                // 307
 * > Note: Not yet implemented                                                                                    // 308
 */                                                                                                               // 309
                                                                                                                  // 310
/**                                                                                                               // 311
 * @method FS.File.prototype.getExtension Returns the lowercase file extension                                    // 312
 * @public                                                                                                        // 313
 * @deprecated Use the `extension` getter/setter method instead.                                                  // 314
 * @param {Object} [options]                                                                                      // 315
 * @param {String} [options.store] - Store name. Default is the original extension.                               // 316
 * @returns {string} The extension eg.: `jpg` or if not found then an empty string ''                             // 317
 */                                                                                                               // 318
FS.File.prototype.getExtension = function(options) {                                                              // 319
  var self = this;                                                                                                // 320
  return self.extension(options);                                                                                 // 321
};                                                                                                                // 322
                                                                                                                  // 323
function checkContentType(fsFile, storeName, startOfType) {                                                       // 324
  var type;                                                                                                       // 325
  if (storeName && fsFile.hasStored(storeName)) {                                                                 // 326
    type = fsFile.type({store: storeName});                                                                       // 327
  } else {                                                                                                        // 328
    type = fsFile.type();                                                                                         // 329
  }                                                                                                               // 330
  if (typeof type === "string") {                                                                                 // 331
    return type.indexOf(startOfType) === 0;                                                                       // 332
  }                                                                                                               // 333
  return false;                                                                                                   // 334
}                                                                                                                 // 335
                                                                                                                  // 336
/**                                                                                                               // 337
 * @method FS.File.prototype.isImage Is it an image file?                                                         // 338
 * @public                                                                                                        // 339
 * @param {object} [options]                                                                                      // 340
 * @param {string} [options.store] The store we're interested in                                                  // 341
 *                                                                                                                // 342
 * Returns true if the copy of this file in the specified store has an image                                      // 343
 * content type. If the file object is unmounted or doesn't have a copy for                                       // 344
 * the specified store, or if you don't specify a store, this method checks                                       // 345
 * the content type of the original file.                                                                         // 346
 */                                                                                                               // 347
FS.File.prototype.isImage = function(options) {                                                                   // 348
  return checkContentType(this, (options || {}).store, 'image/');                                                 // 349
};                                                                                                                // 350
                                                                                                                  // 351
/**                                                                                                               // 352
 * @method FS.File.prototype.isVideo Is it a video file?                                                          // 353
 * @public                                                                                                        // 354
 * @param {object} [options]                                                                                      // 355
 * @param {string} [options.store] The store we're interested in                                                  // 356
 *                                                                                                                // 357
 * Returns true if the copy of this file in the specified store has a video                                       // 358
 * content type. If the file object is unmounted or doesn't have a copy for                                       // 359
 * the specified store, or if you don't specify a store, this method checks                                       // 360
 * the content type of the original file.                                                                         // 361
 */                                                                                                               // 362
FS.File.prototype.isVideo = function(options) {                                                                   // 363
  return checkContentType(this, (options || {}).store, 'video/');                                                 // 364
};                                                                                                                // 365
                                                                                                                  // 366
/**                                                                                                               // 367
 * @method FS.File.prototype.isAudio Is it an audio file?                                                         // 368
 * @public                                                                                                        // 369
 * @param {object} [options]                                                                                      // 370
 * @param {string} [options.store] The store we're interested in                                                  // 371
 *                                                                                                                // 372
 * Returns true if the copy of this file in the specified store has an audio                                      // 373
 * content type. If the file object is unmounted or doesn't have a copy for                                       // 374
 * the specified store, or if you don't specify a store, this method checks                                       // 375
 * the content type of the original file.                                                                         // 376
 */                                                                                                               // 377
FS.File.prototype.isAudio = function(options) {                                                                   // 378
  return checkContentType(this, (options || {}).store, 'audio/');                                                 // 379
};                                                                                                                // 380
                                                                                                                  // 381
/**                                                                                                               // 382
 * @method FS.File.prototype.formattedSize                                                                        // 383
 * @public                                                                                                        // 384
 * @param  {Object} options                                                                                       // 385
 * @param  {String} [options.store=none,display original file size] Which file do you want to get the size of?    // 386
 * @param  {String} [options.formatString='0.00 b'] The `numeral` format string to use.                           // 387
 * @return {String} The file size formatted as a human readable string and reactively updated.                    // 388
 *                                                                                                                // 389
 * * You must add the `numeral` package to your app before you can use this method.                               // 390
 * * If info is not found or a size can't be determined, it will show 0.                                          // 391
 */                                                                                                               // 392
FS.File.prototype.formattedSize = function fsFileFormattedSize(options) {                                         // 393
  var self = this;                                                                                                // 394
                                                                                                                  // 395
  if (typeof numeral !== "function")                                                                              // 396
    throw new Error("You must add the numeral package if you call FS.File.formattedSize");                        // 397
                                                                                                                  // 398
  options = options || {};                                                                                        // 399
  options = options.hash || options;                                                                              // 400
                                                                                                                  // 401
  var size = self.size(options) || 0;                                                                             // 402
  return numeral(size).format(options.formatString || '0.00 b');                                                  // 403
};                                                                                                                // 404
                                                                                                                  // 405
/**                                                                                                               // 406
 * @method FS.File.prototype.isUploaded Is this file completely uploaded?                                         // 407
 * @public                                                                                                        // 408
 * @returns {boolean} True if the number of uploaded bytes is equal to the file size.                             // 409
 */                                                                                                               // 410
FS.File.prototype.isUploaded = function() {                                                                       // 411
  var self = this;                                                                                                // 412
                                                                                                                  // 413
  // Make sure we use the updated file record                                                                     // 414
  self.getFileRecord();                                                                                           // 415
                                                                                                                  // 416
  return !!self.uploadedAt;                                                                                       // 417
};                                                                                                                // 418
                                                                                                                  // 419
/**                                                                                                               // 420
 * @method FS.File.prototype.hasStored                                                                            // 421
 * @public                                                                                                        // 422
 * @param {string} storeName Name of the store                                                                    // 423
 * @param {boolean} [optimistic=false] In case that the file record is not found, read below                      // 424
 * @returns {boolean} Is a version of this file stored in the given store?                                        // 425
 *                                                                                                                // 426
 * > Note: If the file is not published to the client or simply not found:                                        // 427
 * this method cannot know for sure if it exists or not. The `optimistic`                                         // 428
 * param is the boolean value to return. Are we `optimistic` that the copy                                        // 429
 * could exist. This is the case in `FS.File.url` we are optimistic that the                                      // 430
 * copy supplied by the user exists.                                                                              // 431
 */                                                                                                               // 432
FS.File.prototype.hasStored = function(storeName, optimistic) {                                                   // 433
  var self = this;                                                                                                // 434
  // Make sure we use the updated file record                                                                     // 435
  self.getFileRecord();                                                                                           // 436
  // If we havent the published data then                                                                         // 437
  if (FS.Utility.isEmpty(self.copies)) {                                                                          // 438
    return !!optimistic;                                                                                          // 439
  }                                                                                                               // 440
  if (typeof storeName === "string") {                                                                            // 441
    // Return true only if the `key` property is present, which is not set until                                  // 442
    // storage is complete.                                                                                       // 443
    return !!(self.copies && self.copies[storeName] && self.copies[storeName].key);                               // 444
  }                                                                                                               // 445
  return false;                                                                                                   // 446
};                                                                                                                // 447
                                                                                                                  // 448
// Backwards compatibility                                                                                        // 449
FS.File.prototype.hasCopy = FS.File.prototype.hasStored;                                                          // 450
                                                                                                                  // 451
/**                                                                                                               // 452
 * @method FS.File.prototype.getCopyInfo                                                                          // 453
 * @public                                                                                                        // 454
 * @deprecated Use individual methods with `store` option instead.                                                // 455
 * @param {string} storeName Name of the store for which to get copy info.                                        // 456
 * @returns {Object} The file details, e.g., name, size, key, etc., specific to the copy saved in this store.     // 457
 */                                                                                                               // 458
FS.File.prototype.getCopyInfo = function(storeName) {                                                             // 459
  var self = this;                                                                                                // 460
  // Make sure we use the updated file record                                                                     // 461
  self.getFileRecord();                                                                                           // 462
  return (self.copies && self.copies[storeName]) || null;                                                         // 463
};                                                                                                                // 464
                                                                                                                  // 465
/**                                                                                                               // 466
 * @method FS.File.prototype._getInfo                                                                             // 467
 * @private                                                                                                       // 468
 * @param {String} [storeName] Name of the store for which to get file info. Omit for original file details.      // 469
 * @param {Object} [options]                                                                                      // 470
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first?       // 471
 * @returns {Object} The file details, e.g., name, size, key, etc. If not found, returns an empty object.         // 472
 */                                                                                                               // 473
FS.File.prototype._getInfo = function(storeName, options) {                                                       // 474
  var self = this;                                                                                                // 475
  options = options || {};                                                                                        // 476
                                                                                                                  // 477
  if (options.updateFileRecordFirst) {                                                                            // 478
    // Make sure we use the updated file record                                                                   // 479
    self.getFileRecord();                                                                                         // 480
  }                                                                                                               // 481
                                                                                                                  // 482
  if (storeName) {                                                                                                // 483
    return (self.copies && self.copies[storeName]) || {};                                                         // 484
  } else {                                                                                                        // 485
    return self.original || {};                                                                                   // 486
  }                                                                                                               // 487
};                                                                                                                // 488
                                                                                                                  // 489
/**                                                                                                               // 490
 * @method FS.File.prototype._setInfo                                                                             // 491
 * @private                                                                                                       // 492
 * @param {String} storeName - Name of the store for which to set file info. Non-string will set original file details.
 * @param {String} property - Property to set                                                                     // 494
 * @param {String} value - New value for property                                                                 // 495
 * @returns {undefined}                                                                                           // 496
 */                                                                                                               // 497
FS.File.prototype._setInfo = function(storeName, property, value) {                                               // 498
  var self = this;                                                                                                // 499
  if (typeof storeName === "string") {                                                                            // 500
    self.copies = self.copies || {};                                                                              // 501
    self.copies[storeName] = self.copies[storeName] || {};                                                        // 502
    self.copies[storeName][property] = value;                                                                     // 503
  } else {                                                                                                        // 504
    self.original = self.original || {};                                                                          // 505
    self.original[property] = value;                                                                              // 506
  }                                                                                                               // 507
};                                                                                                                // 508
                                                                                                                  // 509
/**                                                                                                               // 510
 * @method FS.File.prototype.name                                                                                 // 511
 * @public                                                                                                        // 512
 * @param {String|null} [value] - If setting the name, specify the new name as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                      // 514
 * @param {Object} [options.store=none,original] - Get or set the name of the version of the file that was saved in this store. Default is the original file name.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @returns {String|undefined} If setting, returns `undefined`. If getting, returns the file name.                // 517
 */                                                                                                               // 518
FS.File.prototype.name = function(value, options) {                                                               // 519
  var self = this;                                                                                                // 520
                                                                                                                  // 521
  if (!options && ((typeof value === "object" && value !== null) || typeof value === "undefined")) {              // 522
    // GET                                                                                                        // 523
    options = value || {};                                                                                        // 524
    options = options.hash || options; // allow use as UI helper                                                  // 525
    return self._getInfo(options.store, options).name;                                                            // 526
  } else {                                                                                                        // 527
    // SET                                                                                                        // 528
    options = options || {};                                                                                      // 529
    return self._setInfo(options.store, 'name', value);                                                           // 530
  }                                                                                                               // 531
};                                                                                                                // 532
                                                                                                                  // 533
/**                                                                                                               // 534
 * @method FS.File.prototype.extension                                                                            // 535
 * @public                                                                                                        // 536
 * @param {String|null} [value] - If setting the extension, specify the new extension (without period) as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                      // 538
 * @param {Object} [options.store=none,original] - Get or set the extension of the version of the file that was saved in this store. Default is the original file extension.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @returns {String|undefined} If setting, returns `undefined`. If getting, returns the file extension or an empty string if there isn't one.
 */                                                                                                               // 542
FS.File.prototype.extension = function(value, options) {                                                          // 543
  var self = this;                                                                                                // 544
                                                                                                                  // 545
  if (!options && ((typeof value === "object" && value !== null) || typeof value === "undefined")) {              // 546
    // GET                                                                                                        // 547
    options = value || {};                                                                                        // 548
    return FS.Utility.getFileExtension(self.name(options) || '');                                                 // 549
  } else {                                                                                                        // 550
    // SET                                                                                                        // 551
    options = options || {};                                                                                      // 552
    var newName = FS.Utility.setFileExtension(self.name(options) || '', value);                                   // 553
    return self._setInfo(options.store, 'name', newName);                                                         // 554
  }                                                                                                               // 555
};                                                                                                                // 556
                                                                                                                  // 557
/**                                                                                                               // 558
 * @method FS.File.prototype.size                                                                                 // 559
 * @public                                                                                                        // 560
 * @param {Number} [value] - If setting the size, specify the new size in bytes as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                      // 562
 * @param {Object} [options.store=none,original] - Get or set the size of the version of the file that was saved in this store. Default is the original file size.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @returns {Number|undefined} If setting, returns `undefined`. If getting, returns the file size.                // 565
 */                                                                                                               // 566
FS.File.prototype.size = function(value, options) {                                                               // 567
  var self = this;                                                                                                // 568
                                                                                                                  // 569
  if (!options && ((typeof value === "object" && value !== null) || typeof value === "undefined")) {              // 570
    // GET                                                                                                        // 571
    options = value || {};                                                                                        // 572
    options = options.hash || options; // allow use as UI helper                                                  // 573
    return self._getInfo(options.store, options).size;                                                            // 574
  } else {                                                                                                        // 575
    // SET                                                                                                        // 576
    options = options || {};                                                                                      // 577
    return self._setInfo(options.store, 'size', value);                                                           // 578
  }                                                                                                               // 579
};                                                                                                                // 580
                                                                                                                  // 581
/**                                                                                                               // 582
 * @method FS.File.prototype.type                                                                                 // 583
 * @public                                                                                                        // 584
 * @param {String} [value] - If setting the type, specify the new type as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                      // 586
 * @param {Object} [options.store=none,original] - Get or set the type of the version of the file that was saved in this store. Default is the original file type.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @returns {String|undefined} If setting, returns `undefined`. If getting, returns the file type.                // 589
 */                                                                                                               // 590
FS.File.prototype.type = function(value, options) {                                                               // 591
  var self = this;                                                                                                // 592
                                                                                                                  // 593
  if (!options && ((typeof value === "object" && value !== null) || typeof value === "undefined")) {              // 594
    // GET                                                                                                        // 595
    options = value || {};                                                                                        // 596
    options = options.hash || options; // allow use as UI helper                                                  // 597
    return self._getInfo(options.store, options).type;                                                            // 598
  } else {                                                                                                        // 599
    // SET                                                                                                        // 600
    options = options || {};                                                                                      // 601
    return self._setInfo(options.store, 'type', value);                                                           // 602
  }                                                                                                               // 603
};                                                                                                                // 604
                                                                                                                  // 605
/**                                                                                                               // 606
 * @method FS.File.prototype.updatedAt                                                                            // 607
 * @public                                                                                                        // 608
 * @param {String} [value] - If setting updatedAt, specify the new date as the first argument. Otherwise the options argument should be first.
 * @param {Object} [options]                                                                                      // 610
 * @param {Object} [options.store=none,original] - Get or set the last updated date for the version of the file that was saved in this store. Default is the original last updated date.
 * @param {Boolean} [options.updateFileRecordFirst=false] Update this instance with data from the DB first? Applies to getter usage only.
 * @returns {String|undefined} If setting, returns `undefined`. If getting, returns the file's last updated date. // 613
 */                                                                                                               // 614
FS.File.prototype.updatedAt = function(value, options) {                                                          // 615
  var self = this;                                                                                                // 616
                                                                                                                  // 617
  if (!options && ((typeof value === "object" && value !== null && !(value instanceof Date)) || typeof value === "undefined")) {
    // GET                                                                                                        // 619
    options = value || {};                                                                                        // 620
    options = options.hash || options; // allow use as UI helper                                                  // 621
    return self._getInfo(options.store, options).updatedAt;                                                       // 622
  } else {                                                                                                        // 623
    // SET                                                                                                        // 624
    options = options || {};                                                                                      // 625
    return self._setInfo(options.store, 'updatedAt', value);                                                      // 626
  }                                                                                                               // 627
};                                                                                                                // 628
                                                                                                                  // 629
function isBasicObject(obj) {                                                                                     // 630
  return (obj === Object(obj) && Object.getPrototypeOf(obj) === Object.prototype);                                // 631
}                                                                                                                 // 632
                                                                                                                  // 633
// getPrototypeOf polyfill                                                                                        // 634
if (typeof Object.getPrototypeOf !== "function") {                                                                // 635
  if (typeof "".__proto__ === "object") {                                                                         // 636
    Object.getPrototypeOf = function(object) {                                                                    // 637
      return object.__proto__;                                                                                    // 638
    };                                                                                                            // 639
  } else {                                                                                                        // 640
    Object.getPrototypeOf = function(object) {                                                                    // 641
      // May break if the constructor has been tampered with                                                      // 642
      return object.constructor.prototype;                                                                        // 643
    };                                                                                                            // 644
  }                                                                                                               // 645
}                                                                                                                 // 646
                                                                                                                  // 647
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cfs-file'] = {};

})();

//# sourceMappingURL=94e747b53dcd13d471412cfd584bb8d9db91303d.map
