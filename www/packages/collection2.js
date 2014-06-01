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
var SimpleSchema = Package['simple-schema'].SimpleSchema;
var SchemaRegEx = Package['simple-schema'].SchemaRegEx;
var MongoObject = Package['simple-schema'].MongoObject;
var _ = Package.underscore._;
var Deps = Package.deps.Deps;
var check = Package.check.check;
var Match = Package.check.Match;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/collection2/collection2.js                                                         //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
// Extend the schema options allowed by SimpleSchema                                           // 1
SimpleSchema.extendOptions({                                                                   // 2
  index: Match.Optional(Match.OneOf(Number, String, Boolean)),                                 // 3
  unique: Match.Optional(Boolean),                                                             // 4
  denyInsert: Match.Optional(Boolean),                                                         // 5
  denyUpdate: Match.Optional(Boolean)                                                          // 6
});                                                                                            // 7
                                                                                               // 8
// Define some extra validation error messages                                                 // 9
SimpleSchema.messages({                                                                        // 10
  notUnique: "[label] must be unique",                                                         // 11
  insertNotAllowed: "[label] cannot be set during an insert",                                  // 12
  updateNotAllowed: "[label] cannot be set during an update"                                   // 13
});                                                                                            // 14
                                                                                               // 15
/*                                                                                             // 16
 * Public API                                                                                  // 17
 */                                                                                            // 18
                                                                                               // 19
var constructor = Meteor.Collection;                                                           // 20
Meteor.Collection = function c2CollectionConstructor(name, options) {                          // 21
  var self = this, ss;                                                                         // 22
  options = options || {};                                                                     // 23
                                                                                               // 24
  if (options.schema) {                                                                        // 25
    ss = options.schema;                                                                       // 26
    delete options.schema;                                                                     // 27
  }                                                                                            // 28
                                                                                               // 29
  // Set up virtual fields by adding or augmenting the transform                               // 30
  // before calling the constructor                                                            // 31
  if (options.virtualFields) {                                                                 // 32
    options.transform = (function(userTransform, virtualFields) {                              // 33
      return function(doc) {                                                                   // 34
        //add all virtual fields to document whenever it's passed to a callback                // 35
        _.each(virtualFields, function(func, fieldName) {                                      // 36
          doc[fieldName] = func(doc);                                                          // 37
        });                                                                                    // 38
        //support user-supplied transformation function as well                                // 39
        return userTransform ? userTransform(doc) : doc;                                       // 40
      };                                                                                       // 41
    })(options.transform, options.virtualFields);                                              // 42
    delete options.virtualFields;                                                              // 43
  }                                                                                            // 44
                                                                                               // 45
  // Call original Meteor.Collection constructor                                               // 46
  constructor.call(self, name, options);                                                       // 47
                                                                                               // 48
  // Attach schema                                                                             // 49
  ss && self.attachSchema(ss);                                                                 // 50
};                                                                                             // 51
                                                                                               // 52
// Make sure prototype and normal properties are kept                                          // 53
Meteor.Collection.prototype = constructor.prototype;                                           // 54
                                                                                               // 55
for (var prop in constructor) {                                                                // 56
  if (constructor.hasOwnProperty(prop)) {                                                      // 57
    Meteor.Collection[prop] = constructor[prop];                                               // 58
  }                                                                                            // 59
}                                                                                              // 60
                                                                                               // 61
/**                                                                                            // 62
 * Meteor.Collection.prototype.attachSchema                                                    // 63
 * @param  {SimpleSchema|Object} ss - SimpleSchema instance or a schema definition object from which to create a new SimpleSchema instance
 * @return {undefined}                                                                         // 65
 *                                                                                             // 66
 * Use this method to attach a schema to a collection created by another package,              // 67
 * such as Meteor.users. It is most likely unsafe to call this method more than                // 68
 * once for a single collection, or to call this for a collection that had a                   // 69
 * schema object passed to its constructor.                                                    // 70
 */                                                                                            // 71
Meteor.Collection.prototype.attachSchema = function c2AttachSchema(ss) {                       // 72
  var self = this;                                                                             // 73
                                                                                               // 74
  if (!(ss instanceof SimpleSchema)) {                                                         // 75
    ss = new SimpleSchema(ss);                                                                 // 76
  }                                                                                            // 77
                                                                                               // 78
  self._c2 = {};                                                                               // 79
  self._c2._simpleSchema = ss;                                                                 // 80
                                                                                               // 81
  // Loop over fields definitions and ensure collection indexes (server side only)             // 82
  _.each(ss.schema(), function(definition, fieldName) {                                        // 83
    if (Meteor.isServer && 'index' in definition) {                                            // 84
      Meteor.startup(function() {                                                              // 85
        var index = {};                                                                        // 86
        var indexValue = definition['index'];                                                  // 87
        var indexName = 'c2_' + fieldName;                                                     // 88
        if (indexValue === true)                                                               // 89
          indexValue = 1;                                                                      // 90
        index[fieldName] = indexValue;                                                         // 91
        var unique = !!definition.unique && (indexValue === 1 || indexValue === -1);           // 92
        var sparse = !!definition.optional && unique;                                          // 93
        if (indexValue !== false) {                                                            // 94
          self._collection._ensureIndex(index, {                                               // 95
            background: true,                                                                  // 96
            name: indexName,                                                                   // 97
            unique: unique,                                                                    // 98
            sparse: sparse                                                                     // 99
          });                                                                                  // 100
        } else {                                                                               // 101
          try {                                                                                // 102
            self._collection._dropIndex(indexName);                                            // 103
          } catch (err) {                                                                      // 104
            console.warn(indexName + " index does not exist.");                                // 105
          }                                                                                    // 106
        }                                                                                      // 107
      });                                                                                      // 108
    }                                                                                          // 109
  });                                                                                          // 110
                                                                                               // 111
  // Set up additional checks                                                                  // 112
  ss.validator(function() {                                                                    // 113
    var test, totalUsing, totalWillUse, sel;                                                   // 114
    var def = this.definition;                                                                 // 115
    var val = this.value;                                                                      // 116
    var op = this.operator;                                                                    // 117
    var key = this.key;                                                                        // 118
                                                                                               // 119
    if (def.denyInsert && val !== void 0 && !op) {                                             // 120
      // This is an insert of a defined value into a field where denyInsert=true               // 121
      return "insertNotAllowed";                                                               // 122
    }                                                                                          // 123
                                                                                               // 124
    if (def.denyUpdate && op) {                                                                // 125
      // This is an insert of a defined value into a field where denyUpdate=true               // 126
      if (op !== "$set" || (op === "$set" && val !== void 0)) {                                // 127
        return "updateNotAllowed";                                                             // 128
      }                                                                                        // 129
    }                                                                                          // 130
                                                                                               // 131
    // If a developer wants to ensure that a field is `unique` we do a custom                  // 132
    // query to verify that another field with the same value does not exist.                  // 133
    // (_skipClientUniqueCheck is for tests)                                                   // 134
    if (def.unique && !self._skipClientUniqueCheck) {                                          // 135
      // If the value is not set we skip this test for performance reasons. The                // 136
      // authorization is exclusively determined by the `optional` parameter.                  // 137
      if (val === void 0 || val === null)                                                      // 138
        return true;                                                                           // 139
                                                                                               // 140
      // On the server if the field also have an index we rely on MongoDB to do                // 141
      // this verification -- which is a more efficient strategy.                              // 142
      if (Meteor.isServer && [1, -1, true].indexOf(def.index) !== -1)                          // 143
        return true;                                                                           // 144
                                                                                               // 145
      test = {};                                                                               // 146
      test[key] = val;                                                                         // 147
      if (op && op !== "$inc") { //updating                                                    // 148
        sel = _.clone(self._c2._selector);                                                     // 149
        if (!sel) {                                                                            // 150
          return true; //we can't determine whether we have a notUnique error                  // 151
        } else if (typeof sel === "string") {                                                  // 152
          sel = {_id: sel};                                                                    // 153
        }                                                                                      // 154
                                                                                               // 155
        // Find count of docs where this key is already set to this value                      // 156
        totalUsing = self.find(test).count();                                                  // 157
                                                                                               // 158
        // Find count of docs that will be updated, where key                                  // 159
        // is not already equal to val                                                         // 160
        // TODO this will overwrite if key is in selector already;                             // 161
        // need more advanced checking                                                         // 162
        sel[key] = {};                                                                         // 163
        sel[key]["$ne"] = val;                                                                 // 164
        totalWillUse = self.find(sel).count();                                                 // 165
                                                                                               // 166
        // If more than one would have the val after update, it's not unique                   // 167
        return totalUsing + totalWillUse > 1 ? "notUnique" : true;                             // 168
      } else {                                                                                 // 169
        return self.findOne(test) ? "notUnique" : true;                                        // 170
      }                                                                                        // 171
    }                                                                                          // 172
                                                                                               // 173
    return true;                                                                               // 174
  });                                                                                          // 175
                                                                                               // 176
  // First define deny functions to extend doc with the results of clean                       // 177
  // and autovalues. This must be done with "transform: null" or we would be                   // 178
  // extending a clone of doc and therefore have no effect.                                    // 179
  self.deny({                                                                                  // 180
    insert: function(userId, doc) {                                                            // 181
      // If _id has already been added, remove it temporarily if it's                          // 182
      // not explicitly defined in the schema.                                                 // 183
      var id;                                                                                  // 184
      if (Meteor.isServer && doc._id && !ss.allowsKey("_id")) {                                // 185
        id = doc._id;                                                                          // 186
        delete doc._id;                                                                        // 187
      }                                                                                        // 188
                                                                                               // 189
      // Referenced doc is cleaned in place                                                    // 190
      ss.clean(doc, {                                                                          // 191
        isModifier: false,                                                                     // 192
        extendAutoValueContext: {                                                              // 193
          isInsert: true,                                                                      // 194
          isUpdate: false,                                                                     // 195
          isUpsert: false,                                                                     // 196
          userId: userId,                                                                      // 197
          isFromTrustedCode: false                                                             // 198
        }                                                                                      // 199
      });                                                                                      // 200
                                                                                               // 201
      // Add the ID back                                                                       // 202
      if (id) {                                                                                // 203
        doc._id = id;                                                                          // 204
      }                                                                                        // 205
                                                                                               // 206
      return false;                                                                            // 207
    },                                                                                         // 208
    update: function(userId, doc, fields, modifier) {                                          // 209
                                                                                               // 210
      // Referenced modifier is cleaned in place                                               // 211
      ss.clean(modifier, {                                                                     // 212
        isModifier: true,                                                                      // 213
        extendAutoValueContext: {                                                              // 214
          isInsert: false,                                                                     // 215
          isUpdate: true,                                                                      // 216
          isUpsert: false,                                                                     // 217
          userId: userId,                                                                      // 218
          isFromTrustedCode: false                                                             // 219
        }                                                                                      // 220
      });                                                                                      // 221
                                                                                               // 222
      return false;                                                                            // 223
    },                                                                                         // 224
    fetch: [],                                                                                 // 225
    transform: null                                                                            // 226
  });                                                                                          // 227
                                                                                               // 228
  // Second define deny functions to validate again on the server                              // 229
  // for client-initiated inserts and updates. These should be                                 // 230
  // called after the clean/autovalue functions since we're adding                             // 231
  // them after. These must *not* have "transform: null" because                               // 232
  // we need to pass the doc through any transforms to be sure                                 // 233
  // that custom types are properly recognized for type validation.                            // 234
  self.deny({                                                                                  // 235
    insert: function(userId, doc) {                                                            // 236
      var ret = false;                                                                         // 237
      doValidate.call(self, "insert", [doc, {}, function(error) {                              // 238
          if (error) {                                                                         // 239
            ret = true;                                                                        // 240
          }                                                                                    // 241
        }], true, userId, false);                                                              // 242
                                                                                               // 243
      return ret;                                                                              // 244
    },                                                                                         // 245
    update: function(userId, doc, fields, modifier) {                                          // 246
      // NOTE: This will never be an upsert because client-side upserts                        // 247
      // are not allowed once you define allow/deny functions                                  // 248
      var ret = false;                                                                         // 249
      doValidate.call(self, "update", [null, modifier, {}, function(error) {                   // 250
          if (error) {                                                                         // 251
            ret = true;                                                                        // 252
          }                                                                                    // 253
        }], true, userId, false);                                                              // 254
                                                                                               // 255
      return ret;                                                                              // 256
    },                                                                                         // 257
    fetch: []                                                                                  // 258
  });                                                                                          // 259
                                                                                               // 260
  // If insecure package is in use, we need to add allow rules that return                     // 261
  // true. Otherwise, it would seemingly turn off insecure mode.                               // 262
  if (Package && Package.insecure) {                                                           // 263
    self.allow({                                                                               // 264
      insert: function() {                                                                     // 265
        return true;                                                                           // 266
      },                                                                                       // 267
      update: function() {                                                                     // 268
        return true;                                                                           // 269
      },                                                                                       // 270
      fetch: [],                                                                               // 271
      transform: null                                                                          // 272
    });                                                                                        // 273
  }                                                                                            // 274
  // If insecure package is NOT in use, then adding the two deny functions                     // 275
  // does not have any effect on the main app's security paradigm. The                         // 276
  // user will still be required to add at least one allow function of her                     // 277
  // own for each operation for this collection. And the user may still add                    // 278
  // additional deny functions, but does not have to.                                          // 279
};                                                                                             // 280
                                                                                               // 281
Meteor.Collection.prototype.simpleSchema = function c2SS() {                                   // 282
  var self = this;                                                                             // 283
  return self._c2 ? self._c2._simpleSchema : null;                                             // 284
};                                                                                             // 285
                                                                                               // 286
// Wrap DB write operation methods                                                             // 287
_.each(['insert', 'update', 'upsert'], function(methodName) {                                  // 288
  var _super = Meteor.Collection.prototype[methodName];                                        // 289
  Meteor.Collection.prototype[methodName] = function () {                                      // 290
    var self = this, args = _.toArray(arguments);                                              // 291
    if (self._c2) {                                                                            // 292
      args = doValidate.call(self, methodName, args, false,                                    // 293
        (Meteor.isClient && Meteor.userId && Meteor.userId()) || null, Meteor.isServer);       // 294
      if (!args) {                                                                             // 295
        // doValidate already called the callback or threw the error                           // 296
        if (methodName === "insert") {                                                         // 297
          // insert should always return an ID to match core behavior                          // 298
          return self._makeNewID();                                                            // 299
        } else {                                                                               // 300
          return;                                                                              // 301
        }                                                                                      // 302
      }                                                                                        // 303
    }                                                                                          // 304
    return _super.apply(self, args);                                                           // 305
  };                                                                                           // 306
});                                                                                            // 307
                                                                                               // 308
/*                                                                                             // 309
 * Private                                                                                     // 310
 */                                                                                            // 311
                                                                                               // 312
function doValidate(type, args, skipAutoValue, userId, isFromTrustedCode) {                    // 313
  var self = this,                                                                             // 314
          schema = self._c2._simpleSchema,                                                     // 315
          doc, callback, error, options, isUpsert;                                             // 316
                                                                                               // 317
  if (!args.length) {                                                                          // 318
    throw new Error(type + " requires an argument");                                           // 319
  }                                                                                            // 320
                                                                                               // 321
  // Gather arguments and cache the selector                                                   // 322
  self._c2._selector = null; //reset                                                           // 323
  if (type === "insert") {                                                                     // 324
    doc = args[0];                                                                             // 325
    options = args[1];                                                                         // 326
    callback = args[2];                                                                        // 327
                                                                                               // 328
    // The real insert doesn't take options                                                    // 329
    if (typeof options === "function") {                                                       // 330
      args = [doc, options];                                                                   // 331
    } else if (typeof callback === "function") {                                               // 332
      args = [doc, callback];                                                                  // 333
    } else {                                                                                   // 334
      args = [doc];                                                                            // 335
    }                                                                                          // 336
                                                                                               // 337
  } else if (type === "update" || type === "upsert") {                                         // 338
    self._c2._selector = args[0];                                                              // 339
    doc = args[1];                                                                             // 340
    options = args[2];                                                                         // 341
    callback = args[3];                                                                        // 342
  } else {                                                                                     // 343
    throw new Error("invalid type argument");                                                  // 344
  }                                                                                            // 345
                                                                                               // 346
  // Support missing options arg                                                               // 347
  if (!callback && typeof options === "function") {                                            // 348
    callback = options;                                                                        // 349
    options = {};                                                                              // 350
  }                                                                                            // 351
  options = options || {};                                                                     // 352
                                                                                               // 353
  if (options.validate === false) {                                                            // 354
    return args;                                                                               // 355
  }                                                                                            // 356
                                                                                               // 357
  // If update was called with upsert:true or upsert was called, flag as an upsert             // 358
  isUpsert = (type === "upsert" || (type === "update" && options.upsert === true));            // 359
                                                                                               // 360
  // Add a default callback function if we're on the client and no callback was given          // 361
  if (Meteor.isClient && !callback) {                                                          // 362
    // Client can't block, so it can't report errors by exception,                             // 363
    // only by callback. If they forget the callback, give them a                              // 364
    // default one that logs the error, so they aren't totally                                 // 365
    // baffled if their writes don't work because their database is                            // 366
    // down.                                                                                   // 367
    callback = function(err) {                                                                 // 368
      if (err)                                                                                 // 369
        Meteor._debug(type + " failed: " + (err.reason || err.stack));                         // 370
    };                                                                                         // 371
  }                                                                                            // 372
                                                                                               // 373
  // If _id has already been added, remove it temporarily if it's                              // 374
  // not explicitly defined in the schema.                                                     // 375
  var id;                                                                                      // 376
  if (Meteor.isServer && doc._id && !schema.allowsKey("_id")) {                                // 377
    id = doc._id;                                                                              // 378
    delete doc._id;                                                                            // 379
  }                                                                                            // 380
                                                                                               // 381
  function doClean(docToClean, getAutoValues, filter, autoConvert) {                           // 382
    // Clean the doc/modifier in place (removes any virtual fields added                       // 383
    // by the deny transform, too)                                                             // 384
    schema.clean(docToClean, {                                                                 // 385
      filter: filter,                                                                          // 386
      autoConvert: autoConvert,                                                                // 387
      getAutoValues: getAutoValues,                                                            // 388
      isModifier: (type !== "insert"),                                                         // 389
      extendAutoValueContext: {                                                                // 390
        isInsert: (type === "insert"),                                                         // 391
        isUpdate: (type === "update" && options.upsert !== true),                              // 392
        isUpsert: isUpsert,                                                                    // 393
        userId: userId,                                                                        // 394
        isFromTrustedCode: isFromTrustedCode                                                   // 395
      }                                                                                        // 396
    });                                                                                        // 397
  }                                                                                            // 398
                                                                                               // 399
  // Preliminary cleaning on both client and server. On the server, automatic                  // 400
  // values will also be set at this point.                                                    // 401
  doClean(doc, (Meteor.isServer && !skipAutoValue), true, true);                               // 402
                                                                                               // 403
  // On the server, upserts are possible; SimpleSchema handles upserts pretty                  // 404
  // well by default, but it will not know about the fields in the selector,                   // 405
  // which are also stored in the database if an insert is performed. So we                    // 406
  // will allow these fields to be considered for validation by adding them                    // 407
  // to the $set in the modifier. This is no doubt prone to errors, but there                  // 408
  // probably isn't any better way right now.                                                  // 409
  var docToValidate = _.clone(doc);                                                            // 410
  if (Meteor.isServer && isUpsert && _.isObject(self._c2._selector)) {                         // 411
    var set = docToValidate.$set || {};                                                        // 412
    docToValidate.$set = _.clone(self._c2._selector);                                          // 413
    _.extend(docToValidate.$set, set);                                                         // 414
  }                                                                                            // 415
                                                                                               // 416
  // Set automatic values for validation on the client.                                        // 417
  // On the server, we already updated doc with auto values, but on the client,                // 418
  // we will add them to docToValidate for validation purposes only.                           // 419
  // This is because we want all actual values generated on the server.                        // 420
  if (Meteor.isClient) {                                                                       // 421
    doClean(docToValidate, true, false, false);                                                // 422
  }                                                                                            // 423
                                                                                               // 424
  // Validate doc                                                                              // 425
  var ctx = schema.namedContext(options.validationContext);                                    // 426
  var isValid = ctx.validate(docToValidate, {                                                  // 427
    modifier: (type === "update" || type === "upsert"),                                        // 428
    upsert: isUpsert,                                                                          // 429
    extendedCustomContext: {                                                                   // 430
      isInsert: (type === "insert"),                                                           // 431
      isUpdate: (type === "update" && options.upsert !== true),                                // 432
      isUpsert: isUpsert,                                                                      // 433
      userId: userId,                                                                          // 434
      isFromTrustedCode: isFromTrustedCode                                                     // 435
    }                                                                                          // 436
  });                                                                                          // 437
                                                                                               // 438
  // Clear the cached selector since it is only used during validation                         // 439
  self._c2._selector = null;                                                                   // 440
                                                                                               // 441
  if (isValid) {                                                                               // 442
    // Add the ID back                                                                         // 443
    if (id) {                                                                                  // 444
      doc._id = id;                                                                            // 445
    }                                                                                          // 446
    // Update the args to reflect the cleaned doc                                              // 447
    if (type === "insert") {                                                                   // 448
      args[0] = doc;                                                                           // 449
    } else {                                                                                   // 450
      args[1] = doc;                                                                           // 451
    }                                                                                          // 452
    // If callback, set invalidKey when we get a mongo unique error                            // 453
    var last = args.length - 1;                                                                // 454
    if (typeof args[last] === 'function') {                                                    // 455
      args[last] = wrapCallbackForNotUnique(self, doc, options.validationContext, args[last]); // 456
    }                                                                                          // 457
    return args;                                                                               // 458
  } else {                                                                                     // 459
    var invalidKeys = ctx.invalidKeys();                                                       // 460
    var message = "failed validation";                                                         // 461
    if (invalidKeys.length) {                                                                  // 462
      var badKey = invalidKeys[0].name;                                                        // 463
      message += ": " + badKey + ": " + ctx.keyErrorMessage(badKey);                           // 464
    }                                                                                          // 465
    error = new Error(message);                                                                // 466
    error.invalidKeys = invalidKeys;                                                           // 467
    if (callback) {                                                                            // 468
      // insert/update/upsert pass `false` when there's an error, so we do that                // 469
      callback(error, false);                                                                  // 470
    } else {                                                                                   // 471
      throw error;                                                                             // 472
    }                                                                                          // 473
  }                                                                                            // 474
}                                                                                              // 475
                                                                                               // 476
function wrapCallbackForNotUnique(col, doc, vCtx, cb) {                                        // 477
  return function (error) {                                                                    // 478
    if (error && ((error.name === "MongoError" && error.code === 11001) || error.message.indexOf('MongoError: E11000' !== -1)) && error.message.indexOf('c2_') !== -1) {
      var fName = error.message.split('c2_')[1].split(' ')[0];                                 // 480
      var mDoc = new MongoObject(doc);                                                         // 481
      var info = mDoc.getInfoForKey(fName);                                                    // 482
      var fVal = info ? info.value : void 0;                                                   // 483
      col.simpleSchema().namedContext(vCtx)._invalidKeys.push({                                // 484
        name: fName,                                                                           // 485
        type: 'notUnique',                                                                     // 486
        value: fVal,                                                                           // 487
        message: col.simpleSchema().messageForError('notUnique', fName, null, fVal)            // 488
      });                                                                                      // 489
    }                                                                                          // 490
    return cb.apply(this, arguments);                                                          // 491
  };                                                                                           // 492
}                                                                                              // 493
                                                                                               // 494
// Backwards compatibility; Meteor.Collection2 is deprecated                                   // 495
Meteor.Collection2 = Meteor.Collection;                                                        // 496
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.collection2 = {};

})();

//# sourceMappingURL=c5dee5a20521c7b3b076f05be20049f9ddc483a7.map
