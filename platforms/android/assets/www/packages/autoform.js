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
var _ = Package.underscore._;
var Deps = Package.deps.Deps;
var Template = Package.templating.Template;
var moment = Package.moment.moment;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var SimpleSchema = Package['simple-schema'].SimpleSchema;
var SchemaRegEx = Package['simple-schema'].SchemaRegEx;
var MongoObject = Package['simple-schema'].MongoObject;
var DDP = Package.livedata.DDP;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var AutoForm, Utility, FormPreserve, res, Hooks;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/bootstrap3/template.bootstrap3.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("quickForm_bootstrap3", (function() {                                                              // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return Spacebars.TemplateWith(function() {                                                                           // 5
    return Spacebars.call(Spacebars.dot(self.lookup("."), "qfAutoFormContext"));                                       // 6
  }, UI.block(function() {                                                                                             // 7
    var self = this;                                                                                                   // 8
    return Spacebars.include(self.lookupTemplate("autoForm"), UI.block(function() {                                    // 9
      var self = this;                                                                                                 // 10
      return [ "\n    ", UI.Each(function() {                                                                          // 11
        return Spacebars.call(Spacebars.dot(self.lookup("."), "qfFormFields"));                                        // 12
      }, UI.block(function() {                                                                                         // 13
        var self = this;                                                                                               // 14
        return [ "\n    ", Spacebars.include(self.lookupTemplate("afQuickField")), "\n    " ];                         // 15
      })), "\n    ", UI.If(function() {                                                                                // 16
        return Spacebars.call(Spacebars.dot(self.lookup("."), "qfNeedsButton"));                                       // 17
      }, UI.block(function() {                                                                                         // 18
        var self = this;                                                                                               // 19
        return [ "\n    ", HTML.DIV("\n      ", HTML.BUTTON({                                                          // 20
          $dynamic: [ function() {                                                                                     // 21
            return Spacebars.attrMustache(self.lookup("submitButtonAtts"));                                            // 22
          } ]                                                                                                          // 23
        }, "\n      ", Spacebars.With(function() {                                                                     // 24
          return Spacebars.call(Spacebars.dot(self.lookup("."), "buttonContent"));                                     // 25
        }, UI.block(function() {                                                                                       // 26
          var self = this;                                                                                             // 27
          return [ "\n      ", function() {                                                                            // 28
            return Spacebars.mustache(self.lookup("."));                                                               // 29
          }, "\n      " ];                                                                                             // 30
        }), UI.block(function() {                                                                                      // 31
          var self = this;                                                                                             // 32
          return "\n      Submit\n      ";                                                                             // 33
        })), "\n      "), "\n    "), "\n    " ];                                                                       // 34
      })), "\n  " ];                                                                                                   // 35
    }));                                                                                                               // 36
  }));                                                                                                                 // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
Template.__define__("afFieldLabel_bootstrap3", (function() {                                                           // 40
  var self = this;                                                                                                     // 41
  var template = this;                                                                                                 // 42
  return HTML.LABEL({                                                                                                  // 43
    $dynamic: [ function() {                                                                                           // 44
      return Spacebars.attrMustache(self.lookup("atts"));                                                              // 45
    } ]                                                                                                                // 46
  }, function() {                                                                                                      // 47
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 48
  });                                                                                                                  // 49
}));                                                                                                                   // 50
                                                                                                                       // 51
Template.__define__("_afCheckbox_bootstrap3", (function() {                                                            // 52
  var self = this;                                                                                                     // 53
  var template = this;                                                                                                 // 54
  return HTML.DIV({                                                                                                    // 55
    "class": "checkbox"                                                                                                // 56
  }, HTML.LABEL(HTML.INPUT({                                                                                           // 57
    type: "checkbox",                                                                                                  // 58
    "data-schema-key": function() {                                                                                    // 59
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 60
    },                                                                                                                 // 61
    name: function() {                                                                                                 // 62
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 63
    },                                                                                                                 // 64
    value: function() {                                                                                                // 65
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                             // 66
    },                                                                                                                 // 67
    $dynamic: [ function() {                                                                                           // 68
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "checked"));                                       // 69
    }, function() {                                                                                                    // 70
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 71
    } ]                                                                                                                // 72
  }), function() {                                                                                                     // 73
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 74
  }));                                                                                                                 // 75
}));                                                                                                                   // 76
                                                                                                                       // 77
Template.__define__("afCheckbox_bootstrap3", (function() {                                                             // 78
  var self = this;                                                                                                     // 79
  var template = this;                                                                                                 // 80
  return Spacebars.include(self.lookupTemplate("_afCheckbox_bootstrap3"));                                             // 81
}));                                                                                                                   // 82
                                                                                                                       // 83
Template.__define__("afCheckboxGroup_bootstrap3", (function() {                                                        // 84
  var self = this;                                                                                                     // 85
  var template = this;                                                                                                 // 86
  return UI.Each(function() {                                                                                          // 87
    return Spacebars.call(Spacebars.dot(self.lookup("."), "items"));                                                   // 88
  }, UI.block(function() {                                                                                             // 89
    var self = this;                                                                                                   // 90
    return [ "\n    ", Spacebars.include(self.lookupTemplate("_afCheckbox_bootstrap3")), "\n  " ];                     // 91
  }));                                                                                                                 // 92
}));                                                                                                                   // 93
                                                                                                                       // 94
Template.__define__("_afRadio_bootstrap3", (function() {                                                               // 95
  var self = this;                                                                                                     // 96
  var template = this;                                                                                                 // 97
  return HTML.DIV({                                                                                                    // 98
    "class": "radio"                                                                                                   // 99
  }, HTML.LABEL({                                                                                                      // 100
    "for": function() {                                                                                                // 101
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 102
    }                                                                                                                  // 103
  }, HTML.INPUT({                                                                                                      // 104
    type: "radio",                                                                                                     // 105
    "data-schema-key": function() {                                                                                    // 106
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 107
    },                                                                                                                 // 108
    name: function() {                                                                                                 // 109
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 110
    },                                                                                                                 // 111
    value: function() {                                                                                                // 112
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                             // 113
    },                                                                                                                 // 114
    $dynamic: [ function() {                                                                                           // 115
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "checked"));                                       // 116
    }, function() {                                                                                                    // 117
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 118
    } ]                                                                                                                // 119
  }), function() {                                                                                                     // 120
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 121
  }));                                                                                                                 // 122
}));                                                                                                                   // 123
                                                                                                                       // 124
Template.__define__("afRadio_bootstrap3", (function() {                                                                // 125
  var self = this;                                                                                                     // 126
  var template = this;                                                                                                 // 127
  return Spacebars.include(self.lookupTemplate("_afRadio_bootstrap3"));                                                // 128
}));                                                                                                                   // 129
                                                                                                                       // 130
Template.__define__("afRadioGroup_bootstrap3", (function() {                                                           // 131
  var self = this;                                                                                                     // 132
  var template = this;                                                                                                 // 133
  return UI.Each(function() {                                                                                          // 134
    return Spacebars.call(Spacebars.dot(self.lookup("."), "items"));                                                   // 135
  }, UI.block(function() {                                                                                             // 136
    var self = this;                                                                                                   // 137
    return [ "\n  ", Spacebars.include(self.lookupTemplate("_afRadio_bootstrap3")), "\n  " ];                          // 138
  }));                                                                                                                 // 139
}));                                                                                                                   // 140
                                                                                                                       // 141
Template.__define__("afContenteditable_bootstrap3", (function() {                                                      // 142
  var self = this;                                                                                                     // 143
  var template = this;                                                                                                 // 144
  return Spacebars.include(self.lookupTemplate("afContenteditable_plain"));                                            // 145
}));                                                                                                                   // 146
                                                                                                                       // 147
Template.__define__("afFieldSelect_bootstrap3", (function() {                                                          // 148
  var self = this;                                                                                                     // 149
  var template = this;                                                                                                 // 150
  return HTML.SELECT({                                                                                                 // 151
    "data-schema-key": function() {                                                                                    // 152
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 153
    },                                                                                                                 // 154
    name: function() {                                                                                                 // 155
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 156
    },                                                                                                                 // 157
    "class": [ function() {                                                                                            // 158
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "cls"));                                               // 159
    }, " form-control" ],                                                                                              // 160
    $dynamic: [ function() {                                                                                           // 161
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 162
    } ]                                                                                                                // 163
  }, "\n    ", Spacebars.include(self.lookupTemplate("contentBlock")), "\n  ");                                        // 164
}));                                                                                                                   // 165
                                                                                                                       // 166
Template.__define__("afSelect_bootstrap3", (function() {                                                               // 167
  var self = this;                                                                                                     // 168
  var template = this;                                                                                                 // 169
  return HTML.SELECT({                                                                                                 // 170
    "data-schema-key": function() {                                                                                    // 171
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 172
    },                                                                                                                 // 173
    name: function() {                                                                                                 // 174
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 175
    },                                                                                                                 // 176
    "class": [ function() {                                                                                            // 177
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "cls"));                                               // 178
    }, " form-control" ],                                                                                              // 179
    $dynamic: [ function() {                                                                                           // 180
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 181
    } ]                                                                                                                // 182
  }, "\n    ", Spacebars.With(function() {                                                                             // 183
    return Spacebars.call(Spacebars.dot(self.lookup("."), "firstOption"));                                             // 184
  }, UI.block(function() {                                                                                             // 185
    var self = this;                                                                                                   // 186
    return [ "\n    ", HTML.OPTION({                                                                                   // 187
      value: ""                                                                                                        // 188
    }, function() {                                                                                                    // 189
      return Spacebars.mustache(self.lookup("."));                                                                     // 190
    }), "\n    " ];                                                                                                    // 191
  })), "\n    ", UI.Each(function() {                                                                                  // 192
    return Spacebars.call(Spacebars.dot(self.lookup("."), "items"));                                                   // 193
  }, UI.block(function() {                                                                                             // 194
    var self = this;                                                                                                   // 195
    return [ "\n      ", HTML.OPTION({                                                                                 // 196
      value: function() {                                                                                              // 197
        return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                           // 198
      },                                                                                                               // 199
      $dynamic: [ function() {                                                                                         // 200
        return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "selected"));                                    // 201
      } ]                                                                                                              // 202
    }, function() {                                                                                                    // 203
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                             // 204
    }), "\n    " ];                                                                                                    // 205
  })), "\n  ");                                                                                                        // 206
}));                                                                                                                   // 207
                                                                                                                       // 208
Template.__define__("afTextarea_bootstrap3", (function() {                                                             // 209
  var self = this;                                                                                                     // 210
  var template = this;                                                                                                 // 211
  return HTML.TEXTAREA({                                                                                               // 212
    "data-schema-key": function() {                                                                                    // 213
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 214
    },                                                                                                                 // 215
    name: function() {                                                                                                 // 216
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 217
    },                                                                                                                 // 218
    "class": [ function() {                                                                                            // 219
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "cls"));                                               // 220
    }, " form-control" ],                                                                                              // 221
    $dynamic: [ function() {                                                                                           // 222
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 223
    } ]                                                                                                                // 224
  }, function() {                                                                                                      // 225
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                               // 226
  });                                                                                                                  // 227
}));                                                                                                                   // 228
                                                                                                                       // 229
Template.__define__("afInput_bootstrap3", (function() {                                                                // 230
  var self = this;                                                                                                     // 231
  var template = this;                                                                                                 // 232
  return HTML.INPUT({                                                                                                  // 233
    type: function() {                                                                                                 // 234
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "type"));                                              // 235
    },                                                                                                                 // 236
    "data-schema-key": function() {                                                                                    // 237
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 238
    },                                                                                                                 // 239
    name: function() {                                                                                                 // 240
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 241
    },                                                                                                                 // 242
    "class": [ function() {                                                                                            // 243
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "cls"));                                               // 244
    }, " form-control" ],                                                                                              // 245
    value: function() {                                                                                                // 246
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                             // 247
    },                                                                                                                 // 248
    $dynamic: [ function() {                                                                                           // 249
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 250
    } ]                                                                                                                // 251
  });                                                                                                                  // 252
}));                                                                                                                   // 253
                                                                                                                       // 254
Template.__define__("afDeleteButton_bootstrap3", (function() {                                                         // 255
  var self = this;                                                                                                     // 256
  var template = this;                                                                                                 // 257
  return Spacebars.TemplateWith(function() {                                                                           // 258
    return {                                                                                                           // 259
      collection: Spacebars.call(Spacebars.dot(self.lookup("."), "collection")),                                       // 260
      type: Spacebars.call("remove"),                                                                                  // 261
      doc: Spacebars.call(Spacebars.dot(self.lookup("."), "doc"))                                                      // 262
    };                                                                                                                 // 263
  }, UI.block(function() {                                                                                             // 264
    var self = this;                                                                                                   // 265
    return Spacebars.include(self.lookupTemplate("autoForm"), UI.block(function() {                                    // 266
      var self = this;                                                                                                 // 267
      return [ "\n  ", HTML.BUTTON({                                                                                   // 268
        type: "submit",                                                                                                // 269
        $dynamic: [ function() {                                                                                       // 270
          return Spacebars.attrMustache(self.lookup("atts"));                                                          // 271
        } ]                                                                                                            // 272
      }, UI.If(function() {                                                                                            // 273
        return Spacebars.call(Spacebars.dot(self.lookup(".."), "contentBlock"));                                       // 274
      }, UI.block(function() {                                                                                         // 275
        var self = this;                                                                                               // 276
        return Spacebars.include(function() {                                                                          // 277
          return Spacebars.dot(self.lookup(".."), "contentBlock");                                                     // 278
        });                                                                                                            // 279
      }), UI.block(function() {                                                                                        // 280
        var self = this;                                                                                               // 281
        return "Delete";                                                                                               // 282
      }))), "\n  " ];                                                                                                  // 283
    }));                                                                                                               // 284
  }));                                                                                                                 // 285
}));                                                                                                                   // 286
                                                                                                                       // 287
Template.__define__("afQuickField_bootstrap3", (function() {                                                           // 288
  var self = this;                                                                                                     // 289
  var template = this;                                                                                                 // 290
  return HTML.DIV({                                                                                                    // 291
    "class": [ "form-group ", UI.If(function() {                                                                       // 292
      return Spacebars.dataMustache(self.lookup("afFieldIsInvalid"), Spacebars.kw({                                    // 293
        name: Spacebars.dot(self.lookup("."), "atts", "name"),                                                         // 294
        autoform: Spacebars.dot(self.lookup("."), "atts", "autoform")                                                  // 295
      }));                                                                                                             // 296
    }, UI.block(function() {                                                                                           // 297
      var self = this;                                                                                                 // 298
      return "has-error";                                                                                              // 299
    })) ]                                                                                                              // 300
  }, "\n    ", UI.Unless(function() {                                                                                  // 301
    return Spacebars.call(Spacebars.dot(self.lookup("."), "skipLabel"));                                               // 302
  }, UI.block(function() {                                                                                             // 303
    var self = this;                                                                                                   // 304
    return [ "\n    ", Spacebars.TemplateWith(function() {                                                             // 305
      return Spacebars.call(Spacebars.dot(self.lookup("."), "afFieldLabelAtts"));                                      // 306
    }, UI.block(function() {                                                                                           // 307
      var self = this;                                                                                                 // 308
      return Spacebars.include(self.lookupTemplate("afFieldLabel"));                                                   // 309
    })), "\n    " ];                                                                                                   // 310
  })), "\n    ", Spacebars.TemplateWith(function() {                                                                   // 311
    return Spacebars.call(Spacebars.dot(self.lookup("."), "afFieldInputAtts"));                                        // 312
  }, UI.block(function() {                                                                                             // 313
    var self = this;                                                                                                   // 314
    return Spacebars.include(self.lookupTemplate("afFieldInput"));                                                     // 315
  })), "\n    ", HTML.SPAN({                                                                                           // 316
    "class": "help-block"                                                                                              // 317
  }, function() {                                                                                                      // 318
    return Spacebars.makeRaw(Spacebars.mustache(self.lookup("afFieldMessage"), Spacebars.kw({                          // 319
      name: Spacebars.dot(self.lookup("."), "atts", "name"),                                                           // 320
      autoform: Spacebars.dot(self.lookup("."), "atts", "autoform")                                                    // 321
    })));                                                                                                              // 322
  }), "\n  ");                                                                                                         // 323
}));                                                                                                                   // 324
                                                                                                                       // 325
Template.__define__("afObjectField_bootstrap3", (function() {                                                          // 326
  var self = this;                                                                                                     // 327
  var template = this;                                                                                                 // 328
  return HTML.DIV({                                                                                                    // 329
    "class": "panel panel-default"                                                                                     // 330
  }, "\n    ", HTML.DIV({                                                                                              // 331
    "class": "panel-heading"                                                                                           // 332
  }, "\n      ", HTML.H3({                                                                                             // 333
    "class": "panel-title"                                                                                             // 334
  }, function() {                                                                                                      // 335
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 336
  }), "\n    "), "\n    ", HTML.DIV({                                                                                  // 337
    "class": "panel-body"                                                                                              // 338
  }, "\n      ", UI.Each(function() {                                                                                  // 339
    return Spacebars.call(Spacebars.dot(self.lookup("."), "fields"));                                                  // 340
  }, UI.block(function() {                                                                                             // 341
    var self = this;                                                                                                   // 342
    return [ "\n      ", Spacebars.TemplateWith(function() {                                                           // 343
      return Spacebars.call(self.lookup("."));                                                                         // 344
    }, UI.block(function() {                                                                                           // 345
      var self = this;                                                                                                 // 346
      return Spacebars.include(self.lookupTemplate("afQuickField"));                                                   // 347
    })), "\n      " ];                                                                                                 // 348
  })), "\n    "), "\n  ");                                                                                             // 349
}));                                                                                                                   // 350
                                                                                                                       // 351
Template.__define__("afArrayField_bootstrap3", (function() {                                                           // 352
  var self = this;                                                                                                     // 353
  var template = this;                                                                                                 // 354
  return HTML.DIV({                                                                                                    // 355
    "class": "panel panel-default"                                                                                     // 356
  }, "\n    ", HTML.DIV({                                                                                              // 357
    "class": "panel-heading"                                                                                           // 358
  }, function() {                                                                                                      // 359
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 360
  }), "\n    ", HTML.UL({                                                                                              // 361
    "class": "list-group"                                                                                              // 362
  }, "\n      ", Spacebars.TemplateWith(function() {                                                                   // 363
    return {                                                                                                           // 364
      name: Spacebars.call(Spacebars.dot(self.lookup("."), "name"))                                                    // 365
    };                                                                                                                 // 366
  }, UI.block(function() {                                                                                             // 367
    var self = this;                                                                                                   // 368
    return Spacebars.include(self.lookupTemplate("afEachArrayItem"), UI.block(function() {                             // 369
      var self = this;                                                                                                 // 370
      return [ "\n      ", HTML.LI({                                                                                   // 371
        "class": "list-group-item autoform-array-item"                                                                 // 372
      }, "\n        ", HTML.DIV({                                                                                      // 373
        "class": "media"                                                                                               // 374
      }, "\n          ", UI.If(function() {                                                                            // 375
        return Spacebars.call(Spacebars.dot(self.lookup(".."), "hasMoreThanMinimum"));                                 // 376
      }, UI.block(function() {                                                                                         // 377
        var self = this;                                                                                               // 378
        return [ "\n          ", HTML.BUTTON({                                                                         // 379
          "class": "btn btn-primary autoform-remove-item pull-left",                                                   // 380
          "data-autoform-field": function() {                                                                          // 381
            return Spacebars.mustache(Spacebars.dot(self.lookup(".."), "name"));                                       // 382
          }                                                                                                            // 383
        }, HTML.SPAN({                                                                                                 // 384
          "class": "glyphicon glyphicon-minus"                                                                         // 385
        })), "\n          " ];                                                                                         // 386
      })), "\n          ", HTML.DIV({                                                                                  // 387
        "class": "media-body"                                                                                          // 388
      }, "\n            ", Spacebars.include(self.lookupTemplate("afQuickField")), "\n          "), "\n        "), "\n      "), "\n      " ];
    }));                                                                                                               // 390
  })), "\n      ", UI.If(function() {                                                                                  // 391
    return Spacebars.call(Spacebars.dot(self.lookup("."), "hasLessThanMaximum"));                                      // 392
  }, UI.block(function() {                                                                                             // 393
    var self = this;                                                                                                   // 394
    return [ "\n      ", HTML.LI({                                                                                     // 395
      "class": "list-group-item"                                                                                       // 396
    }, "\n        ", HTML.BUTTON({                                                                                     // 397
      "class": "btn btn-primary autoform-add-item",                                                                    // 398
      "data-autoform-field": function() {                                                                              // 399
        return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                            // 400
      }                                                                                                                // 401
    }, HTML.SPAN({                                                                                                     // 402
      "class": "glyphicon glyphicon-plus"                                                                              // 403
    })), "\n      "), "\n      " ];                                                                                    // 404
  })), "\n    "), "\n  ");                                                                                             // 405
}));                                                                                                                   // 406
                                                                                                                       // 407
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/bootstrap3/bootstrap3.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Template helpers for "bootstrap3" template                                                                          // 2
 */                                                                                                                    // 3
                                                                                                                       // 4
Template['afFieldLabel_bootstrap3'].atts = function bsFieldLabelAtts() {                                               // 5
  var atts = (this || {}).atts;                                                                                        // 6
  var labelAtts = _.omit(atts, 'name', 'autoform', 'template');                                                        // 7
  // Add bootstrap class if necessary                                                                                  // 8
  if (typeof labelAtts['class'] === "string") {                                                                        // 9
    labelAtts['class'] += " control-label"; //might be added twice but that shouldn't hurt anything                    // 10
  } else {                                                                                                             // 11
    labelAtts['class'] = "control-label";                                                                              // 12
  }                                                                                                                    // 13
  // Add "for" attribute if missing                                                                                    // 14
  labelAtts['for'] = labelAtts['for'] || atts['name'];                                                                 // 15
  return labelAtts;                                                                                                    // 16
};                                                                                                                     // 17
                                                                                                                       // 18
Template['afDeleteButton_bootstrap3'].atts = function bsDeleteButtonAtts() {                                           // 19
  var atts = this || {};                                                                                               // 20
  var buttonAtts = _.omit(atts, '_af', 'collection', 'doc', 'contentBlock', 'type');                                   // 21
  // Add bootstrap class if necessary                                                                                  // 22
  if (typeof buttonAtts['class'] === "string") {                                                                       // 23
    buttonAtts['class'] += " btn btn-danger"; //might be added twice but that shouldn't hurt anything                  // 24
  } else {                                                                                                             // 25
    buttonAtts['class'] = "btn btn-danger";                                                                            // 26
  }                                                                                                                    // 27
  return buttonAtts;                                                                                                   // 28
};                                                                                                                     // 29
                                                                                                                       // 30
Template['quickForm_bootstrap3'].submitButtonAtts = function bsQuickFormSubmitButtonAtts() {                           // 31
  var context = this;                                                                                                  // 32
  var atts = {type: "submit"};                                                                                         // 33
  atts['class'] = 'btn btn-primary';                                                                                   // 34
  if (typeof context.buttonClasses === "string") {                                                                     // 35
    atts['class'] += ' ' + context.buttonClasses;                                                                      // 36
  }                                                                                                                    // 37
  return atts;                                                                                                         // 38
};                                                                                                                     // 39
                                                                                                                       // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/bootstrap3-span/template.bootstrap3-span.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("afFieldLabel_bootstrap3-span", (function() {                                                      // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return HTML.SPAN({                                                                                                   // 5
    $dynamic: [ function() {                                                                                           // 6
      return Spacebars.attrMustache(self.lookup("atts"));                                                              // 7
    } ]                                                                                                                // 8
  }, function() {                                                                                                      // 9
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 10
  });                                                                                                                  // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/bootstrap3-span/bootstrap3-span.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Template helpers for "bootstrap3-span" template                                                                     // 2
 */                                                                                                                    // 3
                                                                                                                       // 4
Template['afFieldLabel_bootstrap3-span'].atts = function() {                                                           // 5
  var atts = (_.clone(this || {})).atts;                                                                               // 6
  var spanAtts = _.omit(atts, 'name', 'autoform', 'template');                                                         // 7
  // Add bootstrap class if necessary; TODO use custom templates                                                       // 8
  if (typeof spanAtts['class'] === "string") {                                                                         // 9
    spanAtts['class'] += " control-label"; //might be added twice but that shouldn't hurt anything                     // 10
  } else {                                                                                                             // 11
    spanAtts['class'] = "control-label";                                                                               // 12
  }                                                                                                                    // 13
  return spanAtts;                                                                                                     // 14
};                                                                                                                     // 15
                                                                                                                       // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/bootstrap3-horizontal/template.bootstrap3-horizontal.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("quickForm_bootstrap3-horizontal", (function() {                                                   // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return Spacebars.TemplateWith(function() {                                                                           // 5
    return Spacebars.call(Spacebars.dot(self.lookup("."), "qfAutoFormContext"));                                       // 6
  }, UI.block(function() {                                                                                             // 7
    var self = this;                                                                                                   // 8
    return Spacebars.include(self.lookupTemplate("autoForm"), UI.block(function() {                                    // 9
      var self = this;                                                                                                 // 10
      return [ "\n    ", UI.Each(function() {                                                                          // 11
        return Spacebars.call(Spacebars.dot(self.lookup("."), "qfFormFields"));                                        // 12
      }, UI.block(function() {                                                                                         // 13
        var self = this;                                                                                               // 14
        return [ "\n    ", Spacebars.With(function() {                                                                 // 15
          return Spacebars.dataMustache(self.lookup("qfHorizontalAdjust"), self.lookup(".."));                         // 16
        }, UI.block(function() {                                                                                       // 17
          var self = this;                                                                                             // 18
          return [ "\n    ", Spacebars.include(self.lookupTemplate("afQuickField")), "\n    " ];                       // 19
        })), "\n    " ];                                                                                               // 20
      })), "\n    ", UI.If(function() {                                                                                // 21
        return Spacebars.call(Spacebars.dot(self.lookup("."), "qfNeedsButton"));                                       // 22
      }, UI.block(function() {                                                                                         // 23
        var self = this;                                                                                               // 24
        return [ "\n    ", HTML.DIV("\n      ", HTML.BUTTON({                                                          // 25
          $dynamic: [ function() {                                                                                     // 26
            return Spacebars.attrMustache(self.lookup("submitButtonAtts"));                                            // 27
          } ]                                                                                                          // 28
        }, "\n      ", Spacebars.With(function() {                                                                     // 29
          return Spacebars.call(Spacebars.dot(self.lookup("."), "buttonContent"));                                     // 30
        }, UI.block(function() {                                                                                       // 31
          var self = this;                                                                                             // 32
          return [ "\n      ", function() {                                                                            // 33
            return Spacebars.mustache(self.lookup("."));                                                               // 34
          }, "\n      " ];                                                                                             // 35
        }), UI.block(function() {                                                                                      // 36
          var self = this;                                                                                             // 37
          return "\n      Submit\n      ";                                                                             // 38
        })), "\n      "), "\n    "), "\n    " ];                                                                       // 39
      })), "\n  " ];                                                                                                   // 40
    }));                                                                                                               // 41
  }));                                                                                                                 // 42
}));                                                                                                                   // 43
                                                                                                                       // 44
Template.__define__("afQuickField_bootstrap3-horizontal", (function() {                                                // 45
  var self = this;                                                                                                     // 46
  var template = this;                                                                                                 // 47
  return HTML.DIV({                                                                                                    // 48
    "class": [ "form-group ", UI.If(function() {                                                                       // 49
      return Spacebars.dataMustache(self.lookup("afFieldIsInvalid"), Spacebars.kw({                                    // 50
        name: Spacebars.dot(self.lookup("."), "atts", "name"),                                                         // 51
        autoform: Spacebars.dot(self.lookup("."), "atts", "autoform")                                                  // 52
      }));                                                                                                             // 53
    }, UI.block(function() {                                                                                           // 54
      var self = this;                                                                                                 // 55
      return "has-error";                                                                                              // 56
    })) ]                                                                                                              // 57
  }, "\n    ", UI.Unless(function() {                                                                                  // 58
    return Spacebars.call(Spacebars.dot(self.lookup("."), "skipLabel"));                                               // 59
  }, UI.block(function() {                                                                                             // 60
    var self = this;                                                                                                   // 61
    return [ "\n    ", Spacebars.TemplateWith(function() {                                                             // 62
      return Spacebars.call(self.lookup("afFieldLabelAtts"));                                                          // 63
    }, UI.block(function() {                                                                                           // 64
      var self = this;                                                                                                 // 65
      return Spacebars.include(self.lookupTemplate("afFieldLabel"));                                                   // 66
    })), "\n    " ];                                                                                                   // 67
  })), "\n    ", HTML.DIV({                                                                                            // 68
    "class": function() {                                                                                              // 69
      return Spacebars.mustache(self.lookup("rightColumnClass"));                                                      // 70
    }                                                                                                                  // 71
  }, "\n        ", Spacebars.TemplateWith(function() {                                                                 // 72
    return Spacebars.call(self.lookup("afFieldInputAtts"));                                                            // 73
  }, UI.block(function() {                                                                                             // 74
    var self = this;                                                                                                   // 75
    return Spacebars.include(self.lookupTemplate("afFieldInput"));                                                     // 76
  })), "\n        ", HTML.SPAN({                                                                                       // 77
    "class": "help-block"                                                                                              // 78
  }, function() {                                                                                                      // 79
    return Spacebars.makeRaw(Spacebars.mustache(self.lookup("afFieldMessage"), Spacebars.kw({                          // 80
      name: Spacebars.dot(self.lookup("."), "atts", "name"),                                                           // 81
      autoform: Spacebars.dot(self.lookup("."), "atts", "autoform")                                                    // 82
    })));                                                                                                              // 83
  }), "\n    "), "\n  ");                                                                                              // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/bootstrap3-horizontal/bootstrap3-horizontal.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template["quickForm_bootstrap3-horizontal"].qfHorizontalAdjust = function (afContext) {                                // 1
  var ctx = _.clone(this || {});                                                                                       // 2
  ctx.template = "bootstrap3-horizontal";                                                                              // 3
  ctx['input-col-class'] = afContext['input-col-class'];                                                               // 4
  ctx['label-class'] = afContext['label-class'];                                                                       // 5
  return ctx;                                                                                                          // 6
};                                                                                                                     // 7
                                                                                                                       // 8
Template['quickForm_bootstrap3-horizontal'].submitButtonAtts = function bsQuickFormSubmitButtonAtts() {                // 9
  var context = this;                                                                                                  // 10
  var atts = {type: "submit"};                                                                                         // 11
  atts['class'] = 'btn btn-primary';                                                                                   // 12
  if (typeof context.buttonClasses === "string") {                                                                     // 13
    atts['class'] += ' ' + context.buttonClasses;                                                                      // 14
  }                                                                                                                    // 15
  return atts;                                                                                                         // 16
};                                                                                                                     // 17
                                                                                                                       // 18
Template["afQuickField_bootstrap3-horizontal"].afFieldInputAtts = function () {                                        // 19
  var atts = _.clone(this.afFieldInputAtts || {});                                                                     // 20
  if ('input-col-class' in atts) {                                                                                     // 21
    delete atts['input-col-class'];                                                                                    // 22
  }                                                                                                                    // 23
  atts.template = "bootstrap3";                                                                                        // 24
  return atts;                                                                                                         // 25
};                                                                                                                     // 26
                                                                                                                       // 27
Template["afQuickField_bootstrap3-horizontal"].afFieldLabelAtts = function () {                                        // 28
  var atts = _.clone(this.afFieldLabelAtts || {});                                                                     // 29
  atts.template = "bootstrap3";                                                                                        // 30
  return atts;                                                                                                         // 31
};                                                                                                                     // 32
                                                                                                                       // 33
Template["afQuickField_bootstrap3-horizontal"].rightColumnClass = function () {                                        // 34
  var atts = this.afFieldInputAtts || {};                                                                              // 35
  return atts['input-col-class'] || "";                                                                                // 36
};                                                                                                                     // 37
                                                                                                                       // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/plain/template.plain.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("quickForm_plain", (function() {                                                                   // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return Spacebars.TemplateWith(function() {                                                                           // 5
    return Spacebars.call(Spacebars.dot(self.lookup("."), "qfAutoFormContext"));                                       // 6
  }, UI.block(function() {                                                                                             // 7
    var self = this;                                                                                                   // 8
    return Spacebars.include(self.lookupTemplate("autoForm"), UI.block(function() {                                    // 9
      var self = this;                                                                                                 // 10
      return [ "\n    ", UI.Each(function() {                                                                          // 11
        return Spacebars.call(Spacebars.dot(self.lookup("."), "qfFormFields"));                                        // 12
      }, UI.block(function() {                                                                                         // 13
        var self = this;                                                                                               // 14
        return [ "\n    ", Spacebars.include(self.lookupTemplate("afQuickField")), "\n    " ];                         // 15
      })), "\n    ", UI.If(function() {                                                                                // 16
        return Spacebars.call(Spacebars.dot(self.lookup("."), "qfNeedsButton"));                                       // 17
      }, UI.block(function() {                                                                                         // 18
        var self = this;                                                                                               // 19
        return [ "\n    ", HTML.DIV("\n      ", HTML.BUTTON({                                                          // 20
          $dynamic: [ function() {                                                                                     // 21
            return Spacebars.attrMustache(self.lookup("submitButtonAtts"));                                            // 22
          } ]                                                                                                          // 23
        }, "\n      ", Spacebars.With(function() {                                                                     // 24
          return Spacebars.call(Spacebars.dot(self.lookup("."), "buttonContent"));                                     // 25
        }, UI.block(function() {                                                                                       // 26
          var self = this;                                                                                             // 27
          return [ "\n      ", function() {                                                                            // 28
            return Spacebars.mustache(self.lookup("."));                                                               // 29
          }, "\n      " ];                                                                                             // 30
        }), UI.block(function() {                                                                                      // 31
          var self = this;                                                                                             // 32
          return "\n      Submit\n      ";                                                                             // 33
        })), "\n      "), "\n    "), "\n    " ];                                                                       // 34
      })), "\n  " ];                                                                                                   // 35
    }));                                                                                                               // 36
  }));                                                                                                                 // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
Template.__define__("afFieldLabel_plain", (function() {                                                                // 40
  var self = this;                                                                                                     // 41
  var template = this;                                                                                                 // 42
  return HTML.LABEL({                                                                                                  // 43
    $dynamic: [ function() {                                                                                           // 44
      return Spacebars.attrMustache(self.lookup("atts"));                                                              // 45
    } ]                                                                                                                // 46
  }, function() {                                                                                                      // 47
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 48
  });                                                                                                                  // 49
}));                                                                                                                   // 50
                                                                                                                       // 51
Template.__define__("_afCheckbox_plain", (function() {                                                                 // 52
  var self = this;                                                                                                     // 53
  var template = this;                                                                                                 // 54
  return HTML.DIV(HTML.LABEL({                                                                                         // 55
    "for": function() {                                                                                                // 56
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 57
    }                                                                                                                  // 58
  }, HTML.INPUT({                                                                                                      // 59
    type: "checkbox",                                                                                                  // 60
    "data-schema-key": function() {                                                                                    // 61
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 62
    },                                                                                                                 // 63
    name: function() {                                                                                                 // 64
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 65
    },                                                                                                                 // 66
    value: function() {                                                                                                // 67
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                             // 68
    },                                                                                                                 // 69
    $dynamic: [ function() {                                                                                           // 70
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "checked"));                                       // 71
    }, function() {                                                                                                    // 72
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 73
    } ]                                                                                                                // 74
  }), function() {                                                                                                     // 75
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 76
  }));                                                                                                                 // 77
}));                                                                                                                   // 78
                                                                                                                       // 79
Template.__define__("afCheckbox_plain", (function() {                                                                  // 80
  var self = this;                                                                                                     // 81
  var template = this;                                                                                                 // 82
  return Spacebars.include(self.lookupTemplate("_afCheckbox_plain"));                                                  // 83
}));                                                                                                                   // 84
                                                                                                                       // 85
Template.__define__("afCheckboxGroup_plain", (function() {                                                             // 86
  var self = this;                                                                                                     // 87
  var template = this;                                                                                                 // 88
  return UI.Each(function() {                                                                                          // 89
    return Spacebars.call(Spacebars.dot(self.lookup("."), "items"));                                                   // 90
  }, UI.block(function() {                                                                                             // 91
    var self = this;                                                                                                   // 92
    return [ "\n  ", Spacebars.include(self.lookupTemplate("_afCheckbox_plain")), "\n  " ];                            // 93
  }));                                                                                                                 // 94
}));                                                                                                                   // 95
                                                                                                                       // 96
Template.__define__("_afRadio_plain", (function() {                                                                    // 97
  var self = this;                                                                                                     // 98
  var template = this;                                                                                                 // 99
  return HTML.DIV(HTML.LABEL({                                                                                         // 100
    "for": function() {                                                                                                // 101
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 102
    }                                                                                                                  // 103
  }, HTML.INPUT({                                                                                                      // 104
    type: "checkbox",                                                                                                  // 105
    "data-schema-key": function() {                                                                                    // 106
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 107
    },                                                                                                                 // 108
    name: function() {                                                                                                 // 109
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 110
    },                                                                                                                 // 111
    value: function() {                                                                                                // 112
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                             // 113
    },                                                                                                                 // 114
    $dynamic: [ function() {                                                                                           // 115
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "checked"));                                       // 116
    }, function() {                                                                                                    // 117
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 118
    } ]                                                                                                                // 119
  }), function() {                                                                                                     // 120
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 121
  }));                                                                                                                 // 122
}));                                                                                                                   // 123
                                                                                                                       // 124
Template.__define__("afRadio_plain", (function() {                                                                     // 125
  var self = this;                                                                                                     // 126
  var template = this;                                                                                                 // 127
  return Spacebars.include(self.lookupTemplate("_afRadio_plain"));                                                     // 128
}));                                                                                                                   // 129
                                                                                                                       // 130
Template.__define__("afRadioGroup_plain", (function() {                                                                // 131
  var self = this;                                                                                                     // 132
  var template = this;                                                                                                 // 133
  return UI.Each(function() {                                                                                          // 134
    return Spacebars.call(Spacebars.dot(self.lookup("."), "items"));                                                   // 135
  }, UI.block(function() {                                                                                             // 136
    var self = this;                                                                                                   // 137
    return [ "\n  ", Spacebars.include(self.lookupTemplate("_afRadio_plain")), "\n  " ];                               // 138
  }));                                                                                                                 // 139
}));                                                                                                                   // 140
                                                                                                                       // 141
Template.__define__("afContenteditable_plain", (function() {                                                           // 142
  var self = this;                                                                                                     // 143
  var template = this;                                                                                                 // 144
  return HTML.DIV({                                                                                                    // 145
    contenteditable: "true",                                                                                           // 146
    "data-schema-key": function() {                                                                                    // 147
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 148
    },                                                                                                                 // 149
    name: function() {                                                                                                 // 150
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 151
    },                                                                                                                 // 152
    $dynamic: [ function() {                                                                                           // 153
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 154
    } ]                                                                                                                // 155
  }, function() {                                                                                                      // 156
    return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(self.lookup("."), "value")));                            // 157
  });                                                                                                                  // 158
}));                                                                                                                   // 159
                                                                                                                       // 160
Template.__define__("afFieldSelect_plain", (function() {                                                               // 161
  var self = this;                                                                                                     // 162
  var template = this;                                                                                                 // 163
  return HTML.SELECT({                                                                                                 // 164
    "data-schema-key": function() {                                                                                    // 165
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 166
    },                                                                                                                 // 167
    name: function() {                                                                                                 // 168
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 169
    },                                                                                                                 // 170
    "class": function() {                                                                                              // 171
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "cls"));                                               // 172
    },                                                                                                                 // 173
    $dynamic: [ function() {                                                                                           // 174
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 175
    } ]                                                                                                                // 176
  }, "\n    ", Spacebars.include(self.lookupTemplate("contentBlock")), "\n  ");                                        // 177
}));                                                                                                                   // 178
                                                                                                                       // 179
Template.__define__("afSelect_plain", (function() {                                                                    // 180
  var self = this;                                                                                                     // 181
  var template = this;                                                                                                 // 182
  return HTML.SELECT({                                                                                                 // 183
    "data-schema-key": function() {                                                                                    // 184
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 185
    },                                                                                                                 // 186
    name: function() {                                                                                                 // 187
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 188
    },                                                                                                                 // 189
    "class": function() {                                                                                              // 190
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "cls"));                                               // 191
    },                                                                                                                 // 192
    $dynamic: [ function() {                                                                                           // 193
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 194
    } ]                                                                                                                // 195
  }, "\n    ", Spacebars.With(function() {                                                                             // 196
    return Spacebars.call(Spacebars.dot(self.lookup("."), "firstOption"));                                             // 197
  }, UI.block(function() {                                                                                             // 198
    var self = this;                                                                                                   // 199
    return [ "\n    ", HTML.OPTION({                                                                                   // 200
      value: ""                                                                                                        // 201
    }, function() {                                                                                                    // 202
      return Spacebars.mustache(self.lookup("."));                                                                     // 203
    }), "\n    " ];                                                                                                    // 204
  })), "\n    ", UI.Each(function() {                                                                                  // 205
    return Spacebars.call(Spacebars.dot(self.lookup("."), "items"));                                                   // 206
  }, UI.block(function() {                                                                                             // 207
    var self = this;                                                                                                   // 208
    return [ "\n    ", HTML.OPTION({                                                                                   // 209
      value: function() {                                                                                              // 210
        return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                           // 211
      },                                                                                                               // 212
      $dynamic: [ function() {                                                                                         // 213
        return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "selected"));                                    // 214
      } ]                                                                                                              // 215
    }, function() {                                                                                                    // 216
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                             // 217
    }), "\n    " ];                                                                                                    // 218
  })), "\n  ");                                                                                                        // 219
}));                                                                                                                   // 220
                                                                                                                       // 221
Template.__define__("afTextarea_plain", (function() {                                                                  // 222
  var self = this;                                                                                                     // 223
  var template = this;                                                                                                 // 224
  return HTML.TEXTAREA({                                                                                               // 225
    "data-schema-key": function() {                                                                                    // 226
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 227
    },                                                                                                                 // 228
    name: function() {                                                                                                 // 229
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 230
    },                                                                                                                 // 231
    "class": function() {                                                                                              // 232
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "cls"));                                               // 233
    },                                                                                                                 // 234
    $dynamic: [ function() {                                                                                           // 235
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 236
    } ]                                                                                                                // 237
  }, function() {                                                                                                      // 238
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                               // 239
  });                                                                                                                  // 240
}));                                                                                                                   // 241
                                                                                                                       // 242
Template.__define__("afInput_plain", (function() {                                                                     // 243
  var self = this;                                                                                                     // 244
  var template = this;                                                                                                 // 245
  return HTML.INPUT({                                                                                                  // 246
    type: function() {                                                                                                 // 247
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "type"));                                              // 248
    },                                                                                                                 // 249
    "data-schema-key": function() {                                                                                    // 250
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 251
    },                                                                                                                 // 252
    name: function() {                                                                                                 // 253
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                              // 254
    },                                                                                                                 // 255
    "class": function() {                                                                                              // 256
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "cls"));                                               // 257
    },                                                                                                                 // 258
    value: function() {                                                                                                // 259
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "value"));                                             // 260
    },                                                                                                                 // 261
    $dynamic: [ function() {                                                                                           // 262
      return Spacebars.attrMustache(Spacebars.dot(self.lookup("."), "atts"));                                          // 263
    } ]                                                                                                                // 264
  });                                                                                                                  // 265
}));                                                                                                                   // 266
                                                                                                                       // 267
Template.__define__("afDeleteButton_plain", (function() {                                                              // 268
  var self = this;                                                                                                     // 269
  var template = this;                                                                                                 // 270
  return Spacebars.TemplateWith(function() {                                                                           // 271
    return {                                                                                                           // 272
      collection: Spacebars.call(Spacebars.dot(self.lookup("."), "collection")),                                       // 273
      type: Spacebars.call("remove"),                                                                                  // 274
      doc: Spacebars.call(Spacebars.dot(self.lookup("."), "doc"))                                                      // 275
    };                                                                                                                 // 276
  }, UI.block(function() {                                                                                             // 277
    var self = this;                                                                                                   // 278
    return Spacebars.include(self.lookupTemplate("autoForm"), UI.block(function() {                                    // 279
      var self = this;                                                                                                 // 280
      return [ "\n  ", HTML.BUTTON({                                                                                   // 281
        type: "submit",                                                                                                // 282
        $dynamic: [ function() {                                                                                       // 283
          return Spacebars.attrMustache(self.lookup("atts"));                                                          // 284
        } ]                                                                                                            // 285
      }, UI.If(function() {                                                                                            // 286
        return Spacebars.call(Spacebars.dot(self.lookup(".."), "contentBlock"));                                       // 287
      }, UI.block(function() {                                                                                         // 288
        var self = this;                                                                                               // 289
        return Spacebars.include(function() {                                                                          // 290
          return Spacebars.dot(self.lookup(".."), "contentBlock");                                                     // 291
        });                                                                                                            // 292
      }), UI.block(function() {                                                                                        // 293
        var self = this;                                                                                               // 294
        return "Delete";                                                                                               // 295
      }))), "\n  " ];                                                                                                  // 296
    }));                                                                                                               // 297
  }));                                                                                                                 // 298
}));                                                                                                                   // 299
                                                                                                                       // 300
Template.__define__("afQuickField_plain", (function() {                                                                // 301
  var self = this;                                                                                                     // 302
  var template = this;                                                                                                 // 303
  return HTML.DIV({                                                                                                    // 304
    "class": [ "form-group ", UI.If(function() {                                                                       // 305
      return Spacebars.dataMustache(self.lookup("afFieldIsInvalid"), Spacebars.kw({                                    // 306
        name: Spacebars.dot(self.lookup("."), "atts", "name"),                                                         // 307
        autoform: Spacebars.dot(self.lookup("."), "atts", "autoform")                                                  // 308
      }));                                                                                                             // 309
    }, UI.block(function() {                                                                                           // 310
      var self = this;                                                                                                 // 311
      return "has-error";                                                                                              // 312
    })) ]                                                                                                              // 313
  }, "\n    ", UI.Unless(function() {                                                                                  // 314
    return Spacebars.call(Spacebars.dot(self.lookup("."), "skipLabel"));                                               // 315
  }, UI.block(function() {                                                                                             // 316
    var self = this;                                                                                                   // 317
    return [ "\n    ", Spacebars.TemplateWith(function() {                                                             // 318
      return Spacebars.call(Spacebars.dot(self.lookup("."), "afFieldLabelAtts"));                                      // 319
    }, UI.block(function() {                                                                                           // 320
      var self = this;                                                                                                 // 321
      return Spacebars.include(self.lookupTemplate("afFieldLabel"));                                                   // 322
    })), "\n    " ];                                                                                                   // 323
  })), "\n    ", Spacebars.TemplateWith(function() {                                                                   // 324
    return Spacebars.call(Spacebars.dot(self.lookup("."), "afFieldInputAtts"));                                        // 325
  }, UI.block(function() {                                                                                             // 326
    var self = this;                                                                                                   // 327
    return Spacebars.include(self.lookupTemplate("afFieldInput"));                                                     // 328
  })), "\n    ", HTML.SPAN(function() {                                                                                // 329
    return Spacebars.makeRaw(Spacebars.mustache(self.lookup("afFieldMessage"), Spacebars.kw({                          // 330
      name: Spacebars.dot(self.lookup("."), "atts", "name"),                                                           // 331
      autoform: Spacebars.dot(self.lookup("."), "atts", "autoform")                                                    // 332
    })));                                                                                                              // 333
  }), "\n  ");                                                                                                         // 334
}));                                                                                                                   // 335
                                                                                                                       // 336
Template.__define__("afObjectField_plain", (function() {                                                               // 337
  var self = this;                                                                                                     // 338
  var template = this;                                                                                                 // 339
  return HTML.FIELDSET("\n    ", HTML.LEGEND(function() {                                                              // 340
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 341
  }), "\n    ", UI.Each(function() {                                                                                   // 342
    return Spacebars.call(Spacebars.dot(self.lookup("."), "fields"));                                                  // 343
  }, UI.block(function() {                                                                                             // 344
    var self = this;                                                                                                   // 345
    return [ "\n    ", Spacebars.TemplateWith(function() {                                                             // 346
      return Spacebars.call(self.lookup("."));                                                                         // 347
    }, UI.block(function() {                                                                                           // 348
      var self = this;                                                                                                 // 349
      return Spacebars.include(self.lookupTemplate("afQuickField"));                                                   // 350
    })), "\n    " ];                                                                                                   // 351
  })), "\n  ");                                                                                                        // 352
}));                                                                                                                   // 353
                                                                                                                       // 354
Template.__define__("afArrayField_plain", (function() {                                                                // 355
  var self = this;                                                                                                     // 356
  var template = this;                                                                                                 // 357
  return HTML.FIELDSET("\n    ", HTML.LEGEND(function() {                                                              // 358
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 359
  }), "\n    ", Spacebars.TemplateWith(function() {                                                                    // 360
    return {                                                                                                           // 361
      name: Spacebars.call(Spacebars.dot(self.lookup("."), "name"))                                                    // 362
    };                                                                                                                 // 363
  }, UI.block(function() {                                                                                             // 364
    var self = this;                                                                                                   // 365
    return Spacebars.include(self.lookupTemplate("afEachArrayItem"), UI.block(function() {                             // 366
      var self = this;                                                                                                 // 367
      return [ "\n    ", HTML.DIV({                                                                                    // 368
        "class": "autoform-array-item"                                                                                 // 369
      }, "\n      ", Spacebars.include(self.lookupTemplate("afQuickField")), "\n      ", UI.If(function() {            // 370
        return Spacebars.call(Spacebars.dot(self.lookup(".."), "hasMoreThanMinimum"));                                 // 371
      }, UI.block(function() {                                                                                         // 372
        var self = this;                                                                                               // 373
        return [ "\n      ", HTML.BUTTON({                                                                             // 374
          "class": "autoform-remove-item",                                                                             // 375
          "data-autoform-field": function() {                                                                          // 376
            return Spacebars.mustache(Spacebars.dot(self.lookup(".."), "name"));                                       // 377
          }                                                                                                            // 378
        }, "Remove"), "\n      " ];                                                                                    // 379
      })), "\n    "), "\n    " ];                                                                                      // 380
    }));                                                                                                               // 381
  })), "\n    ", UI.If(function() {                                                                                    // 382
    return Spacebars.call(Spacebars.dot(self.lookup("."), "hasLessThanMaximum"));                                      // 383
  }, UI.block(function() {                                                                                             // 384
    var self = this;                                                                                                   // 385
    return [ "\n    ", HTML.DIV({                                                                                      // 386
      style: "margin-top: 20px;"                                                                                       // 387
    }, "\n      ", HTML.BUTTON({                                                                                       // 388
      "class": "autoform-add-item",                                                                                    // 389
      "data-autoform-field": function() {                                                                              // 390
        return Spacebars.mustache(Spacebars.dot(self.lookup("."), "name"));                                            // 391
      }                                                                                                                // 392
    }, "Add"), "\n    "), "\n    " ];                                                                                  // 393
  })), "\n  ");                                                                                                        // 394
}));                                                                                                                   // 395
                                                                                                                       // 396
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/plain/plain.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Template helpers for "plain" template                                                                               // 2
 */                                                                                                                    // 3
                                                                                                                       // 4
Template['afFieldLabel_plain'].atts = function plFieldLabelAtts() {                                                    // 5
  var atts = (_.clone(this || {})).atts;                                                                               // 6
  var labelAtts = _.omit(atts, 'name', 'autoform', 'template');                                                        // 7
  // Add "for" attribute if missing                                                                                    // 8
  labelAtts['for'] = labelAtts['for'] || atts['name'];                                                                 // 9
  return labelAtts;                                                                                                    // 10
};                                                                                                                     // 11
                                                                                                                       // 12
Template['afDeleteButton_plain'].atts = function plDeleteButtonAtts() {                                                // 13
  var atts = this || {};                                                                                               // 14
  return _.omit(atts, '_af', 'collection', 'doc', 'contentBlock', 'type');                                             // 15
};                                                                                                                     // 16
                                                                                                                       // 17
Template['quickForm_plain'].submitButtonAtts = function plQuickFormSubmitButtonAtts() {                                // 18
  var context = this;                                                                                                  // 19
  var atts = {type: "submit"};                                                                                         // 20
  if (typeof context.buttonClasses === "string") {                                                                     // 21
    atts['class'] = context.buttonClasses;                                                                             // 22
  }                                                                                                                    // 23
  return atts;                                                                                                         // 24
};                                                                                                                     // 25
                                                                                                                       // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/plain-span/template.plain-span.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("afFieldLabel_plain-span", (function() {                                                           // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return HTML.SPAN({                                                                                                   // 5
    $dynamic: [ function() {                                                                                           // 6
      return Spacebars.attrMustache(self.lookup("atts"));                                                              // 7
    } ]                                                                                                                // 8
  }, function() {                                                                                                      // 9
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "label"));                                               // 10
  });                                                                                                                  // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/templates/plain-span/plain-span.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Template helpers for "plain-span" template                                                                          // 2
 */                                                                                                                    // 3
                                                                                                                       // 4
Template['afFieldLabel_plain-span'].atts = function() {                                                                // 5
  var atts = (this || {}).atts;                                                                                        // 6
  return _.omit(atts, 'name', 'autoform', 'template');                                                                 // 7
};                                                                                                                     // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/template.autoform.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("autoForm", (function() {                                                                          // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return HTML.FORM({                                                                                                   // 5
    $dynamic: [ function() {                                                                                           // 6
      return Spacebars.attrMustache(self.lookup("atts"));                                                              // 7
    } ]                                                                                                                // 8
  }, "\n  	", Spacebars.With(function() {                                                                              // 9
    return Spacebars.dataMustache(self.lookup("innerContext"), self.lookup(".."));                                     // 10
  }, UI.block(function() {                                                                                             // 11
    var self = this;                                                                                                   // 12
    return [ "\n    ", UI.InTemplateScope(template, Spacebars.TemplateWith(function() {                                // 13
      return Spacebars.call(self.lookup("."));                                                                         // 14
    }, UI.block(function() {                                                                                           // 15
      var self = this;                                                                                                 // 16
      return Spacebars.include(function() {                                                                            // 17
        return template.__content;                                                                                     // 18
      });                                                                                                              // 19
    }))), "\n    " ];                                                                                                  // 20
  })), "\n  ");                                                                                                        // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
Template.__define__("quickForm", (function() {                                                                         // 24
  var self = this;                                                                                                     // 25
  var template = this;                                                                                                 // 26
  return Spacebars.With(function() {                                                                                   // 27
    return Spacebars.dataMustache(self.lookup("getTemplate"), "quickForm", Spacebars.dot(self.lookup("."), "template"));
  }, UI.block(function() {                                                                                             // 29
    var self = this;                                                                                                   // 30
    return [ "\n    ", Spacebars.With(function() {                                                                     // 31
      return Spacebars.dataMustache(self.lookup("qfContext"), self.lookup(".."));                                      // 32
    }, UI.block(function() {                                                                                           // 33
      var self = this;                                                                                                 // 34
      return [ "\n      ", Spacebars.include(self.lookupTemplate("..")), "\n    " ];                                   // 35
    })), "\n  " ];                                                                                                     // 36
  }));                                                                                                                 // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
Template.__define__("afQuickField", (function() {                                                                      // 40
  var self = this;                                                                                                     // 41
  var template = this;                                                                                                 // 42
  return [ "\n  ", Spacebars.With(function() {                                                                         // 43
    return Spacebars.dataMustache(self.lookup("_af_findAutoForm"), "afQuickField", self.lookup(".."), self.lookup("..."), self.lookup("...."), self.lookup("....."), self.lookup("......"));
  }, UI.block(function() {                                                                                             // 45
    var self = this;                                                                                                   // 46
    return [ "\n  ", UI.If(function() {                                                                                // 47
      return Spacebars.dataMustache(self.lookup("isGroup"), Spacebars.kw({                                             // 48
        autoform: self.lookup("."),                                                                                    // 49
        atts: self.lookup("..")                                                                                        // 50
      }));                                                                                                             // 51
    }, UI.block(function() {                                                                                           // 52
      var self = this;                                                                                                 // 53
      return [ "\n    ", Spacebars.TemplateWith(function() {                                                           // 54
        return Spacebars.call(self.lookup(".."));                                                                      // 55
      }, UI.block(function() {                                                                                         // 56
        var self = this;                                                                                               // 57
        return Spacebars.include(self.lookupTemplate("afObjectField"));                                                // 58
      })), "\n  " ];                                                                                                   // 59
    }), UI.block(function() {                                                                                          // 60
      var self = this;                                                                                                 // 61
      return [ "\n    ", UI.If(function() {                                                                            // 62
        return Spacebars.dataMustache(self.lookup("isFieldArray"), Spacebars.kw({                                      // 63
          autoform: self.lookup("."),                                                                                  // 64
          atts: self.lookup("..")                                                                                      // 65
        }));                                                                                                           // 66
      }, UI.block(function() {                                                                                         // 67
        var self = this;                                                                                               // 68
        return [ "\n      ", Spacebars.TemplateWith(function() {                                                       // 69
          return Spacebars.call(self.lookup(".."));                                                                    // 70
        }, UI.block(function() {                                                                                       // 71
          var self = this;                                                                                             // 72
          return Spacebars.include(self.lookupTemplate("afArrayField"));                                               // 73
        })), "\n    " ];                                                                                               // 74
      }), UI.block(function() {                                                                                        // 75
        var self = this;                                                                                               // 76
        return [ "\n      ", Spacebars.With(function() {                                                               // 77
          return Spacebars.dataMustache(self.lookup("innerContext"), Spacebars.kw({                                    // 78
            autoform: self.lookup("."),                                                                                // 79
            atts: self.lookup("..")                                                                                    // 80
          }));                                                                                                         // 81
        }, UI.block(function() {                                                                                       // 82
          var self = this;                                                                                             // 83
          return [ "\n        ", Spacebars.With(function() {                                                           // 84
            return Spacebars.dataMustache(self.lookup("getTemplate"), "afQuickField", Spacebars.dot(self.lookup("..."), "template"));
          }, UI.block(function() {                                                                                     // 86
            var self = this;                                                                                           // 87
            return [ "\n          ", Spacebars.With(function() {                                                       // 88
              return Spacebars.call(self.lookup(".."));                                                                // 89
            }, UI.block(function() {                                                                                   // 90
              var self = this;                                                                                         // 91
              return [ "\n            ", Spacebars.include(self.lookupTemplate("..")), "\n          " ];               // 92
            })), "\n        " ];                                                                                       // 93
          })), "\n      " ];                                                                                           // 94
        })), "\n    " ];                                                                                               // 95
      })), "\n  " ];                                                                                                   // 96
    })), "\n  " ];                                                                                                     // 97
  })) ];                                                                                                               // 98
}));                                                                                                                   // 99
                                                                                                                       // 100
Template.__define__("afObjectField", (function() {                                                                     // 101
  var self = this;                                                                                                     // 102
  var template = this;                                                                                                 // 103
  return [ "\n  ", Spacebars.With(function() {                                                                         // 104
    return Spacebars.dataMustache(self.lookup("_af_findAutoForm"), "afObjectField", self.lookup(".."), self.lookup("..."), self.lookup("...."), self.lookup("....."), self.lookup("......"));
  }, UI.block(function() {                                                                                             // 106
    var self = this;                                                                                                   // 107
    return [ "\n    ", Spacebars.With(function() {                                                                     // 108
      return Spacebars.dataMustache(self.lookup("getTemplate"), "afObjectField", Spacebars.dot(self.lookup(".."), "template"));
    }, UI.block(function() {                                                                                           // 110
      var self = this;                                                                                                 // 111
      return [ "\n      ", Spacebars.With(function() {                                                                 // 112
        return Spacebars.dataMustache(self.lookup("innerContext"), Spacebars.kw({                                      // 113
          autoform: self.lookup(".."),                                                                                 // 114
          atts: self.lookup("...")                                                                                     // 115
        }));                                                                                                           // 116
      }, UI.block(function() {                                                                                         // 117
        var self = this;                                                                                               // 118
        return [ "\n        ", Spacebars.include(self.lookupTemplate("..")), "\n      " ];                             // 119
      })), "\n    " ];                                                                                                 // 120
    })), "\n  " ];                                                                                                     // 121
  })) ];                                                                                                               // 122
}));                                                                                                                   // 123
                                                                                                                       // 124
Template.__define__("afArrayField", (function() {                                                                      // 125
  var self = this;                                                                                                     // 126
  var template = this;                                                                                                 // 127
  return [ "\n  ", Spacebars.With(function() {                                                                         // 128
    return Spacebars.dataMustache(self.lookup("_af_findAutoForm"), "afArrayField", self.lookup(".."), self.lookup("..."), self.lookup("...."), self.lookup("....."), self.lookup("......"));
  }, UI.block(function() {                                                                                             // 130
    var self = this;                                                                                                   // 131
    return [ "\n    ", Spacebars.With(function() {                                                                     // 132
      return Spacebars.dataMustache(self.lookup("getTemplate"), "afArrayField", Spacebars.dot(self.lookup(".."), "template"));
    }, UI.block(function() {                                                                                           // 134
      var self = this;                                                                                                 // 135
      return [ "\n      ", Spacebars.With(function() {                                                                 // 136
        return Spacebars.dataMustache(self.lookup("innerContext"), Spacebars.kw({                                      // 137
          autoform: self.lookup(".."),                                                                                 // 138
          atts: self.lookup("...")                                                                                     // 139
        }));                                                                                                           // 140
      }, UI.block(function() {                                                                                         // 141
        var self = this;                                                                                               // 142
        return [ "\n        ", Spacebars.include(self.lookupTemplate("..")), "\n      " ];                             // 143
      })), "\n    " ];                                                                                                 // 144
    })), "\n  " ];                                                                                                     // 145
  })) ];                                                                                                               // 146
}));                                                                                                                   // 147
                                                                                                                       // 148
Template.__define__("afFieldInput", (function() {                                                                      // 149
  var self = this;                                                                                                     // 150
  var template = this;                                                                                                 // 151
  return [ "\n  ", Spacebars.With(function() {                                                                         // 152
    return Spacebars.dataMustache(self.lookup("_af_findAutoForm"), "afFieldInput", self.lookup(".."), self.lookup("..."), self.lookup("...."), self.lookup("....."), self.lookup("......"));
  }, UI.block(function() {                                                                                             // 154
    var self = this;                                                                                                   // 155
    return [ "\n	  ", Spacebars.With(function() {                                                                      // 156
      return Spacebars.dataMustache(self.lookup("inputOuterContext"), Spacebars.kw({                                   // 157
        autoform: self.lookup("."),                                                                                    // 158
        atts: self.lookup("..")                                                                                        // 159
      }));                                                                                                             // 160
    }, UI.block(function() {                                                                                           // 161
      var self = this;                                                                                                 // 162
      return [ "\n	    ", Spacebars.With(function() {                                                                  // 163
        return Spacebars.dataMustache(self.lookup("getTemplate"), Spacebars.dot(self.lookup("."), "templateType"), Spacebars.dot(self.lookup("."), "atts", "template"));
      }, UI.block(function() {                                                                                         // 165
        var self = this;                                                                                               // 166
        return [ "\n	      ", Spacebars.With(function() {                                                              // 167
          return Spacebars.dataMustache(self.lookup("inputContext"), Spacebars.kw({                                    // 168
            outerContext: self.lookup("..")                                                                            // 169
          }));                                                                                                         // 170
        }, UI.block(function() {                                                                                       // 171
          var self = this;                                                                                             // 172
          return [ "\n	        ", Spacebars.include(self.lookupTemplate("..")), "\n	      " ];                         // 173
        })), "\n	    " ];                                                                                              // 174
      })), "\n	  " ];                                                                                                  // 175
    })), "\n  " ];                                                                                                     // 176
  })) ];                                                                                                               // 177
}));                                                                                                                   // 178
                                                                                                                       // 179
Template.__define__("afFieldSelect", (function() {                                                                     // 180
  var self = this;                                                                                                     // 181
  var template = this;                                                                                                 // 182
  return [ "\n  ", Spacebars.With(function() {                                                                         // 183
    return Spacebars.dataMustache(self.lookup("_af_findAutoForm"), "afFieldSelect", self.lookup(".."), self.lookup("..."), self.lookup("...."), self.lookup("....."), self.lookup("......"));
  }, UI.block(function() {                                                                                             // 185
    var self = this;                                                                                                   // 186
    return [ "\n	  ", Spacebars.With(function() {                                                                      // 187
      return Spacebars.dataMustache(self.lookup("inputOuterContext"), Spacebars.kw({                                   // 188
        autoform: self.lookup("."),                                                                                    // 189
        atts: self.lookup("..")                                                                                        // 190
      }));                                                                                                             // 191
    }, UI.block(function() {                                                                                           // 192
      var self = this;                                                                                                 // 193
      return [ "\n	    ", Spacebars.With(function() {                                                                  // 194
        return Spacebars.dataMustache(self.lookup("getTemplate"), "afFieldSelect", Spacebars.dot(self.lookup("."), "atts", "template"));
      }, UI.block(function() {                                                                                         // 196
        var self = this;                                                                                               // 197
        return [ "\n	      ", Spacebars.With(function() {                                                              // 198
          return Spacebars.dataMustache(self.lookup("inputContext"), Spacebars.kw({                                    // 199
            outerContext: self.lookup(".."),                                                                           // 200
            contentBlock: template.__content                                                                           // 201
          }));                                                                                                         // 202
        }, UI.block(function() {                                                                                       // 203
          var self = this;                                                                                             // 204
          return [ "\n	        ", Spacebars.include(self.lookupTemplate("..")), "\n	      " ];                         // 205
        })), "\n	    " ];                                                                                              // 206
      })), "\n	  " ];                                                                                                  // 207
    })), "\n  " ];                                                                                                     // 208
  })) ];                                                                                                               // 209
}));                                                                                                                   // 210
                                                                                                                       // 211
Template.__define__("afFieldLabel", (function() {                                                                      // 212
  var self = this;                                                                                                     // 213
  var template = this;                                                                                                 // 214
  return Spacebars.With(function() {                                                                                   // 215
    return Spacebars.dataMustache(self.lookup("getTemplate"), "afFieldLabel", Spacebars.dot(self.lookup("."), "template"));
  }, UI.block(function() {                                                                                             // 217
    var self = this;                                                                                                   // 218
    return [ "\n    \n    ", Spacebars.With(function() {                                                               // 219
      return Spacebars.dataMustache(self.lookup("_af_findAutoForm"), "afFieldLabel", self.lookup("..."), self.lookup("...."), self.lookup("....."), self.lookup("......"), self.lookup("......."));
    }, UI.block(function() {                                                                                           // 221
      var self = this;                                                                                                 // 222
      return [ "\n      ", Spacebars.With(function() {                                                                 // 223
        return Spacebars.dataMustache(self.lookup("labelContext"), self.lookup("."), self.lookup("..."));              // 224
      }, UI.block(function() {                                                                                         // 225
        var self = this;                                                                                               // 226
        return [ "\n        ", Spacebars.include(self.lookupTemplate("...")), "\n      " ];                            // 227
      })), "\n    " ];                                                                                                 // 228
    })), "\n  " ];                                                                                                     // 229
  }));                                                                                                                 // 230
}));                                                                                                                   // 231
                                                                                                                       // 232
Template.__define__("afDeleteButton", (function() {                                                                    // 233
  var self = this;                                                                                                     // 234
  var template = this;                                                                                                 // 235
  return Spacebars.With(function() {                                                                                   // 236
    return Spacebars.dataMustache(self.lookup("getTemplate"), "afDeleteButton", Spacebars.dot(self.lookup("."), "template"));
  }, UI.block(function() {                                                                                             // 238
    var self = this;                                                                                                   // 239
    return [ "\n    ", Spacebars.With(function() {                                                                     // 240
      return Spacebars.dataMustache(self.lookup("innerContext"), self.lookup(".."), template.__content);               // 241
    }, UI.block(function() {                                                                                           // 242
      var self = this;                                                                                                 // 243
      return [ "\n      ", Spacebars.include(self.lookupTemplate("..")), "\n    " ];                                   // 244
    })), "\n  " ];                                                                                                     // 245
  }));                                                                                                                 // 246
}));                                                                                                                   // 247
                                                                                                                       // 248
Template.__define__("afEachArrayItem", (function() {                                                                   // 249
  var self = this;                                                                                                     // 250
  var template = this;                                                                                                 // 251
  return [ "\n  ", Spacebars.With(function() {                                                                         // 252
    return Spacebars.dataMustache(self.lookup("_af_findAutoForm"), "afEachArrayItem", self.lookup(".."), self.lookup("..."), self.lookup("...."), self.lookup("....."), self.lookup("......"));
  }, UI.block(function() {                                                                                             // 254
    var self = this;                                                                                                   // 255
    return [ "\n    ", Spacebars.With(function() {                                                                     // 256
      return Spacebars.dataMustache(self.lookup("innerContext"), Spacebars.dot(self.lookup(".."), "name"), self.lookup("."), Spacebars.dot(self.lookup(".."), "minCount"), Spacebars.dot(self.lookup(".."), "maxCount"));
    }, UI.block(function() {                                                                                           // 258
      var self = this;                                                                                                 // 259
      return [ "\n      ", UI.Each(function() {                                                                        // 260
        return Spacebars.call(self.lookup("."));                                                                       // 261
      }, UI.block(function() {                                                                                         // 262
        var self = this;                                                                                               // 263
        return [ "\n      ", UI.InTemplateScope(template, Spacebars.TemplateWith(function() {                          // 264
          return Spacebars.call(self.lookup("."));                                                                     // 265
        }, UI.block(function() {                                                                                       // 266
          var self = this;                                                                                             // 267
          return Spacebars.include(function() {                                                                        // 268
            return template.__content;                                                                                 // 269
          });                                                                                                          // 270
        }))), "\n      " ];                                                                                            // 271
      })), "\n    " ];                                                                                                 // 272
    })), "\n  " ];                                                                                                     // 273
  })) ];                                                                                                               // 274
}));                                                                                                                   // 275
                                                                                                                       // 276
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/utility.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Utility = {                                                                                                            // 1
  /**                                                                                                                  // 2
   * @method Utility.cleanNulls                                                                                        // 3
   * @private                                                                                                          // 4
   * @param {Object} doc - Source object                                                                               // 5
   * @returns {Object}                                                                                                 // 6
   *                                                                                                                   // 7
   * Returns an object in which all properties with null, undefined, or empty                                          // 8
   * string values have been removed, recursively.                                                                     // 9
   */                                                                                                                  // 10
  cleanNulls: function cleanNulls(doc, isArray) {                                                                      // 11
    var newDoc = isArray ? [] : {};                                                                                    // 12
    _.each(doc, function(val, key) {                                                                                   // 13
      if (!_.isArray(val) && !(val instanceof Date) && _.isObject(val)) {                                              // 14
        val = cleanNulls(val, false); //recurse into objects                                                           // 15
        if (!_.isEmpty(val)) {                                                                                         // 16
          newDoc[key] = val;                                                                                           // 17
        }                                                                                                              // 18
      } else if (_.isArray(val)) {                                                                                     // 19
        val = cleanNulls(val, true); //recurse into arrays                                                             // 20
        if (!_.isEmpty(val)) {                                                                                         // 21
          newDoc[key] = val;                                                                                           // 22
        }                                                                                                              // 23
      } else if (val !== void 0 && val !== null && !(typeof val === "string" && val.length === 0)) {                   // 24
        newDoc[key] = val;                                                                                             // 25
      }                                                                                                                // 26
    });                                                                                                                // 27
    return newDoc;                                                                                                     // 28
  },                                                                                                                   // 29
  /**                                                                                                                  // 30
   * @method Utility.reportNulls                                                                                       // 31
   * @private                                                                                                          // 32
   * @param {Object} flatDoc - An object with no properties that are also objects.                                     // 33
   * @returns {Object} An object in which the keys represent the keys in the                                           // 34
   * original object that were null, undefined, or empty strings, and the value                                        // 35
   * of each key is "".                                                                                                // 36
   */                                                                                                                  // 37
  reportNulls: function reportNulls(flatDoc) {                                                                         // 38
    var nulls = {};                                                                                                    // 39
    _.each(flatDoc, function(val, key) {                                                                               // 40
      if (val === void 0 || val === null || (typeof val === "string" && val.length === 0) || (_.isArray(val) && val.length === 0)) {
        nulls[key] = "";                                                                                               // 42
      }                                                                                                                // 43
    });                                                                                                                // 44
    return nulls;                                                                                                      // 45
  },                                                                                                                   // 46
  /**                                                                                                                  // 47
   * @method Utility.docToModifier                                                                                     // 48
   * @private                                                                                                          // 49
   * @param {Object} doc - An object to be converted into a MongoDB modifier                                           // 50
   * @returns {Object} A MongoDB modifier.                                                                             // 51
   *                                                                                                                   // 52
   * Converts an object into a modifier by flattening it, putting keys with                                            // 53
   * null, undefined, and empty string values into `modifier.$unset`, and                                              // 54
   * putting the rest of the keys into `modifier.$set`.                                                                // 55
   */                                                                                                                  // 56
  docToModifier: function docToModifier(doc) {                                                                         // 57
    var modifier = {};                                                                                                 // 58
                                                                                                                       // 59
    // Flatten doc                                                                                                     // 60
    var mDoc = new MongoObject(doc);                                                                                   // 61
    var flatDoc = mDoc.getFlatObject({keepArrays: true});                                                              // 62
    mDoc = null;                                                                                                       // 63
    // Get a list of null, undefined, and empty string values so we can unset them instead                             // 64
    var nulls = Utility.reportNulls(flatDoc);                                                                          // 65
    flatDoc = Utility.cleanNulls(flatDoc);                                                                             // 66
                                                                                                                       // 67
    if (!_.isEmpty(flatDoc)) {                                                                                         // 68
      modifier.$set = flatDoc;                                                                                         // 69
    }                                                                                                                  // 70
    if (!_.isEmpty(nulls)) {                                                                                           // 71
      modifier.$unset = nulls;                                                                                         // 72
    }                                                                                                                  // 73
    return modifier;                                                                                                   // 74
  },                                                                                                                   // 75
  /**                                                                                                                  // 76
   * @method Utility.getSelectValues                                                                                   // 77
   * @private                                                                                                          // 78
   * @param {Element} select - DOM Element from which to get current values                                            // 79
   * @returns {string[]}                                                                                               // 80
   *                                                                                                                   // 81
   * Gets a string array of all the selected values in a given `select` DOM element.                                   // 82
   */                                                                                                                  // 83
  getSelectValues: function getSelectValues(select) {                                                                  // 84
    var result = [];                                                                                                   // 85
    var options = select && select.options;                                                                            // 86
    var opt;                                                                                                           // 87
                                                                                                                       // 88
    for (var i = 0, ln = options.length; i < ln; i++) {                                                                // 89
      opt = options[i];                                                                                                // 90
                                                                                                                       // 91
      if (opt.selected) {                                                                                              // 92
        result.push(opt.value || opt.text);                                                                            // 93
      }                                                                                                                // 94
    }                                                                                                                  // 95
    return result;                                                                                                     // 96
  },                                                                                                                   // 97
  /**                                                                                                                  // 98
   * @method Utility.maybeNum                                                                                          // 99
   * @private                                                                                                          // 100
   * @param {string} val                                                                                               // 101
   * @returns {String|Number}                                                                                          // 102
   *                                                                                                                   // 103
   * If the given string can be converted to a number, returns the number.                                             // 104
   * Otherwise returns the string.                                                                                     // 105
   */                                                                                                                  // 106
  maybeNum: function maybeNum(val) {                                                                                   // 107
    // Convert val to a number if possible; otherwise, just use the value                                              // 108
    var floatVal = parseFloat(val);                                                                                    // 109
    if (!isNaN(floatVal)) {                                                                                            // 110
      return floatVal;                                                                                                 // 111
    } else {                                                                                                           // 112
      return val;                                                                                                      // 113
    }                                                                                                                  // 114
  },                                                                                                                   // 115
  /**                                                                                                                  // 116
   * @method Utility.lookup                                                                                            // 117
   * @private                                                                                                          // 118
   * @param {Any} obj                                                                                                  // 119
   * @returns {Any}                                                                                                    // 120
   *                                                                                                                   // 121
   * If `obj` is a string, returns the value of the property with that                                                 // 122
   * name on the `window` object. Otherwise returns `obj`.                                                             // 123
   */                                                                                                                  // 124
  lookup: function lookup(obj) {                                                                                       // 125
    if (typeof obj === "string") {                                                                                     // 126
      if (!window || !window[obj]) {                                                                                   // 127
        throw new Error(obj + " is not in the window scope");                                                          // 128
      }                                                                                                                // 129
      return window[obj];                                                                                              // 130
    }                                                                                                                  // 131
    return obj;                                                                                                        // 132
  },                                                                                                                   // 133
  /**                                                                                                                  // 134
   * @method Utility.getDefs                                                                                           // 135
   * @private                                                                                                          // 136
   * @param {SimpleSchema} ss                                                                                          // 137
   * @param {String} name                                                                                              // 138
   * @return {Object} Schema definitions object                                                                        // 139
   *                                                                                                                   // 140
   * Returns the schema definitions object from a SimpleSchema instance. Equivalent to calling                         // 141
   * `ss.schema(name)` but handles throwing errors if `name` is not a string or is not a valid                         // 142
   * field name for this SimpleSchema instance.                                                                        // 143
   */                                                                                                                  // 144
  getDefs: function getDefs(ss, name) {                                                                                // 145
    if (typeof name !== "string") {                                                                                    // 146
      throw new Error("Invalid field name: (not a string)");                                                           // 147
    }                                                                                                                  // 148
                                                                                                                       // 149
    var defs = ss.schema(name);                                                                                        // 150
    if (!defs)                                                                                                         // 151
      throw new Error("Invalid field name: " + name);                                                                  // 152
    return defs;                                                                                                       // 153
  },                                                                                                                   // 154
  /**                                                                                                                  // 155
   * @method Utility.objAffectsKey                                                                                     // 156
   * @private                                                                                                          // 157
   * @param  {Object} obj                                                                                              // 158
   * @param  {String} key                                                                                              // 159
   * @return {Boolean}                                                                                                 // 160
   * @todo should make this a static method in MongoObject                                                             // 161
   */                                                                                                                  // 162
  objAffectsKey: function objAffectsKey(obj, key) {                                                                    // 163
    var mDoc = new MongoObject(obj);                                                                                   // 164
    return mDoc.affectsKey(key);                                                                                       // 165
  },                                                                                                                   // 166
  /**                                                                                                                  // 167
   * @method Utility.expandObj                                                                                         // 168
   * @private                                                                                                          // 169
   * @param  {Object} doc                                                                                              // 170
   * @return {Object}                                                                                                  // 171
   *                                                                                                                   // 172
   * Takes a flat object and returns an expanded version of it.                                                        // 173
   */                                                                                                                  // 174
  expandObj: function expandObj(doc) {                                                                                 // 175
    var newDoc = {}, subkeys, subkey, subkeylen, nextPiece, current;                                                   // 176
    _.each(doc, function(val, key) {                                                                                   // 177
      subkeys = key.split(".");                                                                                        // 178
      subkeylen = subkeys.length;                                                                                      // 179
      current = newDoc;                                                                                                // 180
      for (var i = 0; i < subkeylen; i++) {                                                                            // 181
        subkey = subkeys[i];                                                                                           // 182
        if (typeof current[subkey] !== "undefined" && !_.isObject(current[subkey])) {                                  // 183
          break; //already set for some reason; leave it alone                                                         // 184
        }                                                                                                              // 185
        if (i === subkeylen - 1) {                                                                                     // 186
          //last iteration; time to set the value                                                                      // 187
          current[subkey] = val;                                                                                       // 188
        } else {                                                                                                       // 189
          //see if the next piece is a number                                                                          // 190
          nextPiece = subkeys[i + 1];                                                                                  // 191
          nextPiece = parseInt(nextPiece, 10);                                                                         // 192
          if (isNaN(nextPiece) && !_.isObject(current[subkey])) {                                                      // 193
            current[subkey] = {};                                                                                      // 194
          } else if (!isNaN(nextPiece) && !_.isArray(current[subkey])) {                                               // 195
            current[subkey] = [];                                                                                      // 196
          }                                                                                                            // 197
        }                                                                                                              // 198
        current = current[subkey];                                                                                     // 199
      }                                                                                                                // 200
    });                                                                                                                // 201
    return newDoc;                                                                                                     // 202
  },                                                                                                                   // 203
  /**                                                                                                                  // 204
   * @method Utility.compactArrays                                                                                     // 205
   * @private                                                                                                          // 206
   * @param  {Object} obj                                                                                              // 207
   * @return {undefined}                                                                                               // 208
   *                                                                                                                   // 209
   * Edits the object by reference, compacting any arrays at any level recursively.                                    // 210
   */                                                                                                                  // 211
  compactArrays: function compactArrays(obj) {                                                                         // 212
    if (_.isObject(obj)) {                                                                                             // 213
      _.each(obj, function (val, key) {                                                                                // 214
        if (_.isArray(val)) {                                                                                          // 215
          obj[key] = _.without(val, void 0);                                                                           // 216
          _.each(obj[key], function (arrayItem) {                                                                      // 217
            compactArrays(arrayItem);                                                                                  // 218
          });                                                                                                          // 219
        } else if (!(val instanceof Date) && _.isObject(val)) {                                                        // 220
          //recurse into objects                                                                                       // 221
          compactArrays(val);                                                                                          // 222
        }                                                                                                              // 223
      });                                                                                                              // 224
    }                                                                                                                  // 225
  },                                                                                                                   // 226
  /**                                                                                                                  // 227
   * @method Utility.getSimpleSchemaFromContext                                                                        // 228
   * @private                                                                                                          // 229
   * @param  {Object} context                                                                                          // 230
   * @return {SimpleSchema}                                                                                            // 231
   *                                                                                                                   // 232
   * Given a context object that may or may not have schema and collection properties,                                 // 233
   * returns a SimpleSchema instance or throws an error if one cannot be obtained.                                     // 234
   */                                                                                                                  // 235
  getSimpleSchemaFromContext: function getSimpleSchemaFromContext(context, formId) {                                   // 236
    // If schema attribute, use that                                                                                   // 237
    var ss = Utility.lookup(context.schema);                                                                           // 238
    if (ss) {                                                                                                          // 239
      if (ss instanceof SimpleSchema) {                                                                                // 240
        return ss;                                                                                                     // 241
      } else {                                                                                                         // 242
        throw new Error('AutoForm: schema attribute for form with id "' + formId + '" is not a SimpleSchema instance');
      }                                                                                                                // 244
    }                                                                                                                  // 245
    // If no schema attribute, use the schema attached to the collection                                               // 246
    var collection = Utility.lookup(context.collection);                                                               // 247
    if (collection) {                                                                                                  // 248
      if (collection instanceof Meteor.Collection) {                                                                   // 249
        if (typeof collection.simpleSchema === 'function') {                                                           // 250
          return collection.simpleSchema();                                                                            // 251
        } else {                                                                                                       // 252
          throw new Error('AutoForm: collection attribute for form with id "' + formId + '" refers to a collection that does not have a schema. You might have forgotten to attach a schema to the collection or you might need to add the collection2 package to your app.');
        }                                                                                                              // 254
      } else {                                                                                                         // 255
        throw new Error('AutoForm: collection attribute for form with id "' + formId + '" is not a Meteor.Collection instance');
      }                                                                                                                // 257
    }                                                                                                                  // 258
    // If we got this far, we have no schema so throw an error                                                         // 259
    throw new Error('AutoForm: form with id "' + formId + '" needs either "schema" or "collection" attribute');        // 260
  },                                                                                                                   // 261
  /**                                                                                                                  // 262
   * @method Utility.isValidDateString                                                                                 // 263
   * @private                                                                                                          // 264
   * @param  {String}  dateString                                                                                      // 265
   * @return {Boolean}                                                                                                 // 266
   *                                                                                                                   // 267
   * Returns `true` if dateString is a "valid date string"                                                             // 268
   */                                                                                                                  // 269
  isValidDateString: function isValidDateString(dateString) {                                                          // 270
    var m = moment(dateString, 'YYYY-MM-DD', true);                                                                    // 271
    return m && m.isValid();                                                                                           // 272
  },                                                                                                                   // 273
  /**                                                                                                                  // 274
   * @method Utility.isValidTimeString                                                                                 // 275
   * @private                                                                                                          // 276
   * @param  {String}  timeString                                                                                      // 277
   * @return {Boolean}                                                                                                 // 278
   *                                                                                                                   // 279
   * Returns `true` if timeString is a "valid time string"                                                             // 280
   */                                                                                                                  // 281
  isValidTimeString: function isValidTimeString(timeString) {                                                          // 282
    if (typeof timeString !== "string")                                                                                // 283
      return false;                                                                                                    // 284
                                                                                                                       // 285
    //this reg ex actually allows a few invalid hours/minutes/seconds, but                                             // 286
    //we can catch that when parsing                                                                                   // 287
    var regEx = /^[0-2][0-9]:[0-5][0-9](:[0-5][0-9](\.[0-9]{1,3})?)?$/;                                                // 288
    return regEx.test(timeString);                                                                                     // 289
  },                                                                                                                   // 290
  /**                                                                                                                  // 291
   * @method  Utility.dateToDateString                                                                                 // 292
   * @private                                                                                                          // 293
   * @param  {Date} date                                                                                               // 294
   * @return {String}                                                                                                  // 295
   *                                                                                                                   // 296
   * Returns a "valid date string" representing the local date.                                                        // 297
   */                                                                                                                  // 298
  dateToDateString: function dateToDateString(date) {                                                                  // 299
    var m = (date.getMonth() + 1);                                                                                     // 300
    if (m < 10) {                                                                                                      // 301
      m = "0" + m;                                                                                                     // 302
    }                                                                                                                  // 303
    var d = date.getDate();                                                                                            // 304
    if (d < 10) {                                                                                                      // 305
      d = "0" + d;                                                                                                     // 306
    }                                                                                                                  // 307
    return date.getFullYear() + '-' + m + '-' + d;                                                                     // 308
  },                                                                                                                   // 309
  /**                                                                                                                  // 310
   * @method  Utility.dateToDateStringUTC                                                                              // 311
   * @private                                                                                                          // 312
   * @param  {Date} date                                                                                               // 313
   * @return {String}                                                                                                  // 314
   *                                                                                                                   // 315
   * Returns a "valid date string" representing the date converted to the UTC time zone.                               // 316
   */                                                                                                                  // 317
  dateToDateStringUTC: function dateToDateStringUTC(date) {                                                            // 318
    var m = (date.getUTCMonth() + 1);                                                                                  // 319
    if (m < 10) {                                                                                                      // 320
      m = "0" + m;                                                                                                     // 321
    }                                                                                                                  // 322
    var d = date.getUTCDate();                                                                                         // 323
    if (d < 10) {                                                                                                      // 324
      d = "0" + d;                                                                                                     // 325
    }                                                                                                                  // 326
    return date.getUTCFullYear() + '-' + m + '-' + d;                                                                  // 327
  },                                                                                                                   // 328
  /**                                                                                                                  // 329
   * @method  Utility.dateToNormalizedForcedUtcGlobalDateAndTimeString                                                 // 330
   * @private                                                                                                          // 331
   * @param  {Date} date                                                                                               // 332
   * @return {String}                                                                                                  // 333
   *                                                                                                                   // 334
   * Returns a "valid normalized forced-UTC global date and time string" representing the time                         // 335
   * converted to the UTC time zone and expressed as the shortest possible string for the given                        // 336
   * time (e.g. omitting the seconds component entirely if the given time is zero seconds past the minute).            // 337
   *                                                                                                                   // 338
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#date-and-time-state-(type=datetime)
   * http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#valid-normalized-forced-utc-global-date-and-time-string
   */                                                                                                                  // 341
  dateToNormalizedForcedUtcGlobalDateAndTimeString: function dateToNormalizedForcedUtcGlobalDateAndTimeString(date) {  // 342
    return moment(date).utc().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");                                                  // 343
  },                                                                                                                   // 344
  /**                                                                                                                  // 345
   * @method  Utility.isValidNormalizedForcedUtcGlobalDateAndTimeString                                                // 346
   * @private                                                                                                          // 347
   * @param  {String} dateString                                                                                       // 348
   * @return {Boolean}                                                                                                 // 349
   *                                                                                                                   // 350
   * Returns true if dateString is a "valid normalized forced-UTC global date and time string"                         // 351
   */                                                                                                                  // 352
  isValidNormalizedForcedUtcGlobalDateAndTimeString: function isValidNormalizedForcedUtcGlobalDateAndTimeString(dateString) {
    if (typeof dateString !== "string")                                                                                // 354
      return false;                                                                                                    // 355
                                                                                                                       // 356
    var datePart = dateString.substring(0, 10);                                                                        // 357
    var tPart = dateString.substring(10, 11);                                                                          // 358
    var timePart = dateString.substring(11, dateString.length - 1);                                                    // 359
    var zPart = dateString.substring(dateString.length - 1);                                                           // 360
    return Utility.isValidDateString(datePart) && tPart === "T" && Utility.isValidTimeString(timePart) && zPart === "Z";
  },                                                                                                                   // 362
  /**                                                                                                                  // 363
   * @method Utility.dateToNormalizedLocalDateAndTimeString                                                            // 364
   * @private                                                                                                          // 365
   * @param {Date} date                                                                                                // 366
   * @param {String} offset A valid offset string (to pass to moment.zone)                                             // 367
   * @return {String}                                                                                                  // 368
   *                                                                                                                   // 369
   * Returns a "valid normalized local date and time string".                                                          // 370
   */                                                                                                                  // 371
  dateToNormalizedLocalDateAndTimeString: function dateToNormalizedLocalDateAndTimeString(date, offset) {              // 372
    var m = moment(date);                                                                                              // 373
    m.zone(offset);                                                                                                    // 374
    return m.format("YYYY-MM-DD[T]hh:mm:ss.SSS");                                                                      // 375
  },                                                                                                                   // 376
  /**                                                                                                                  // 377
   * @method  Utility.isValidNormalizedLocalDateAndTimeString                                                          // 378
   * @private                                                                                                          // 379
   * @param  {String} dtString                                                                                         // 380
   * @return {Boolean}                                                                                                 // 381
   *                                                                                                                   // 382
   * Returns true if dtString is a "valid normalized local date and time string"                                       // 383
   */                                                                                                                  // 384
  isValidNormalizedLocalDateAndTimeString: function isValidNormalizedLocalDateAndTimeString(dtString) {                // 385
    if (typeof dtString !== "string")                                                                                  // 386
      return false;                                                                                                    // 387
                                                                                                                       // 388
    var datePart = dtString.substring(0, 10);                                                                          // 389
    var tPart = dtString.substring(10, 11);                                                                            // 390
    var timePart = dtString.substring(11, dtString.length);                                                            // 391
    return Utility.isValidDateString(datePart) && tPart === "T" && Utility.isValidTimeString(timePart);                // 392
  },                                                                                                                   // 393
  /**                                                                                                                  // 394
   * @method Utility.normalizeContext                                                                                  // 395
   * @private                                                                                                          // 396
   * @param  {Object} context A context object, potentially with an `atts` or `autoform` property.                     // 397
   * @param {String} name The name of the helper or component we're calling from, for in a potential error message.    // 398
   * @return {Object} Normalized context object                                                                        // 399
   *                                                                                                                   // 400
   * Returns an object with `afc`, `af`, and `atts` properties, normalized from whatever object is passed in.          // 401
   * This helps deal with the fact that we have to pass the ancestor autoform's context to different                   // 402
   * helpers and components in different ways, but in all cases we want to get access to it and throw                  // 403
   * an error if we can't find an autoform context.                                                                    // 404
   */                                                                                                                  // 405
  normalizeContext: function autoFormNormalizeContext(context, name) {                                                 // 406
    context = context || {};                                                                                           // 407
    var atts = context.atts || context;                                                                                // 408
    var afContext = atts.autoform || context.autoform;                                                                 // 409
    if (!afContext || !afContext._af) {                                                                                // 410
      throw new Error(name + " must be used within an autoForm block");                                                // 411
    }                                                                                                                  // 412
                                                                                                                       // 413
    return {                                                                                                           // 414
      afc: afContext,                                                                                                  // 415
      af: afContext._af,                                                                                               // 416
      atts: atts                                                                                                       // 417
    };                                                                                                                 // 418
  }                                                                                                                    // 419
};                                                                                                                     // 420
                                                                                                                       // 421
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/form-preserve.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * @constructor                                                                                                        // 2
 * @private                                                                                                            // 3
 * @param {String} migrationName                                                                                       // 4
 *                                                                                                                     // 5
 * Internal helper object to preserve form inputs across Hot Code Push                                                 // 6
 * and across "pages" navigation if the option is enabled.                                                             // 7
 */                                                                                                                    // 8
FormPreserve = function formPreserveConstructor(migrationName) {                                                       // 9
  var self = this;                                                                                                     // 10
  if (! _.isString(migrationName))                                                                                     // 11
    throw Error("You must define an unique migration name of type String");                                            // 12
  self.registeredForms = {};                                                                                           // 13
  self.retrievedDocuments = {};                                                                                        // 14
  if (Package.reload) {                                                                                                // 15
    var Reload = Package.reload.Reload;                                                                                // 16
    self.retrievedDocuments = Reload._migrationData(migrationName) || {};                                              // 17
    Reload._onMigrate(migrationName, function () {                                                                     // 18
      return [true, self._retrieveRegisteredDocuments()];                                                              // 19
    });                                                                                                                // 20
  }                                                                                                                    // 21
};                                                                                                                     // 22
                                                                                                                       // 23
FormPreserve.prototype.getDocument = function (formId) {                                                               // 24
  var self = this;                                                                                                     // 25
  if (! _.has(self.retrievedDocuments, formId))                                                                        // 26
    return false;                                                                                                      // 27
  else                                                                                                                 // 28
    return self.retrievedDocuments[formId];                                                                            // 29
};                                                                                                                     // 30
                                                                                                                       // 31
FormPreserve.prototype.saveDocument = function (formId) {                                                              // 32
  this.retrievedDocuments[formId] = this.registeredForms[formId]();                                                    // 33
}                                                                                                                      // 34
                                                                                                                       // 35
FormPreserve.prototype.registerForm = function (formId, retrieveFunc) {                                                // 36
  this.registeredForms[formId] = retrieveFunc;                                                                         // 37
};                                                                                                                     // 38
                                                                                                                       // 39
FormPreserve.prototype.unregisterForm = function (formId) {                                                            // 40
  delete this.registeredForms[formId];                                                                                 // 41
};                                                                                                                     // 42
                                                                                                                       // 43
FormPreserve.prototype._retrieveRegisteredDocuments = function () {                                                    // 44
  res = {};                                                                                                            // 45
  _.each(this.registeredForms, function (retrieveFunc, formId) {                                                       // 46
    res[formId] = retrieveFunc();                                                                                      // 47
  });                                                                                                                  // 48
  return res;                                                                                                          // 49
};                                                                                                                     // 50
                                                                                                                       // 51
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/hooks.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Hooks = {                                                                                                              // 1
  form: {},                                                                                                            // 2
  global: {                                                                                                            // 3
    before: {},                                                                                                        // 4
    after: {},                                                                                                         // 5
    formToDoc: [],                                                                                                     // 6
    docToForm: [],                                                                                                     // 7
    onSubmit: [],                                                                                                      // 8
    onSuccess: [],                                                                                                     // 9
    onError: []                                                                                                        // 10
  }                                                                                                                    // 11
};                                                                                                                     // 12
                                                                                                                       // 13
Hooks.addHooksToList = function addHooksToList(hooksList, hooks, replace) {                                            // 14
  // Add before hooks                                                                                                  // 15
  hooks.before && _.each(hooks.before, function autoFormBeforeHooksEach(func, type) {                                  // 16
    if (typeof func !== "function") {                                                                                  // 17
      throw new Error("AutoForm before hook must be a function, not " + typeof func);                                  // 18
    }                                                                                                                  // 19
    hooksList.before[type] = (!replace && hooksList.before[type]) ? hooksList.before[type] : [];                       // 20
    hooksList.before[type].push(func);                                                                                 // 21
  });                                                                                                                  // 22
                                                                                                                       // 23
  // Add after hooks                                                                                                   // 24
  hooks.after && _.each(hooks.after, function autoFormAfterHooksEach(func, type) {                                     // 25
    if (typeof func !== "function") {                                                                                  // 26
      throw new Error("AutoForm after hook must be a function, not " + typeof func);                                   // 27
    }                                                                                                                  // 28
    hooksList.after[type] = (!replace && hooksList.after[type]) ? hooksList.after[type] : [];                          // 29
    hooksList.after[type].push(func);                                                                                  // 30
  });                                                                                                                  // 31
                                                                                                                       // 32
  // Add all other hooks                                                                                               // 33
  _.each(['formToDoc', 'docToForm', 'onSubmit', 'onSuccess', 'onError'], function autoFormHooksEach(name) {            // 34
    if (hooks[name]) {                                                                                                 // 35
      if (typeof hooks[name] !== "function") {                                                                         // 36
        throw new Error("AutoForm " + name + " hook must be a function, not " + typeof hooks[name]);                   // 37
      }                                                                                                                // 38
                                                                                                                       // 39
      if(replace) {                                                                                                    // 40
          hooksList[name] = [];                                                                                        // 41
      }                                                                                                                // 42
                                                                                                                       // 43
      hooksList[name].push(hooks[name]);                                                                               // 44
    }                                                                                                                  // 45
  });                                                                                                                  // 46
};                                                                                                                     // 47
                                                                                                                       // 48
Hooks.getHooks = function getHooks(formId, type, subtype) {                                                            // 49
  var f, g;                                                                                                            // 50
  if (subtype) {                                                                                                       // 51
    f = Hooks.form[formId] && Hooks.form[formId][type] && Hooks.form[formId][type][subtype] || [];                     // 52
    g = Hooks.global[type] && Hooks.global[type][subtype] || [];                                                       // 53
  } else {                                                                                                             // 54
    f = Hooks.form[formId] && Hooks.form[formId][type] || [];                                                          // 55
    g = Hooks.global[type] || [];                                                                                      // 56
  }                                                                                                                    // 57
  return f.concat(g);                                                                                                  // 58
};                                                                                                                     // 59
                                                                                                                       // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/autoform/autoform.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var defaultFormId = "_afGenericID";                                                                                    // 1
var formPreserve = new FormPreserve("autoforms");                                                                      // 2
var formData = {}; //for looking up autoform data by form ID                                                           // 3
var templatesById = {}; //keep a reference of autoForm templates by form `id` for AutoForm.getFormValues               // 4
var arrayFields = {}; //track # of array fields per form                                                               // 5
var formValues = {}; //for reactive show/hide based on current value of a field                                        // 6
                                                                                                                       // 7
AutoForm = {}; //exported                                                                                              // 8
                                                                                                                       // 9
/**                                                                                                                    // 10
 * @method AutoForm.addHooks                                                                                           // 11
 * @public                                                                                                             // 12
 * @param {String[]|String|null} formIds Form `id` or array of form IDs to which these hooks apply. Specify `null` to add hooks that will run for every form.
 * @param {Object} hooks Hooks to add, where supported names are "before", "after", "formToDoc", "docToForm", "onSubmit", "onSuccess", and "onError".
 * @returns {undefined}                                                                                                // 15
 *                                                                                                                     // 16
 * Defines hooks to be used by one or more forms. Extends hooks lists if called multiple times for the same            // 17
 * form.                                                                                                               // 18
 */                                                                                                                    // 19
AutoForm.addHooks = function autoFormAddHooks(formIds, hooks, replace) {                                               // 20
  if (typeof formIds === "string") {                                                                                   // 21
    formIds = [formIds];                                                                                               // 22
  }                                                                                                                    // 23
                                                                                                                       // 24
  // If formIds is null, add global hooks                                                                              // 25
  if (!formIds) {                                                                                                      // 26
    Hooks.addHooksToList(Hooks.global, hooks, replace);                                                                // 27
  } else {                                                                                                             // 28
    _.each(formIds, function (formId) {                                                                                // 29
                                                                                                                       // 30
      // Init the hooks object if not done yet                                                                         // 31
      Hooks.form[formId] = Hooks.form[formId] || {                                                                     // 32
        before: {},                                                                                                    // 33
        after: {},                                                                                                     // 34
        formToDoc: [],                                                                                                 // 35
        docToForm: [],                                                                                                 // 36
        onSubmit: [],                                                                                                  // 37
        onSuccess: [],                                                                                                 // 38
        onError: []                                                                                                    // 39
      };                                                                                                               // 40
                                                                                                                       // 41
      Hooks.addHooksToList(Hooks.form[formId], hooks, replace);                                                        // 42
    });                                                                                                                // 43
  }                                                                                                                    // 44
};                                                                                                                     // 45
                                                                                                                       // 46
/**                                                                                                                    // 47
 * @method AutoForm.hooks                                                                                              // 48
 * @public                                                                                                             // 49
 * @param {Object} hooks                                                                                               // 50
 * @returns {undefined}                                                                                                // 51
 *                                                                                                                     // 52
 * Defines hooks by form id. Extends hooks lists if called multiple times for the same                                 // 53
 * form.                                                                                                               // 54
 */                                                                                                                    // 55
AutoForm.hooks = function autoFormHooks(hooks, replace) {                                                              // 56
  _.each(hooks, function(hooksObj, formId) {                                                                           // 57
    AutoForm.addHooks(formId, hooksObj, replace);                                                                      // 58
  });                                                                                                                  // 59
};                                                                                                                     // 60
                                                                                                                       // 61
/**                                                                                                                    // 62
 * @method AutoForm.resetForm                                                                                          // 63
 * @public                                                                                                             // 64
 * @param {String} formId                                                                                              // 65
 * @returns {undefined}                                                                                                // 66
 *                                                                                                                     // 67
 * Resets validation for an autoform.                                                                                  // 68
 */                                                                                                                    // 69
AutoForm.resetForm = function autoFormResetForm(formId) {                                                              // 70
  if (typeof formId !== "string") {                                                                                    // 71
    return;                                                                                                            // 72
  }                                                                                                                    // 73
                                                                                                                       // 74
  formPreserve.unregisterForm(formId);                                                                                 // 75
                                                                                                                       // 76
  formData[formId] && formData[formId].ss && formData[formId].ss.namedContext(formId).resetValidation();               // 77
  // If simpleSchema is undefined, we haven't yet rendered the form, and therefore                                     // 78
  // there is no need to reset validation for it. No error need be thrown.                                             // 79
};                                                                                                                     // 80
                                                                                                                       // 81
var deps = {};                                                                                                         // 82
                                                                                                                       // 83
var defaultTemplate = "bootstrap3";                                                                                    // 84
deps.defaultTemplate = new Deps.Dependency;                                                                            // 85
AutoForm.setDefaultTemplate = function autoFormSetDefaultTemplate(template) {                                          // 86
  defaultTemplate = template;                                                                                          // 87
  deps.defaultTemplate.changed();                                                                                      // 88
};                                                                                                                     // 89
                                                                                                                       // 90
AutoForm.getDefaultTemplate = function autoFormGetDefaultTemplate() {                                                  // 91
  deps.defaultTemplate.depend();                                                                                       // 92
  return defaultTemplate;                                                                                              // 93
};                                                                                                                     // 94
                                                                                                                       // 95
// All use global template by default                                                                                  // 96
var defaultTypeTemplates = {                                                                                           // 97
  quickForm: null,                                                                                                     // 98
  afFieldLabel: null,                                                                                                  // 99
  afFieldSelect: null,                                                                                                 // 100
  afCheckboxGroup: null,                                                                                               // 101
  afRadioGroup: null,                                                                                                  // 102
  afSelect: null,                                                                                                      // 103
  afTextarea: null,                                                                                                    // 104
  afContenteditable: null,                                                                                             // 105
  afCheckbox: null,                                                                                                    // 106
  afRadio: null,                                                                                                       // 107
  afInput: null,                                                                                                       // 108
  afDeleteButton: null,                                                                                                // 109
  afQuickField: null,                                                                                                  // 110
  afObjectField: null,                                                                                                 // 111
  afArrayField: null                                                                                                   // 112
};                                                                                                                     // 113
deps.defaultTypeTemplates = {                                                                                          // 114
  quickForm: new Deps.Dependency,                                                                                      // 115
  afFieldLabel: new Deps.Dependency,                                                                                   // 116
  afFieldSelect: new Deps.Dependency,                                                                                  // 117
  afCheckboxGroup: new Deps.Dependency,                                                                                // 118
  afRadioGroup: new Deps.Dependency,                                                                                   // 119
  afSelect: new Deps.Dependency,                                                                                       // 120
  afTextarea: new Deps.Dependency,                                                                                     // 121
  afContenteditable: new Deps.Dependency,                                                                              // 122
  afCheckbox: new Deps.Dependency,                                                                                     // 123
  afRadio: new Deps.Dependency,                                                                                        // 124
  afInput: new Deps.Dependency,                                                                                        // 125
  afDeleteButton: new Deps.Dependency,                                                                                 // 126
  afQuickField: new Deps.Dependency,                                                                                   // 127
  afObjectField: new Deps.Dependency,                                                                                  // 128
  afArrayField: new Deps.Dependency                                                                                    // 129
};                                                                                                                     // 130
                                                                                                                       // 131
/**                                                                                                                    // 132
 * @method AutoForm.setDefaultTemplateForType                                                                          // 133
 * @public                                                                                                             // 134
 * @param {String} type                                                                                                // 135
 * @param {String} template                                                                                            // 136
 */                                                                                                                    // 137
AutoForm.setDefaultTemplateForType = function autoFormSetDefaultTemplateForType(type, template) {                      // 138
  if (!deps.defaultTypeTemplates[type]) {                                                                              // 139
    throw new Error("invalid template type: " + type);                                                                 // 140
  }                                                                                                                    // 141
  if (template !== null && !Template[type + "_" + template]) {                                                         // 142
    throw new Error("setDefaultTemplateForType can't set default template to \"" + template + "\" for type \"" + type + "\" because there is no defined template with the name \"" + type + "_" + template + "\"");
  }                                                                                                                    // 144
  defaultTypeTemplates[type] = template;                                                                               // 145
  deps.defaultTypeTemplates[type].changed();                                                                           // 146
};                                                                                                                     // 147
                                                                                                                       // 148
/**                                                                                                                    // 149
 * @method AutoForm.getDefaultTemplateForType                                                                          // 150
 * @public                                                                                                             // 151
 * @param {String} type                                                                                                // 152
 * @return {String} Template name                                                                                      // 153
 *                                                                                                                     // 154
 * Reactive.                                                                                                           // 155
 */                                                                                                                    // 156
AutoForm.getDefaultTemplateForType = function autoFormGetDefaultTemplateForType(type) {                                // 157
  if (!deps.defaultTypeTemplates[type]) {                                                                              // 158
    throw new Error("invalid template type: " + type);                                                                 // 159
  }                                                                                                                    // 160
  deps.defaultTypeTemplates[type].depend();                                                                            // 161
  return defaultTypeTemplates[type];                                                                                   // 162
};                                                                                                                     // 163
                                                                                                                       // 164
/**                                                                                                                    // 165
 * @method AutoForm.getFormValues                                                                                      // 166
 * @public                                                                                                             // 167
 * @param {String} formId The `id` attribute of the `autoForm` you want current values for.                            // 168
 * @return {Object}                                                                                                    // 169
 *                                                                                                                     // 170
 * Returns an object representing the current values of all schema-based fields in the form.                           // 171
 * The returned object contains two properties, "insertDoc" and "updateDoc", which represent                           // 172
 * the field values as a normal object and as a MongoDB modifier, respectively.                                        // 173
 */                                                                                                                    // 174
AutoForm.getFormValues = function autoFormGetFormValues(formId) {                                                      // 175
  var template = templatesById[formId];                                                                                // 176
  if (!template || template._notInDOM) {                                                                               // 177
    throw new Error("getFormValues: There is currently no autoForm template rendered for the form with id " + formId); // 178
  }                                                                                                                    // 179
  // Get a reference to the SimpleSchema instance that should be used for                                              // 180
  // determining what types we want back for each field.                                                               // 181
  var context = template.data;                                                                                         // 182
  var ss = Utility.getSimpleSchemaFromContext(context, formId);                                                        // 183
  return getFormValues(template, formId, ss);                                                                          // 184
};                                                                                                                     // 185
                                                                                                                       // 186
/**                                                                                                                    // 187
 * @method AutoForm.getFieldValue                                                                                      // 188
 * @public                                                                                                             // 189
 * @param {String} formId The `id` attribute of the `autoForm` you want current values for.                            // 190
 * @param {String} fieldName The name of the field for which you want the current value.                               // 191
 * @return {Any}                                                                                                       // 192
 *                                                                                                                     // 193
 * Returns the value of the field (the value that would be used if the form were submitted right now).                 // 194
 * This is a reactive method that will rerun whenever the current value of the requested field changes.                // 195
 */                                                                                                                    // 196
AutoForm.getFieldValue = function autoFormGetFieldValue(formId, fieldName) {                                           // 197
  return getTrackedFieldValue(formId, fieldName);                                                                      // 198
};                                                                                                                     // 199
                                                                                                                       // 200
/*                                                                                                                     // 201
 * Shared                                                                                                              // 202
 */                                                                                                                    // 203
                                                                                                                       // 204
UI.registerHelper('_af_findAutoForm', function afFindAutoForm(name) {                                                  // 205
  var afContext, i = 1;                                                                                                // 206
                                                                                                                       // 207
  do {                                                                                                                 // 208
    afContext = arguments[i];                                                                                          // 209
    i++;                                                                                                               // 210
  } while (afContext && !afContext._af);                                                                               // 211
                                                                                                                       // 212
  if (!afContext)                                                                                                      // 213
    throw new Error(name + " must be used within an autoForm block");                                                  // 214
                                                                                                                       // 215
  return afContext;                                                                                                    // 216
});                                                                                                                    // 217
                                                                                                                       // 218
Template.afFieldInput.getTemplate =                                                                                    // 219
Template.afFieldLabel.getTemplate =                                                                                    // 220
Template.afFieldSelect.getTemplate =                                                                                   // 221
Template.afDeleteButton.getTemplate =                                                                                  // 222
Template.afQuickField.getTemplate =                                                                                    // 223
Template.afObjectField.getTemplate =                                                                                   // 224
Template.afArrayField.getTemplate =                                                                                    // 225
Template.quickForm.getTemplate =                                                                                       // 226
function afGenericGetTemplate(templateType, templateName) {                                                            // 227
  var result;                                                                                                          // 228
                                                                                                                       // 229
  var defaultTemplate = AutoForm.getDefaultTemplateForType(templateType) || AutoForm.getDefaultTemplate();             // 230
                                                                                                                       // 231
  // Determine template name                                                                                           // 232
  if (templateName) {                                                                                                  // 233
    var result = Template[templateType + '_' + templateName];                                                          // 234
    if (!result) {                                                                                                     // 235
      console.warn(templateType + ': "' + templateName + '" is not a valid template name. Falling back to default template, "' + defaultTemplate + '".');
    }                                                                                                                  // 237
  }                                                                                                                    // 238
                                                                                                                       // 239
  if (!result) {                                                                                                       // 240
    result = Template[templateType + '_' + defaultTemplate];                                                           // 241
    if (!result) {                                                                                                     // 242
      throw new Error(templateType + ': "' + defaultTemplate + '" is not a valid template name');                      // 243
    }                                                                                                                  // 244
  }                                                                                                                    // 245
                                                                                                                       // 246
  // Return the template instance that we want to use                                                                  // 247
  return result;                                                                                                       // 248
};                                                                                                                     // 249
                                                                                                                       // 250
/*                                                                                                                     // 251
 * autoForm                                                                                                            // 252
 */                                                                                                                    // 253
                                                                                                                       // 254
Template.autoForm.atts = function autoFormTplAtts() {                                                                  // 255
  var context = _.clone(this);                                                                                         // 256
                                                                                                                       // 257
  // By default, we add the `novalidate="novalidate"` attribute to our form,                                           // 258
  // unless the user passes `validation="browser"`.                                                                    // 259
  if (context.validation !== "browser" && !context.novalidate) {                                                       // 260
    context.novalidate = "novalidate";                                                                                 // 261
  }                                                                                                                    // 262
  // After removing all of the props we know about, everything else should                                             // 263
  // become a form attribute.                                                                                          // 264
  return _.omit(context, "schema", "collection", "validation", "doc", "resetOnSuccess", "type", "template");           // 265
};                                                                                                                     // 266
                                                                                                                       // 267
Template.autoForm.innerContext = function autoFormTplInnerContext(outerContext) {                                      // 268
  var context = this;                                                                                                  // 269
  var formId = context.id || defaultFormId;                                                                            // 270
  var collection = Utility.lookup(context.collection);                                                                 // 271
  var ss = Utility.getSimpleSchemaFromContext(context, formId);                                                        // 272
                                                                                                                       // 273
  // Retain doc values after a "hot code push", if possible                                                            // 274
  var retrievedDoc = formPreserve.getDocument(formId);                                                                 // 275
  if (retrievedDoc !== false) {                                                                                        // 276
    context.doc = retrievedDoc;                                                                                        // 277
  }                                                                                                                    // 278
                                                                                                                       // 279
  var mDoc;                                                                                                            // 280
  if (context.doc && !_.isEmpty(context.doc)) {                                                                        // 281
    // Clone doc                                                                                                       // 282
    var copy = _.clone(context.doc);                                                                                   // 283
    // Pass doc through docToForm hooks                                                                                // 284
    _.each(Hooks.getHooks(formId, 'docToForm'), function autoFormEachDocToForm(func) {                                 // 285
      copy = func(copy, ss, formId);                                                                                   // 286
    });                                                                                                                // 287
    // Create a "flat doc" that can be used to easily get values for corresponding                                     // 288
    // form fields.                                                                                                    // 289
    mDoc = new MongoObject(copy);                                                                                      // 290
  }                                                                                                                    // 291
                                                                                                                       // 292
  // Set up the context to be used for everything within the autoform.                                                 // 293
  var innerContext = {_af: {                                                                                           // 294
    formId: formId,                                                                                                    // 295
    collection: collection,                                                                                            // 296
    ss: ss,                                                                                                            // 297
    doc: context.doc,                                                                                                  // 298
    mDoc: mDoc,                                                                                                        // 299
    validationType: context.validation || "submitThenKeyup",                                                           // 300
    submitType: context.type,                                                                                          // 301
    resetOnSuccess: context.resetOnSuccess                                                                             // 302
  }};                                                                                                                  // 303
                                                                                                                       // 304
  // Cache context for lookup by formId                                                                                // 305
  formData[formId] = innerContext._af;                                                                                 // 306
                                                                                                                       // 307
  // Preserve outer context, allowing access within autoForm block without needing ..                                  // 308
  _.extend(innerContext, outerContext);                                                                                // 309
  return innerContext;                                                                                                 // 310
};                                                                                                                     // 311
                                                                                                                       // 312
Template.autoForm.created = function autoFormCreated() {                                                               // 313
  var self = this;                                                                                                     // 314
  var formId = self.data.id || defaultFormId;                                                                          // 315
  // Add to templatesById list                                                                                         // 316
  templatesById[formId] = self;                                                                                        // 317
};                                                                                                                     // 318
                                                                                                                       // 319
Template.autoForm.destroyed = function autoFormDestroyed() {                                                           // 320
  var self = this;                                                                                                     // 321
  self._notInDOM = true;                                                                                               // 322
  var formId = self.data.id || defaultFormId;                                                                          // 323
                                                                                                                       // 324
  // Remove from templatesById list                                                                                    // 325
  if (templatesById[formId]) {                                                                                         // 326
    delete templatesById[formId];                                                                                      // 327
  }                                                                                                                    // 328
                                                                                                                       // 329
  // Remove from data list                                                                                             // 330
  if (formData[formId]) {                                                                                              // 331
    delete formData[formId];                                                                                           // 332
  }                                                                                                                    // 333
                                                                                                                       // 334
  // Remove from array fields list                                                                                     // 335
  if (arrayFields[formId]) {                                                                                           // 336
    delete arrayFields[formId];                                                                                        // 337
  }                                                                                                                    // 338
                                                                                                                       // 339
  // Remove from field values                                                                                          // 340
  if (formValues[formId]) {                                                                                            // 341
    delete formValues[formId];                                                                                         // 342
  }                                                                                                                    // 343
                                                                                                                       // 344
  // Unregister form preservation                                                                                      // 345
  formPreserve.unregisterForm(formId);                                                                                 // 346
};                                                                                                                     // 347
                                                                                                                       // 348
/*                                                                                                                     // 349
 * quickForm                                                                                                           // 350
 */                                                                                                                    // 351
                                                                                                                       // 352
UI.registerHelper('quickForm', function quickFormHelper() {                                                            // 353
  throw new Error('Use the new syntax {{> quickForm}} rather than {{quickForm}}');                                     // 354
});                                                                                                                    // 355
                                                                                                                       // 356
Template.quickForm.qfContext = function quickFormContext(atts) {                                                       // 357
  // Pass along quickForm context to autoForm context, minus a few                                                     // 358
  // properties that are specific to quickForms.                                                                       // 359
  var qfAutoFormContext = _.omit(atts, "buttonContent", "buttonClasses", "fields", "omitFields");                      // 360
                                                                                                                       // 361
  return _.extend({                                                                                                    // 362
    qfFormFields: qfFormFields,                                                                                        // 363
    qfNeedsButton: qfNeedsButton,                                                                                      // 364
    qfAutoFormContext: qfAutoFormContext                                                                               // 365
  }, atts);                                                                                                            // 366
};                                                                                                                     // 367
                                                                                                                       // 368
function qfFormFields() {                                                                                              // 369
  var context = this;                                                                                                  // 370
  var ss = context._af.ss;                                                                                             // 371
                                                                                                                       // 372
  // Get the list of fields we want included                                                                           // 373
  var fieldList;                                                                                                       // 374
  if (context.fields) {                                                                                                // 375
    fieldList = context.fields;                                                                                        // 376
    if (typeof fieldList === "string") {                                                                               // 377
      fieldList = fieldList.replace(/ /g, '').split(',');                                                              // 378
    }                                                                                                                  // 379
    if (!_.isArray(fieldList)) {                                                                                       // 380
      throw new Error('AutoForm: fields attribute must be an array or a string containing a comma-delimited list of fields');
    }                                                                                                                  // 382
  } else {                                                                                                             // 383
    // If we weren't given a fieldList, use all first level schema keys by default                                     // 384
    fieldList = ss.firstLevelSchemaKeys() || [];                                                                       // 385
  }                                                                                                                    // 386
                                                                                                                       // 387
  // If user wants to omit some fields, remove those from the array                                                    // 388
  if (context.omitFields) {                                                                                            // 389
    var omitFields = stringToArray(context.omitFields);                                                                // 390
    if (!_.isArray(omitFields)) {                                                                                      // 391
      throw new Error('AutoForm: omitFields attribute must be an array or a string containing a comma-delimited list of fields');
    }                                                                                                                  // 393
    fieldList = _.difference(fieldList, omitFields);                                                                   // 394
  }                                                                                                                    // 395
  return quickFieldFormFields(fieldList, context._af, true);                                                           // 396
}                                                                                                                      // 397
                                                                                                                       // 398
function quickFieldFormFields(fieldList, afContext, useAllowedValuesAsOptions) {                                       // 399
  var ss = afContext.ss;                                                                                               // 400
  var addedFields = [];                                                                                                // 401
                                                                                                                       // 402
  // Filter out fields we truly don't want                                                                             // 403
  fieldList = _.filter(fieldList, function shouldIncludeField(field) {                                                 // 404
    var fieldDefs = ss.schema(field);                                                                                  // 405
                                                                                                                       // 406
    // Don't include fields with denyInsert=true when it's an insert form                                              // 407
    if (fieldDefs.denyInsert && afContext.submitType === "insert")                                                     // 408
      return false;                                                                                                    // 409
                                                                                                                       // 410
    // Don't include fields with denyUpdate=true when it's an update form                                              // 411
    if (fieldDefs.denyUpdate && afContext.submitType === "update")                                                     // 412
      return false;                                                                                                    // 413
                                                                                                                       // 414
    return true;                                                                                                       // 415
  });                                                                                                                  // 416
                                                                                                                       // 417
  // If we've filtered out all fields, we're done                                                                      // 418
  if (!fieldList || !fieldList.length)                                                                                 // 419
    return [];                                                                                                         // 420
                                                                                                                       // 421
  // Define extra properties to be added to all fields                                                                 // 422
  var extendedAtts = {                                                                                                 // 423
    autoform: {_af: afContext}                                                                                         // 424
  };                                                                                                                   // 425
                                                                                                                       // 426
  if (afContext.submitType === "disabled") {                                                                           // 427
    extendedAtts.disabled = "";                                                                                        // 428
  } else if (afContext.submitType === "readonly") {                                                                    // 429
    extendedAtts.readonly = "";                                                                                        // 430
  }                                                                                                                    // 431
                                                                                                                       // 432
  // Define a function to get the necessary info for each requested field                                              // 433
  function infoForField(field, extendedProps) {                                                                        // 434
                                                                                                                       // 435
    // Ensure fields are not added more than once                                                                      // 436
    if (_.contains(addedFields, field))                                                                                // 437
      return;                                                                                                          // 438
                                                                                                                       // 439
    // Get schema definitions for this field                                                                           // 440
    var fieldDefs = ss.schema(field);                                                                                  // 441
                                                                                                                       // 442
    var info = {name: field};                                                                                          // 443
                                                                                                                       // 444
    // If there are allowedValues defined, use them as select element options                                          // 445
    if (useAllowedValuesAsOptions) {                                                                                   // 446
      var av = fieldDefs.type === Array ? ss.schema(field + ".$").allowedValues : fieldDefs.allowedValues;             // 447
      if (_.isArray(av)) {                                                                                             // 448
        info.options = "allowed";                                                                                      // 449
      }                                                                                                                // 450
    }                                                                                                                  // 451
                                                                                                                       // 452
    addedFields.push(field);                                                                                           // 453
                                                                                                                       // 454
    // Return the field info along with the extra properties that                                                      // 455
    // all fields should have                                                                                          // 456
    return _.extend(info, extendedProps);                                                                              // 457
  }                                                                                                                    // 458
                                                                                                                       // 459
  // Return info for all requested fields                                                                              // 460
  return _.map(fieldList, function autoFormFormFieldsListEach(field) {                                                 // 461
    return infoForField(field, extendedAtts);                                                                          // 462
  });                                                                                                                  // 463
}                                                                                                                      // 464
                                                                                                                       // 465
function qfNeedsButton() {                                                                                             // 466
  var context = this;                                                                                                  // 467
  var needsButton = true;                                                                                              // 468
                                                                                                                       // 469
  switch (context._af.submitType) {                                                                                    // 470
    case "readonly":                                                                                                   // 471
    case "disabled":                                                                                                   // 472
      needsButton = false;                                                                                             // 473
      break;                                                                                                           // 474
    default:                                                                                                           // 475
      needsButton = true;                                                                                              // 476
      break;                                                                                                           // 477
  }                                                                                                                    // 478
                                                                                                                       // 479
  return needsButton;                                                                                                  // 480
}                                                                                                                      // 481
                                                                                                                       // 482
/*                                                                                                                     // 483
 * afFieldLabel                                                                                                        // 484
 */                                                                                                                    // 485
                                                                                                                       // 486
UI.registerHelper('afFieldLabel', function afFieldLabelHelper() {                                                      // 487
  throw new Error('Use the new syntax {{> afFieldLabel name="name"}} rather than {{afFieldLabel "name"}}');            // 488
});                                                                                                                    // 489
                                                                                                                       // 490
function getLabel() {                                                                                                  // 491
  var c = Utility.normalizeContext(this, "afFieldLabel");                                                              // 492
  return c.af.ss.label(c.atts.name);                                                                                   // 493
}                                                                                                                      // 494
                                                                                                                       // 495
Template.afFieldLabel.labelContext = function getLabelContext(autoform, atts) {                                        // 496
  return {                                                                                                             // 497
    autoform: autoform,                                                                                                // 498
    atts: atts,                                                                                                        // 499
    label: getLabel                                                                                                    // 500
  };                                                                                                                   // 501
};                                                                                                                     // 502
                                                                                                                       // 503
/*                                                                                                                     // 504
 * afFieldSelect                                                                                                       // 505
 */                                                                                                                    // 506
                                                                                                                       // 507
UI.registerHelper('afFieldSelect', function afFieldSelectHelper() {                                                    // 508
  throw new Error('Use the new syntax {{> afFieldSelect name="name"}} rather than {{afFieldSelect "name"}}');          // 509
});                                                                                                                    // 510
                                                                                                                       // 511
Template.afFieldSelect.inputContext = function afFieldSelectInputContext(options) {                                    // 512
  var ctx = ((options || {}).hash || {});                                                                              // 513
  var c = ctx.outerContext;                                                                                            // 514
  var iData = getInputData(c.defs, c.atts, c.value, "select", c.ss.label(c.atts.name), c.expectsArray);                // 515
  return _.extend({contentBlock: ctx.contentBlock}, iData);                                                            // 516
};                                                                                                                     // 517
                                                                                                                       // 518
/*                                                                                                                     // 519
 * afFieldInput                                                                                                        // 520
 */                                                                                                                    // 521
                                                                                                                       // 522
UI.registerHelper('afFieldInput', function afFieldInputHelper() {                                                      // 523
  throw new Error('Use the new syntax {{> afFieldInput name="name"}} rather than {{afFieldInput "name"}}');            // 524
});                                                                                                                    // 525
                                                                                                                       // 526
Template.afFieldInput.inputOuterContext =                                                                              // 527
Template.afFieldSelect.inputOuterContext =                                                                             // 528
function (options) {                                                                                                   // 529
  var c = Utility.normalizeContext(options.hash, "afFieldInput");                                                      // 530
                                                                                                                       // 531
  var ss = c.af.ss;                                                                                                    // 532
  var defs = Utility.getDefs(ss, c.atts.name); //defs will not be undefined                                            // 533
                                                                                                                       // 534
  // Get schema type                                                                                                   // 535
  var schemaType = defs.type;                                                                                          // 536
  // Adjust for array fields if necessary                                                                              // 537
  var expectsArray = false;                                                                                            // 538
  var defaultValue = defs.defaultValue; //make sure to use pre-adjustment defaultValue for arrays                      // 539
  if (schemaType === Array) {                                                                                          // 540
    defs = ss.schema(c.atts.name + ".$");                                                                              // 541
    schemaType = defs.type;                                                                                            // 542
                                                                                                                       // 543
    //if the user overrides the type to anything,                                                                      // 544
    //then we won't be using a select box and                                                                          // 545
    //we won't be expecting an array for the current value                                                             // 546
    expectsArray = !c.atts.type;                                                                                       // 547
  }                                                                                                                    // 548
                                                                                                                       // 549
  // Get input value                                                                                                   // 550
  var value = getInputValue(c.atts.name, c.atts.value, c.af.mDoc, expectsArray, defaultValue);                         // 551
                                                                                                                       // 552
  // Track field's value for reactive show/hide of other fields by value                                               // 553
  updateTrackedFieldValue(c.af.formId, c.atts.name, value);                                                            // 554
                                                                                                                       // 555
  // Get type                                                                                                          // 556
  var type = getInputType(c.atts, defs, value);                                                                        // 557
                                                                                                                       // 558
  // Get template type                                                                                                 // 559
  var templateType = getInputTemplateType(c.atts, type, schemaType, expectsArray);                                     // 560
                                                                                                                       // 561
  return {                                                                                                             // 562
    defs: defs,                                                                                                        // 563
    ss: ss,                                                                                                            // 564
    atts: c.atts,                                                                                                      // 565
    type: type,                                                                                                        // 566
    value: value,                                                                                                      // 567
    expectsArray: expectsArray,                                                                                        // 568
    templateType: templateType                                                                                         // 569
  };                                                                                                                   // 570
};                                                                                                                     // 571
                                                                                                                       // 572
Template.afFieldInput.inputContext = function (options) {                                                              // 573
  var c = ((options || {}).hash || {}).outerContext;                                                                   // 574
  return getInputData(c.defs, c.atts, c.value, c.type, c.ss.label(c.atts.name), c.expectsArray);                       // 575
};                                                                                                                     // 576
                                                                                                                       // 577
/*                                                                                                                     // 578
 * afDeleteButton                                                                                                      // 579
 */                                                                                                                    // 580
                                                                                                                       // 581
UI.registerHelper('afDeleteButton', function afDeleteButtonHelper() {                                                  // 582
  throw new Error('Use the syntax {{> afDeleteButton collection=collection doc=doc}}');                                // 583
});                                                                                                                    // 584
                                                                                                                       // 585
Template.afDeleteButton.innerContext = function afDeleteButtonInnerContext(ctx, contentBlock) {                        // 586
  return _.extend(ctx, {contentBlock: contentBlock});                                                                  // 587
};                                                                                                                     // 588
                                                                                                                       // 589
/*                                                                                                                     // 590
 * afArrayField                                                                                                        // 591
 */                                                                                                                    // 592
                                                                                                                       // 593
UI.registerHelper('afArrayField', function afArrayFieldHelper() {                                                      // 594
  throw new Error('Use the syntax {{> afArrayField name="name"}} rather than {{afArrayField "name"}}');                // 595
});                                                                                                                    // 596
                                                                                                                       // 597
Template.afArrayField.innerContext = function (options) {                                                              // 598
  var c = Utility.normalizeContext(options.hash, "afArrayField");                                                      // 599
  var name = c.atts.name;                                                                                              // 600
  var fieldMinCount = c.atts.minCount || 0;                                                                            // 601
  var fieldMaxCount = c.atts.maxCount || Infinity;                                                                     // 602
  var ss = c.af.ss;                                                                                                    // 603
  var formId = c.af.formId;                                                                                            // 604
                                                                                                                       // 605
  var range = getMinMax(formId, name, fieldMinCount, fieldMaxCount);                                                   // 606
  var currentCount = arrayFieldCount(formId, name, fieldMinCount, fieldMaxCount) - arrayFields[formId][name].removedCount;
  var hasMoreThanMinimum = (currentCount > range.minCount);                                                            // 608
  var hasLessThanMaximum = (currentCount < range.maxCount);                                                            // 609
                                                                                                                       // 610
  return {                                                                                                             // 611
    name: name,                                                                                                        // 612
    label: ss.label(name),                                                                                             // 613
    hasMoreThanMinimum: hasMoreThanMinimum,                                                                            // 614
    hasLessThanMaximum: hasLessThanMaximum,                                                                            // 615
    overrideMinCount: fieldMinCount,                                                                                   // 616
    overrideMaxCount: fieldMaxCount                                                                                    // 617
  };                                                                                                                   // 618
};                                                                                                                     // 619
                                                                                                                       // 620
/*                                                                                                                     // 621
 * afObjectField                                                                                                       // 622
 */                                                                                                                    // 623
                                                                                                                       // 624
UI.registerHelper('afObjectField', function afObjectFieldHelper() {                                                    // 625
  throw new Error('Use the syntax {{> afObjectField name="name"}} rather than {{afObjectField "name"}}');              // 626
});                                                                                                                    // 627
                                                                                                                       // 628
Template.afObjectField.innerContext = function (options) {                                                             // 629
  var c = Utility.normalizeContext(options.hash, "afObjectField");                                                     // 630
  var name = c.atts.name;                                                                                              // 631
  var ss = c.af.ss;                                                                                                    // 632
                                                                                                                       // 633
  // Get list of field names that are descendants of this field's name                                                 // 634
  var fields = autoFormChildKeys(ss, name);                                                                            // 635
                                                                                                                       // 636
  // Tack child field name on to end of parent field name. This                                                        // 637
  // ensures that we keep the desired array index for array items.                                                     // 638
  fields = _.map(fields, function (field) {                                                                            // 639
    return name + "." + field;                                                                                         // 640
  });                                                                                                                  // 641
                                                                                                                       // 642
  // Get rid of nested fields specified in omitFields                                                                  // 643
  if(typeof c.afc.omitFields !== "undefined"){                                                                         // 644
    var omitFields = stringToArray(c.afc.omitFields);                                                                  // 645
    fields = _.reject(fields,function(f){                                                                              // 646
       return _.contains(omitFields,SimpleSchema._makeGeneric(f))                                                      // 647
    });                                                                                                                // 648
  }                                                                                                                    // 649
  var formFields = quickFieldFormFields(fields, c.af, true);                                                           // 650
                                                                                                                       // 651
  return {                                                                                                             // 652
    fields: formFields,                                                                                                // 653
    label: ss.label(name)                                                                                              // 654
  };                                                                                                                   // 655
};                                                                                                                     // 656
                                                                                                                       // 657
function stringToArray(s){                                                                                             // 658
  if (typeof s === "string") {                                                                                         // 659
    return s.replace(/ /g, '').split(',');                                                                             // 660
  }else{                                                                                                               // 661
    return s;                                                                                                          // 662
  }                                                                                                                    // 663
};                                                                                                                     // 664
                                                                                                                       // 665
/*                                                                                                                     // 666
 * afQuickField                                                                                                        // 667
 */                                                                                                                    // 668
                                                                                                                       // 669
UI.registerHelper('afQuickField', function afQuickFieldHelper() {                                                      // 670
  throw new Error('Use the new syntax {{> afQuickField name="name"}} rather than {{afQuickField "name"}}');            // 671
});                                                                                                                    // 672
                                                                                                                       // 673
function quickFieldLabelAtts(context, autoform) {                                                                      // 674
  // Remove unwanted props from the hash                                                                               // 675
  context = _.omit(context, 'label');                                                                                  // 676
                                                                                                                       // 677
  // Separate label options from input options; label items begin with "label-"                                        // 678
  var labelContext = {                                                                                                 // 679
    name: context.name,                                                                                                // 680
    template: context.template,                                                                                        // 681
    autoform: autoform                                                                                                 // 682
  };                                                                                                                   // 683
  _.each(context, function autoFormLabelContextEach(val, key) {                                                        // 684
    if (key.indexOf("label-") === 0) {                                                                                 // 685
      labelContext[key.substring(6)] = val;                                                                            // 686
    }                                                                                                                  // 687
  });                                                                                                                  // 688
                                                                                                                       // 689
  return labelContext;                                                                                                 // 690
}                                                                                                                      // 691
                                                                                                                       // 692
function quickFieldInputAtts(context, autoform) {                                                                      // 693
  // Remove unwanted props from the hash                                                                               // 694
  context = _.omit(context, 'label');                                                                                  // 695
                                                                                                                       // 696
  // Separate label options from input options; label items begin with "label-"                                        // 697
  var inputContext = {autoform: autoform};                                                                             // 698
  _.each(context, function autoFormInputContextEach(val, key) {                                                        // 699
    if (key.indexOf("label-") !== 0) {                                                                                 // 700
      inputContext[key] = val;                                                                                         // 701
    }                                                                                                                  // 702
  });                                                                                                                  // 703
                                                                                                                       // 704
  return inputContext;                                                                                                 // 705
}                                                                                                                      // 706
                                                                                                                       // 707
Template.afQuickField.innerContext = function afQuickFieldInnerContext(options) {                                      // 708
  var c = Utility.normalizeContext(options.hash, "afQuickField");                                                      // 709
  var ss = c.af.ss;                                                                                                    // 710
                                                                                                                       // 711
  var labelAtts = quickFieldLabelAtts(c.atts, c.afc);                                                                  // 712
  var inputAtts = quickFieldInputAtts(c.atts, c.afc);                                                                  // 713
  var defs = Utility.getDefs(ss, c.atts.name); //defs will not be undefined                                            // 714
                                                                                                                       // 715
  return {                                                                                                             // 716
    skipLabel: (c.atts.label === false || (defs.type === Boolean && !("select" in c.atts) && !("radio" in c.atts))),   // 717
    afFieldLabelAtts: labelAtts,                                                                                       // 718
    afFieldInputAtts: inputAtts,                                                                                       // 719
    atts: {name: inputAtts.name, autoform: inputAtts.autoform}                                                         // 720
  };                                                                                                                   // 721
};                                                                                                                     // 722
                                                                                                                       // 723
Template.afQuickField.isGroup = function afQuickFieldIsGroup(options) {                                                // 724
  var c = Utility.normalizeContext(options.hash, "afQuickField");                                                      // 725
  var ss = c.af.ss;                                                                                                    // 726
  var defs = Utility.getDefs(ss, c.atts.name); //defs will not be undefined                                            // 727
                                                                                                                       // 728
  return (defs.type === Object);                                                                                       // 729
};                                                                                                                     // 730
                                                                                                                       // 731
Template.afQuickField.isFieldArray = function afQuickFieldIsFieldArray(options) {                                      // 732
  var c = Utility.normalizeContext(options.hash, "afQuickField");                                                      // 733
  var ss = c.af.ss;                                                                                                    // 734
  var defs = Utility.getDefs(ss, c.atts.name); //defs will not be undefined                                            // 735
                                                                                                                       // 736
  // Render an array of fields if we expect an array and we don't have options                                         // 737
  return (defs.type === Array && !c.atts.options);                                                                     // 738
};                                                                                                                     // 739
                                                                                                                       // 740
/*                                                                                                                     // 741
 * afEachArrayItem                                                                                                     // 742
 */                                                                                                                    // 743
                                                                                                                       // 744
Template.afEachArrayItem.innerContext = function afEachArrayItemInnerContext(name, af, minCount, maxCount) {           // 745
  if (!af || !af._af) {                                                                                                // 746
    throw new Error(name + " must be used within an autoForm block");                                                  // 747
  }                                                                                                                    // 748
                                                                                                                       // 749
  var afContext = af._af;                                                                                              // 750
  var arrayCount = arrayFieldCount(afContext.formId, name, minCount, maxCount);                                        // 751
  if (afContext.mDoc) {                                                                                                // 752
    var keyInfo = afContext.mDoc.getInfoForKey(name);                                                                  // 753
    if (keyInfo && _.isArray(keyInfo.value)) {                                                                         // 754
      arrayCount = Math.max(arrayCount, keyInfo.value.length);                                                         // 755
    }                                                                                                                  // 756
  }                                                                                                                    // 757
                                                                                                                       // 758
  var ss = afContext.ss;                                                                                               // 759
                                                                                                                       // 760
  // If this is an array of objects, collect names of object props                                                     // 761
  var childKeys = [];                                                                                                  // 762
  if (ss.schema(name + '.$').type === Object) {                                                                        // 763
    childKeys = autoFormChildKeys(ss, name + '.$');                                                                    // 764
  }                                                                                                                    // 765
                                                                                                                       // 766
  var loopArray = [];                                                                                                  // 767
  for (var i = 0; i < arrayCount; i++) {                                                                               // 768
    var loopCtx = {name: name + '.' + i, index: i, minCount: minCount, maxCount: maxCount};                            // 769
                                                                                                                       // 770
    // If this is an array of objects, add child key names under loopCtx.current[childName] = fullKeyName              // 771
    if (childKeys.length) {                                                                                            // 772
      loopCtx.current = {};                                                                                            // 773
      _.each(childKeys, function (k) {                                                                                 // 774
        loopCtx.current[k] = name + '.' + i + '.' + k;                                                                 // 775
      });                                                                                                              // 776
    }                                                                                                                  // 777
                                                                                                                       // 778
    loopArray.push(loopCtx);                                                                                           // 779
  };                                                                                                                   // 780
                                                                                                                       // 781
  return loopArray;                                                                                                    // 782
};                                                                                                                     // 783
                                                                                                                       // 784
/*                                                                                                                     // 785
 * afFieldMessage                                                                                                      // 786
 */                                                                                                                    // 787
                                                                                                                       // 788
UI.registerHelper('afFieldMessage', function autoFormFieldMessage(options) {                                           // 789
  //help users transition from positional name arg                                                                     // 790
  if (typeof options === "string") {                                                                                   // 791
    throw new Error('Use the new syntax {{afFieldMessage name="name"}} rather than {{afFieldMessage "name"}}');        // 792
  }                                                                                                                    // 793
                                                                                                                       // 794
  var hash = (options || {}).hash || {};                                                                               // 795
  var afContext = hash.autoform && hash.autoform._af || this && this._af;                                              // 796
  var ss = afContext.ss;                                                                                               // 797
  if (!ss) {                                                                                                           // 798
    throw new Error("afFieldMessage helper must be used within an autoForm block");                                    // 799
  }                                                                                                                    // 800
                                                                                                                       // 801
  Utility.getDefs(ss, hash.name); //for side effect of throwing errors when name is not in schema                      // 802
  return ss.namedContext(afContext.formId).keyErrorMessage(hash.name);                                                 // 803
});                                                                                                                    // 804
                                                                                                                       // 805
/*                                                                                                                     // 806
 * afFieldIsInvalid                                                                                                    // 807
 */                                                                                                                    // 808
                                                                                                                       // 809
UI.registerHelper('afFieldIsInvalid', function autoFormFieldIsInvalid(options) {                                       // 810
  //help users transition from positional name arg                                                                     // 811
  if (typeof options === "string") {                                                                                   // 812
    throw new Error('Use the new syntax {{#if afFieldIsInvalid name="name"}} rather than {{#if afFieldIsInvalid "name"}}');
  }                                                                                                                    // 814
                                                                                                                       // 815
  var hash = (options || {}).hash || {};                                                                               // 816
  var afContext = hash.autoform && hash.autoform._af || this && this._af;                                              // 817
  var ss = afContext.ss;                                                                                               // 818
  if (!ss) {                                                                                                           // 819
    throw new Error("afFieldIsInvalid helper must be used within an autoForm block");                                  // 820
  }                                                                                                                    // 821
                                                                                                                       // 822
  Utility.getDefs(ss, hash.name); //for side effect of throwing errors when name is not in schema                      // 823
  return ss.namedContext(afContext.formId).keyIsInvalid(hash.name);                                                    // 824
});                                                                                                                    // 825
                                                                                                                       // 826
/*                                                                                                                     // 827
 * afFieldValueIs                                                                                                      // 828
 */                                                                                                                    // 829
                                                                                                                       // 830
UI.registerHelper('afFieldValueIs', function autoFormFieldValueIs(options) {                                           // 831
  var hash = (options || {}).hash || {};                                                                               // 832
  var afContext = hash.autoform && hash.autoform._af || this && this._af;                                              // 833
  var ss = afContext.ss;                                                                                               // 834
  if (!ss) {                                                                                                           // 835
    throw new Error("afFieldValueIs helper must be used within an autoForm block");                                    // 836
  }                                                                                                                    // 837
                                                                                                                       // 838
  Utility.getDefs(ss, hash.name); //for side effect of throwing errors when name is not in schema                      // 839
  return getTrackedFieldValue(afContext.formId, hash.name) === hash.value;                                             // 840
});                                                                                                                    // 841
                                                                                                                       // 842
/*                                                                                                                     // 843
 * afFieldValueContains                                                                                                // 844
 */                                                                                                                    // 845
                                                                                                                       // 846
UI.registerHelper('afFieldValueContains', function autoFormFieldValueContains(options) {                               // 847
  var hash = (options || {}).hash || {};                                                                               // 848
  var afContext = hash.autoform && hash.autoform._af || this && this._af;                                              // 849
  var ss = afContext.ss;                                                                                               // 850
  if (!ss) {                                                                                                           // 851
    throw new Error("afFieldValueContains helper must be used within an autoForm block");                              // 852
  }                                                                                                                    // 853
                                                                                                                       // 854
  Utility.getDefs(ss, hash.name); //for side effect of throwing errors when name is not in schema                      // 855
  var currentValue = getTrackedFieldValue(afContext.formId, hash.name);                                                // 856
  return _.isArray(currentValue) && _.contains(currentValue, hash.value);                                              // 857
});                                                                                                                    // 858
                                                                                                                       // 859
/*                                                                                                                     // 860
 * Events                                                                                                              // 861
 */                                                                                                                    // 862
                                                                                                                       // 863
function doBefore(docId, doc, hooks, template, name) {                                                                 // 864
  // We pass the template instance in case the hook                                                                    // 865
  // needs the data context                                                                                            // 866
  _.each(hooks, function doBeforeHook(hook) {                                                                          // 867
    if (hook) {                                                                                                        // 868
      if (docId) {                                                                                                     // 869
        doc = hook(docId, doc, template);                                                                              // 870
      } else {                                                                                                         // 871
        doc = hook(doc, template);                                                                                     // 872
      }                                                                                                                // 873
      if (!_.isObject(doc)) {                                                                                          // 874
        throw new Error(name + " must return an object");                                                              // 875
      }                                                                                                                // 876
    }                                                                                                                  // 877
  });                                                                                                                  // 878
  return doc;                                                                                                          // 879
}                                                                                                                      // 880
                                                                                                                       // 881
function beginSubmit(template) {                                                                                       // 882
  // TODO eventually allow users to customize beginSubmit behavior                                                     // 883
  if (!template)                                                                                                       // 884
    return;                                                                                                            // 885
  var submitButton = template.find("button[type=submit]") || template.find("input[type=submit]");                      // 886
  if (submitButton) {                                                                                                  // 887
    submitButton.disabled = true;                                                                                      // 888
  }                                                                                                                    // 889
}                                                                                                                      // 890
                                                                                                                       // 891
function endSubmit(template) {                                                                                         // 892
  // TODO eventually allow users to customize endSubmit behavior                                                       // 893
  if (!template)                                                                                                       // 894
    return;                                                                                                            // 895
  var submitButton = template.find("button[type=submit]") || template.find("input[type=submit]");                      // 896
  if (submitButton) {                                                                                                  // 897
    submitButton.disabled = false;                                                                                     // 898
  }                                                                                                                    // 899
}                                                                                                                      // 900
                                                                                                                       // 901
Template.autoForm.events({                                                                                             // 902
  'submit form': function autoFormSubmitHandler(event, template) {                                                     // 903
    beginSubmit(template);                                                                                             // 904
                                                                                                                       // 905
    //determine what we want to do                                                                                     // 906
    var context = this;                                                                                                // 907
    var isInsert = (context.type === "insert");                                                                        // 908
    var isUpdate = (context.type === "update");                                                                        // 909
    var isRemove = (context.type === "remove");                                                                        // 910
    var isMethod = (context.type === "method");                                                                        // 911
    var isNormalSubmit = (!isInsert && !isUpdate && !isRemove && !isMethod);                                           // 912
    var method = context.meteormethod;                                                                                 // 913
                                                                                                                       // 914
    //init                                                                                                             // 915
    var validationType = context.validation || "submitThenKeyup";                                                      // 916
    var formId = context.id || defaultFormId;                                                                          // 917
    var collection = Utility.lookup(context.collection);                                                               // 918
    var ss = Utility.getSimpleSchemaFromContext(context, formId);                                                      // 919
    var currentDoc = context.doc || null;                                                                              // 920
    var docId = currentDoc ? currentDoc._id : null;                                                                    // 921
    var resetOnSuccess = context.resetOnSuccess;                                                                       // 922
                                                                                                                       // 923
    // Gather hooks                                                                                                    // 924
    var beforeInsert = Hooks.getHooks(formId, 'before', 'insert');                                                     // 925
    var beforeUpdate = Hooks.getHooks(formId, 'before', 'update');                                                     // 926
    var beforeRemove = Hooks.getHooks(formId, 'before', 'remove');                                                     // 927
    var beforeMethod = method && Hooks.getHooks(formId, 'before', method);                                             // 928
    var afterInsert = Hooks.getHooks(formId, 'after', 'insert');                                                       // 929
    var afterUpdate = Hooks.getHooks(formId, 'after', 'update');                                                       // 930
    var afterRemove = Hooks.getHooks(formId, 'after', 'remove');                                                       // 931
    var afterMethod = method && Hooks.getHooks(formId, 'after', method);                                               // 932
    var onSuccess = Hooks.getHooks(formId, 'onSuccess');                                                               // 933
    var onError = Hooks.getHooks(formId, 'onError');                                                                   // 934
    var onSubmit = Hooks.getHooks(formId, 'onSubmit');                                                                 // 935
                                                                                                                       // 936
    // Prevent browser form submission if we're planning to do our own thing                                           // 937
    if (!isNormalSubmit) {                                                                                             // 938
      event.preventDefault();                                                                                          // 939
    }                                                                                                                  // 940
                                                                                                                       // 941
    // Prep haltSubmission function                                                                                    // 942
    function haltSubmission() {                                                                                        // 943
      event.preventDefault();                                                                                          // 944
      event.stopPropagation();                                                                                         // 945
      endSubmit(template);                                                                                             // 946
    }                                                                                                                  // 947
                                                                                                                       // 948
    // Prep function to select the focus the first field with an error                                                 // 949
    function selectFirstInvalidField() {                                                                               // 950
      var ctx = ss.namedContext(formId);                                                                               // 951
      if (!ctx.isValid()) {                                                                                            // 952
        _.every(template.findAll('[data-schema-key]'), function selectFirstInvalidFieldEvery(input) {                  // 953
          if (ctx.keyIsInvalid(input.getAttribute('data-schema-key'))) {                                               // 954
            input.focus();                                                                                             // 955
            return false;                                                                                              // 956
          } else {                                                                                                     // 957
            return true;                                                                                               // 958
          }                                                                                                            // 959
        });                                                                                                            // 960
      }                                                                                                                // 961
    }                                                                                                                  // 962
                                                                                                                       // 963
    // Prep reset form function                                                                                        // 964
    function autoFormDoResetForm() {                                                                                   // 965
      if (!template._notInDOM) {                                                                                       // 966
        template.find("form").reset();                                                                                 // 967
        var focusInput = template.find("[autofocus]");                                                                 // 968
        focusInput && focusInput.focus();                                                                              // 969
      }                                                                                                                // 970
    }                                                                                                                  // 971
                                                                                                                       // 972
    // Prep callback creator function                                                                                  // 973
    function makeCallback(name, afterHook) {                                                                           // 974
      return function autoFormActionCallback(error, result) {                                                          // 975
        if (error) {                                                                                                   // 976
          selectFirstInvalidField();                                                                                   // 977
          _.each(onError, function onErrorEach(hook) {                                                                 // 978
            hook(name, error, template);                                                                               // 979
          });                                                                                                          // 980
        } else {                                                                                                       // 981
          // By default, we reset form after successful submit, but                                                    // 982
          // you can opt out.                                                                                          // 983
          if (resetOnSuccess !== false) {                                                                              // 984
            autoFormDoResetForm();                                                                                     // 985
          }                                                                                                            // 986
          _.each(onSuccess, function onSuccessEach(hook) {                                                             // 987
            hook(name, result, template);                                                                              // 988
          });                                                                                                          // 989
        }                                                                                                              // 990
        _.each(afterHook, function afterHookEach(hook) {                                                               // 991
          hook(error, result, template);                                                                               // 992
        });                                                                                                            // 993
        endSubmit(template);                                                                                           // 994
      };                                                                                                               // 995
    }                                                                                                                  // 996
                                                                                                                       // 997
    // If type is "remove", do that right away since we don't need to gather                                           // 998
    // form values or validate.                                                                                        // 999
    if (isRemove) {                                                                                                    // 1000
      // Call beforeRemove hooks if present, and stop if any return false                                              // 1001
      var shouldStop = _.any(beforeRemove, function eachBeforeRemove(hook) {                                           // 1002
        return (hook(docId, template) === false);                                                                      // 1003
      });                                                                                                              // 1004
      if (shouldStop) {                                                                                                // 1005
        return haltSubmission();                                                                                       // 1006
      }                                                                                                                // 1007
      if(!collection) {                                                                                                // 1008
          throw new Error("AutoForm: You must specify a collection when form type is remove.");                        // 1009
      }                                                                                                                // 1010
      collection.remove(docId, makeCallback('remove', afterRemove));                                                   // 1011
      return;                                                                                                          // 1012
    }                                                                                                                  // 1013
                                                                                                                       // 1014
    // Gather all form values                                                                                          // 1015
    var form = getFormValues(template, formId, ss);                                                                    // 1016
                                                                                                                       // 1017
    // Execute some before hooks                                                                                       // 1018
    var insertDoc = isInsert ? doBefore(null, form.insertDoc, beforeInsert, template, 'before.insert hook') : form.insertDoc;
    var updateDoc = isUpdate && !_.isEmpty(form.updateDoc) ? doBefore(docId, form.updateDoc, beforeUpdate, template, 'before.update hook') : form.updateDoc;
                                                                                                                       // 1021
    // Get a version of the doc that has auto values to validate here. We                                              // 1022
    // don't want to actually send any auto values to the server because                                               // 1023
    // we ultimately want them generated on the server                                                                 // 1024
    var insertDocForValidation = ss.clean(_.clone(insertDoc), {                                                        // 1025
      filter: false,                                                                                                   // 1026
      autoConvert: false,                                                                                              // 1027
      extendAutoValueContext: {                                                                                        // 1028
        userId: (Meteor.userId && Meteor.userId()) || null,                                                            // 1029
        isInsert: true,                                                                                                // 1030
        isUpdate: false,                                                                                               // 1031
        isUpsert: false,                                                                                               // 1032
        isFromTrustedCode: false                                                                                       // 1033
      }                                                                                                                // 1034
    });                                                                                                                // 1035
                                                                                                                       // 1036
    // Prep isValid function                                                                                           // 1037
    var validationErrorTriggered = 0;                                                                                  // 1038
    function isValid(doc, isModifier, type) {                                                                          // 1039
      var result = validationType === 'none' || ss.namedContext(formId).validate(doc, {                                // 1040
        modifier: isModifier,                                                                                          // 1041
        extendedCustomContext: {                                                                                       // 1042
          userId: (Meteor.userId && Meteor.userId()) || null,                                                          // 1043
          isInsert: !isModifier,                                                                                       // 1044
          isUpdate: !!isModifier,                                                                                      // 1045
          isUpsert: false,                                                                                             // 1046
          isFromTrustedCode: false                                                                                     // 1047
        }                                                                                                              // 1048
      });                                                                                                              // 1049
      if (!result && !validationErrorTriggered) {                                                                      // 1050
        selectFirstInvalidField();                                                                                     // 1051
        _.each(onError, function onErrorEach(hook) {                                                                   // 1052
          hook(type, new Error('failed validation'), template);                                                        // 1053
        });                                                                                                            // 1054
        validationErrorTriggered++;                                                                                    // 1055
      }                                                                                                                // 1056
      return result;                                                                                                   // 1057
    }                                                                                                                  // 1058
                                                                                                                       // 1059
    // Perform validation for onSubmit call or for normal form submission                                              // 1060
    if (((onSubmit.length > 0) || isNormalSubmit) && !isValid(insertDocForValidation, false, 'pre-submit validation')) {
      return haltSubmission();                                                                                         // 1062
    }                                                                                                                  // 1063
                                                                                                                       // 1064
    // Call onSubmit                                                                                                   // 1065
    if (onSubmit.length > 0) {                                                                                         // 1066
      var context = {                                                                                                  // 1067
        event: event,                                                                                                  // 1068
        template: template,                                                                                            // 1069
        resetForm: autoFormDoResetForm                                                                                 // 1070
      };                                                                                                               // 1071
      // Pass both types of doc to onSubmit                                                                            // 1072
      var shouldStop = _.any(onSubmit, function eachOnSubmit(hook) {                                                   // 1073
        return (hook.call(context, insertDoc, updateDoc, currentDoc) === false);                                       // 1074
      });                                                                                                              // 1075
      if (shouldStop) {                                                                                                // 1076
        return haltSubmission();                                                                                       // 1077
      }                                                                                                                // 1078
    }                                                                                                                  // 1079
                                                                                                                       // 1080
    // Now we will do the requested insert, update, remove, method, or normal                                          // 1081
    // browser form submission. Even though we may have already validated above                                        // 1082
    // if we have an onSubmit hook, we do it again upon insert or update                                               // 1083
    // because collection2 validation catches additional stuff like unique and                                         // 1084
    // because our form schema need not be the same as our collection schema.                                          // 1085
    if (isInsert) {                                                                                                    // 1086
      if(!collection) {                                                                                                // 1087
         throw new Error("AutoForm: You must specify a collection when form type is insert.");                         // 1088
      }                                                                                                                // 1089
      collection.insert(insertDoc, {validationContext: formId}, makeCallback('insert', afterInsert));                  // 1090
    } else if (isUpdate) {                                                                                             // 1091
      var updateCallback = makeCallback('update', afterUpdate);                                                        // 1092
      if (_.isEmpty(updateDoc)) {                                                                                      // 1093
        // Nothing to update. Just treat it as a successful update.                                                    // 1094
        updateCallback(null, 0);                                                                                       // 1095
      } else {                                                                                                         // 1096
        if(!collection) {                                                                                              // 1097
          throw new Error("AutoForm: You must specify a collection when form type is update.");                        // 1098
        }                                                                                                              // 1099
        collection.update(docId, updateDoc, {validationContext: formId}, updateCallback);                              // 1100
      }                                                                                                                // 1101
    }                                                                                                                  // 1102
                                                                                                                       // 1103
    // We won't do an else here so that a method could be called in                                                    // 1104
    // addition to another action on the same submit                                                                   // 1105
    if (method) {                                                                                                      // 1106
      var methodDoc = doBefore(null, form.insertDoc, beforeMethod, template, 'before.method hook');                    // 1107
      // Get a copy of the doc with auto values added to use for validation                                            // 1108
      var methodDocForValidation = ss.clean(_.clone(methodDoc), {                                                      // 1109
        filter: false,                                                                                                 // 1110
        autoConvert: false,                                                                                            // 1111
        extendAutoValueContext: {                                                                                      // 1112
          userId: (Meteor.userId && Meteor.userId()) || null,                                                          // 1113
          isInsert: true, //methodDoc should be treated like insertDoc                                                 // 1114
          isUpdate: false,                                                                                             // 1115
          isUpsert: false,                                                                                             // 1116
          isFromTrustedCode: false                                                                                     // 1117
        }                                                                                                              // 1118
      });                                                                                                              // 1119
      // Validate first                                                                                                // 1120
      if (!isValid(methodDocForValidation, false, method)) {                                                           // 1121
        return haltSubmission();                                                                                       // 1122
      }                                                                                                                // 1123
      Meteor.call(method, methodDoc, form.updateDoc, makeCallback(method, afterMethod));                               // 1124
    }                                                                                                                  // 1125
  },                                                                                                                   // 1126
  'keyup [data-schema-key]': function autoFormKeyUpHandler(event, template) {                                          // 1127
    var validationType = template.data.validation || 'submitThenKeyup';                                                // 1128
    var onlyIfAlreadyInvalid = (validationType === 'submitThenKeyup');                                                 // 1129
    var skipEmpty = !(event.keyCode === 8 || event.keyCode === 46); //if deleting or backspacing, don't skip empty     // 1130
    if ((validationType === 'keyup' || validationType === 'submitThenKeyup')) {                                        // 1131
      validateField(event.currentTarget.getAttribute("data-schema-key"), template, skipEmpty, onlyIfAlreadyInvalid);   // 1132
    }                                                                                                                  // 1133
  },                                                                                                                   // 1134
  'blur [data-schema-key]': function autoFormBlurHandler(event, template) {                                            // 1135
    var validationType = template.data.validation || 'submitThenKeyup';                                                // 1136
    var onlyIfAlreadyInvalid = (validationType === 'submitThenKeyup' || validationType === 'submitThenBlur');          // 1137
    if (validationType === 'keyup' || validationType === 'blur' || validationType === 'submitThenKeyup' || validationType === 'submitThenBlur') {
      validateField(event.currentTarget.getAttribute("data-schema-key"), template, false, onlyIfAlreadyInvalid);       // 1139
    }                                                                                                                  // 1140
  },                                                                                                                   // 1141
  'change form': function autoFormChangeHandler(event, template) {                                                     // 1142
    var key = event.target.getAttribute("data-schema-key");                                                            // 1143
    if (!key)                                                                                                          // 1144
      return;                                                                                                          // 1145
                                                                                                                       // 1146
    var formId = this.id;                                                                                              // 1147
    var data = formData[formId];                                                                                       // 1148
    if (data && data.ss) {                                                                                             // 1149
      var ss = data.ss;                                                                                                // 1150
      formPreserve.registerForm(formId, function autoFormRegFormCallback() {                                           // 1151
        return getFormValues(template, formId, ss).insertDoc;                                                          // 1152
      });                                                                                                              // 1153
                                                                                                                       // 1154
      // Get field's value for reactive show/hide of other fields by value                                             // 1155
      updateTrackedFieldValue(formId, key, getFieldValue(template, key));                                              // 1156
    }                                                                                                                  // 1157
    var validationType = data.validationType || 'submitThenKeyup';                                                     // 1158
    var onlyIfAlreadyInvalid = (validationType === 'submitThenKeyup' || validationType === 'submitThenBlur');          // 1159
    if (validationType === 'keyup' || validationType === 'blur' || validationType === 'submitThenKeyup' || validationType === 'submitThenBlur') {
      validateField(key, template, false, onlyIfAlreadyInvalid);                                                       // 1161
    }                                                                                                                  // 1162
  },                                                                                                                   // 1163
  'reset form': function autoFormResetHandler(event, template) {                                                       // 1164
    var context = this;                                                                                                // 1165
    var formId = context.id || defaultFormId;                                                                          // 1166
    AutoForm.resetForm(formId);                                                                                        // 1167
    if (context.doc) {                                                                                                 // 1168
      //reload form values from doc                                                                                    // 1169
      event.preventDefault();                                                                                          // 1170
      template['__component__'].render();                                                                              // 1171
    }                                                                                                                  // 1172
  },                                                                                                                   // 1173
  'click .autoform-remove-item': function autoFormClickRemoveItem(event, template) {                                   // 1174
    var self = this;                                                                                                   // 1175
                                                                                                                       // 1176
    event.preventDefault();                                                                                            // 1177
                                                                                                                       // 1178
    var button = template.$(event.currentTarget);                                                                      // 1179
    var name = button.attr('data-autoform-field');                                                                     // 1180
    var index = self.index;                                                                                            // 1181
    var data = template.data;                                                                                          // 1182
    var formId = data && data.id || defaultFormId;                                                                     // 1183
    var fData = formData[formId];                                                                                      // 1184
    if (!fData) {                                                                                                      // 1185
      throw new Error('AutoForm: Can\'t find form data for form with ID "' + formId + '"');                            // 1186
    }                                                                                                                  // 1187
                                                                                                                       // 1188
    //if update, make sure we remove from source doc so that values are correct                                        // 1189
    //XXX seems not necessary but do further testing                                                                   // 1190
    // var mDoc = fData.mDoc;                                                                                          // 1191
    // if (mDoc) {                                                                                                     // 1192
    //   var keyInfo = mDoc.getInfoForKey(name);                                                                       // 1193
    //   if (keyInfo && _.isArray(keyInfo.value)) {                                                                    // 1194
    //     var newArray = _.reject(keyInfo.value, function (v, i) {                                                    // 1195
    //       return (i === index);                                                                                     // 1196
    //     });                                                                                                         // 1197
    //     mDoc.setValueForKey(name, newArray);                                                                        // 1198
    //   }                                                                                                             // 1199
    // }                                                                                                               // 1200
                                                                                                                       // 1201
    var thisItem = button.closest('.autoform-array-item');                                                             // 1202
    var itemCount = thisItem.siblings('.autoform-array-item').length + 1;                                              // 1203
    var minCount = getMinMax(formId, name, self.minCount, self.maxCount).minCount;                                     // 1204
                                                                                                                       // 1205
    // remove the item we clicked                                                                                      // 1206
    if (itemCount > minCount) {                                                                                        // 1207
      thisItem.remove();                                                                                               // 1208
      removeArrayField(formId, name, self.minCount, self.maxCount);                                                    // 1209
    }                                                                                                                  // 1210
  },                                                                                                                   // 1211
  'click .autoform-add-item': function autoFormClickAddItem(event, template) {                                         // 1212
    var self = this;                                                                                                   // 1213
                                                                                                                       // 1214
    event.preventDefault();                                                                                            // 1215
                                                                                                                       // 1216
    var button = template.$(event.currentTarget);                                                                      // 1217
    var name = button.attr('data-autoform-field');                                                                     // 1218
    var data = template.data;                                                                                          // 1219
    var formId = data && data.id || defaultFormId;                                                                     // 1220
                                                                                                                       // 1221
    addArrayField(formId, name, self.overrideMinCount, self.overrideMaxCount);                                         // 1222
  }                                                                                                                    // 1223
});                                                                                                                    // 1224
                                                                                                                       // 1225
/*                                                                                                                     // 1226
 * Private Helper Functions                                                                                            // 1227
 */                                                                                                                    // 1228
                                                                                                                       // 1229
function getFieldsValues(fields) {                                                                                     // 1230
  var doc = {};                                                                                                        // 1231
  _.each(fields, function formValuesEach(field) {                                                                      // 1232
    var name = field.getAttribute("data-schema-key");                                                                  // 1233
    var val = field.value || field.getAttribute('contenteditable') && field.innerHTML; //value is undefined for contenteditable
    var type = field.getAttribute("type") || "";                                                                       // 1235
    type = type.toLowerCase();                                                                                         // 1236
    var tagName = field.tagName || "";                                                                                 // 1237
    tagName = tagName.toLowerCase();                                                                                   // 1238
                                                                                                                       // 1239
    // Handle select                                                                                                   // 1240
    if (tagName === "select") {                                                                                        // 1241
      if (val === "true") { //boolean select                                                                           // 1242
        doc[name] = true;                                                                                              // 1243
      } else if (val === "false") { //boolean select                                                                   // 1244
        doc[name] = false;                                                                                             // 1245
      } else if (field.hasAttribute("multiple")) {                                                                     // 1246
        //multiple select, so we want an array value                                                                   // 1247
        doc[name] = Utility.getSelectValues(field);                                                                    // 1248
      } else {                                                                                                         // 1249
        doc[name] = val;                                                                                               // 1250
      }                                                                                                                // 1251
      return;                                                                                                          // 1252
    }                                                                                                                  // 1253
                                                                                                                       // 1254
    // Handle checkbox                                                                                                 // 1255
    if (type === "checkbox") {                                                                                         // 1256
      if (val === "true") { //boolean checkbox                                                                         // 1257
        doc[name] = field.checked;                                                                                     // 1258
      } else { //array checkbox                                                                                        // 1259
        // Add empty array no matter what,                                                                             // 1260
        // to ensure that unchecking all boxes                                                                         // 1261
        // will empty the array.                                                                                       // 1262
        if (!_.isArray(doc[name])) {                                                                                   // 1263
          doc[name] = [];                                                                                              // 1264
        }                                                                                                              // 1265
        // Add the value to the array only                                                                             // 1266
        // if checkbox is selected.                                                                                    // 1267
        field.checked && doc[name].push(val);                                                                          // 1268
      }                                                                                                                // 1269
      return;                                                                                                          // 1270
    }                                                                                                                  // 1271
                                                                                                                       // 1272
    // Handle radio                                                                                                    // 1273
    if (type === "radio") {                                                                                            // 1274
      if (field.checked) {                                                                                             // 1275
        if (val === "true") { //boolean radio                                                                          // 1276
          doc[name] = true;                                                                                            // 1277
        } else if (val === "false") { //boolean radio                                                                  // 1278
          doc[name] = false;                                                                                           // 1279
        } else {                                                                                                       // 1280
          doc[name] = val;                                                                                             // 1281
        }                                                                                                              // 1282
      }                                                                                                                // 1283
      return;                                                                                                          // 1284
    }                                                                                                                  // 1285
                                                                                                                       // 1286
    // Handle number                                                                                                   // 1287
    if (type === "select") {                                                                                           // 1288
      doc[name] = Utility.maybeNum(val);                                                                               // 1289
      return;                                                                                                          // 1290
    }                                                                                                                  // 1291
                                                                                                                       // 1292
    // Handle date inputs                                                                                              // 1293
    if (type === "date") {                                                                                             // 1294
      if (Utility.isValidDateString(val)) {                                                                            // 1295
        //Date constructor will interpret val as UTC and create                                                        // 1296
        //date at mignight in the morning of val date in UTC time zone                                                 // 1297
        doc[name] = new Date(val);                                                                                     // 1298
      } else {                                                                                                         // 1299
        doc[name] = null;                                                                                              // 1300
      }                                                                                                                // 1301
      return;                                                                                                          // 1302
    }                                                                                                                  // 1303
                                                                                                                       // 1304
    // Handle date inputs                                                                                              // 1305
    if (type === "datetime") {                                                                                         // 1306
      val = (typeof val === "string") ? val.replace(/ /g, "T") : val;                                                  // 1307
      if (Utility.isValidNormalizedForcedUtcGlobalDateAndTimeString(val)) {                                            // 1308
        //Date constructor will interpret val as UTC due to ending "Z"                                                 // 1309
        doc[name] = new Date(val);                                                                                     // 1310
      } else {                                                                                                         // 1311
        doc[name] = null;                                                                                              // 1312
      }                                                                                                                // 1313
      return;                                                                                                          // 1314
    }                                                                                                                  // 1315
                                                                                                                       // 1316
    // Handle date inputs                                                                                              // 1317
    if (type === "datetime-local") {                                                                                   // 1318
      val = (typeof val === "string") ? val.replace(/ /g, "T") : val;                                                  // 1319
      var offset = field.getAttribute("data-offset") || "Z";                                                           // 1320
      if (Utility.isValidNormalizedLocalDateAndTimeString(val)) {                                                      // 1321
        doc[name] = new Date(val + offset);                                                                            // 1322
      } else {                                                                                                         // 1323
        doc[name] = null;                                                                                              // 1324
      }                                                                                                                // 1325
      return;                                                                                                          // 1326
    }                                                                                                                  // 1327
                                                                                                                       // 1328
    // Handle all other inputs                                                                                         // 1329
    doc[name] = val;                                                                                                   // 1330
  });                                                                                                                  // 1331
                                                                                                                       // 1332
  return doc;                                                                                                          // 1333
}                                                                                                                      // 1334
                                                                                                                       // 1335
function getFieldValue(template, key) {                                                                                // 1336
  var doc = getFieldsValues(template.$('[data-schema-key="' + key + '"]'));                                            // 1337
  return doc && doc[key];                                                                                              // 1338
}                                                                                                                      // 1339
                                                                                                                       // 1340
function getFormValues(template, formId, ss) {                                                                         // 1341
  var doc = getFieldsValues(template.$("[data-schema-key]").not("[disabled]"));                                        // 1342
                                                                                                                       // 1343
  // Expand the object                                                                                                 // 1344
  doc = Utility.expandObj(doc);                                                                                        // 1345
                                                                                                                       // 1346
  // As array items are removed, gaps can appear in the numbering,                                                     // 1347
  // which results in arrays that have undefined items. Here we                                                        // 1348
  // remove any array items that are undefined.                                                                        // 1349
  Utility.compactArrays(doc);                                                                                          // 1350
                                                                                                                       // 1351
  // Pass expanded doc through formToDoc hooks                                                                         // 1352
  var transforms = Hooks.getHooks(formId, 'formToDoc');                                                                // 1353
  _.each(transforms, function formValuesTransform(transform) {                                                         // 1354
    doc = transform(doc, ss, formId);                                                                                  // 1355
  });                                                                                                                  // 1356
                                                                                                                       // 1357
  // We return doc, insertDoc, and updateDoc.                                                                          // 1358
  // For insertDoc, delete any properties that are null, undefined, or empty strings.                                  // 1359
  // For updateDoc, convert to modifier object with $set and $unset.                                                   // 1360
  // Do not add auto values to either.                                                                                 // 1361
  var result = {                                                                                                       // 1362
    insertDoc: ss.clean(Utility.cleanNulls(doc), {                                                                     // 1363
      isModifier: false,                                                                                               // 1364
      getAutoValues: false                                                                                             // 1365
    }),                                                                                                                // 1366
    updateDoc: ss.clean(Utility.docToModifier(doc), {                                                                  // 1367
      isModifier: true,                                                                                                // 1368
      getAutoValues: false                                                                                             // 1369
    })                                                                                                                 // 1370
  };                                                                                                                   // 1371
  return result;                                                                                                       // 1372
}                                                                                                                      // 1373
                                                                                                                       // 1374
function getInputValue(name, value, mDoc, expectsArray, defaultValue) {                                                // 1375
  if (typeof value === "undefined") {                                                                                  // 1376
    // Get the value for this key in the current document                                                              // 1377
    if (mDoc) {                                                                                                        // 1378
      var valueInfo = mDoc.getInfoForKey(name);                                                                        // 1379
      if (valueInfo) {                                                                                                 // 1380
        value = valueInfo.value;                                                                                       // 1381
      }                                                                                                                // 1382
    }                                                                                                                  // 1383
                                                                                                                       // 1384
    // Only if there is no current document, use the schema defaultValue                                               // 1385
    else if (defaultValue !== null && defaultValue !== undefined) {                                                    // 1386
      value = defaultValue;                                                                                            // 1387
    }                                                                                                                  // 1388
  }                                                                                                                    // 1389
                                                                                                                       // 1390
  // Change null or undefined to an empty string                                                                       // 1391
  value = (value == null) ? '' : value;                                                                                // 1392
                                                                                                                       // 1393
  function stringValue(val, skipDates) {                                                                               // 1394
    if (val instanceof Date) {                                                                                         // 1395
      if (skipDates) {                                                                                                 // 1396
        return val;                                                                                                    // 1397
      } else {                                                                                                         // 1398
        return Utility.dateToDateStringUTC(val);                                                                       // 1399
      }                                                                                                                // 1400
    } else if (val.toString) {                                                                                         // 1401
      return val.toString();                                                                                           // 1402
    } else {                                                                                                           // 1403
      return val;                                                                                                      // 1404
    }                                                                                                                  // 1405
  }                                                                                                                    // 1406
                                                                                                                       // 1407
  // If we're expecting value to be an array, and it's not, make it one                                                // 1408
  if (expectsArray && !_.isArray(value)) {                                                                             // 1409
    if (typeof value === "string") {                                                                                   // 1410
      value = value.split(',');                                                                                        // 1411
    } else {                                                                                                           // 1412
      value = [value];                                                                                                 // 1413
    }                                                                                                                  // 1414
  }                                                                                                                    // 1415
                                                                                                                       // 1416
  // Convert to strings                                                                                                // 1417
  if (_.isArray(value)) {                                                                                              // 1418
    value = _.map(value, function (v) {                                                                                // 1419
      return stringValue(v);                                                                                           // 1420
    });                                                                                                                // 1421
  } else {                                                                                                             // 1422
    // We will convert dates to a string later, after we                                                               // 1423
    // know what the field type will be.                                                                               // 1424
    // Convert everything else to a string now.                                                                        // 1425
    value = stringValue(value, true);                                                                                  // 1426
  }                                                                                                                    // 1427
                                                                                                                       // 1428
  // We return either a string, an array of strings, or an instance of Date                                            // 1429
  return value;                                                                                                        // 1430
}                                                                                                                      // 1431
                                                                                                                       // 1432
function getInputData(defs, hash, value, type, label, expectsArray) {                                                  // 1433
  var schemaType = defs.type;                                                                                          // 1434
                                                                                                                       // 1435
  var min = (typeof defs.min === "function") ? defs.min() : defs.min;                                                  // 1436
  var max = (typeof defs.max === "function") ? defs.max() : defs.max;                                                  // 1437
                                                                                                                       // 1438
  if (type === "datetime-local") {                                                                                     // 1439
    hash["data-offset"] = hash.offset || "Z";                                                                          // 1440
  }                                                                                                                    // 1441
                                                                                                                       // 1442
  //convert Date value to required string value based on field type                                                    // 1443
  if (value instanceof Date) {                                                                                         // 1444
    if (type === "date") {                                                                                             // 1445
      value = Utility.dateToDateStringUTC(value);                                                                      // 1446
    } else if (type === "datetime") {                                                                                  // 1447
      value = Utility.dateToNormalizedForcedUtcGlobalDateAndTimeString(value);                                         // 1448
    } else if (type === "datetime-local") {                                                                            // 1449
      value = Utility.dateToNormalizedLocalDateAndTimeString(value, hash["data-offset"]);                              // 1450
    }                                                                                                                  // 1451
  }                                                                                                                    // 1452
                                                                                                                       // 1453
  // Extract settings from hash                                                                                        // 1454
  var firstOption = hash.firstOption;                                                                                  // 1455
  var radio = hash.radio;                                                                                              // 1456
  var select = hash.select;                                                                                            // 1457
  var noselect = hash.noselect;                                                                                        // 1458
  var trueLabel = hash.trueLabel;                                                                                      // 1459
  var falseLabel = hash.falseLabel;                                                                                    // 1460
  var selectOptions = hash.options;                                                                                    // 1461
                                                                                                                       // 1462
  // Handle options="allowed"                                                                                          // 1463
  if (selectOptions === "allowed") {                                                                                   // 1464
    selectOptions = _.map(defs.allowedValues, function(v) {                                                            // 1465
      var label = v;                                                                                                   // 1466
      if (hash.capitalize && v.length > 0 && schemaType === String) {                                                  // 1467
        label = v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();                                                  // 1468
      }                                                                                                                // 1469
                                                                                                                       // 1470
      return {label: label, value: v};                                                                                 // 1471
    });                                                                                                                // 1472
  }                                                                                                                    // 1473
                                                                                                                       // 1474
  // Set placeholder to label from schema if requested                                                                 // 1475
  if (hash.placeholder === "schemaLabel") {                                                                            // 1476
    hash.placeholder = label;                                                                                          // 1477
  }                                                                                                                    // 1478
                                                                                                                       // 1479
  // Determine what options to use                                                                                     // 1480
  var data = {};                                                                                                       // 1481
                                                                                                                       // 1482
  // Add name to every type of element                                                                                 // 1483
  data.name = hash.name;                                                                                               // 1484
                                                                                                                       // 1485
  data.expectsArray = expectsArray;                                                                                    // 1486
                                                                                                                       // 1487
  // Clean hash so that we can add anything remaining as attributes                                                    // 1488
  hash = _.omit(hash,                                                                                                  // 1489
          "name",                                                                                                      // 1490
          "autoform",                                                                                                  // 1491
          "value",                                                                                                     // 1492
          "data-schema-key",                                                                                           // 1493
          "firstOption",                                                                                               // 1494
          "radio",                                                                                                     // 1495
          "select",                                                                                                    // 1496
          "noselect",                                                                                                  // 1497
          "trueLabel",                                                                                                 // 1498
          "falseLabel",                                                                                                // 1499
          "options",                                                                                                   // 1500
          "offset",                                                                                                    // 1501
          "template");                                                                                                 // 1502
                                                                                                                       // 1503
  // Add required to every type of element, if required                                                                // 1504
  if (typeof hash.required === "undefined" && !defs.optional) {                                                        // 1505
    hash.required = "";                                                                                                // 1506
  }                                                                                                                    // 1507
                                                                                                                       // 1508
  if (selectOptions) {                                                                                                 // 1509
    // Build anything that should be a select, which is anything with options                                          // 1510
    data.items = [];                                                                                                   // 1511
    _.each(selectOptions, function(opt) {                                                                              // 1512
      var selected = expectsArray ? _.contains(value, opt.value.toString()) : (opt.value.toString() === value.toString());
      data.items.push({                                                                                                // 1514
        name: data.name,                                                                                               // 1515
        label: opt.label,                                                                                              // 1516
        value: opt.value,                                                                                              // 1517
        checked: selected ? "checked" : "",                                                                            // 1518
        selected: selected ? "selected" : "",                                                                          // 1519
        atts: hash                                                                                                     // 1520
      });                                                                                                              // 1521
    });                                                                                                                // 1522
    if (!noselect) {                                                                                                   // 1523
      hash.autocomplete = "off"; //can fix issues with some browsers selecting the firstOption instead of the selected option
      if (expectsArray) {                                                                                              // 1525
        hash.multiple = "";                                                                                            // 1526
      }                                                                                                                // 1527
      data.firstOption = (firstOption && !expectsArray) ? firstOption : "";                                            // 1528
      data.cls = hash["class"] || "";                                                                                  // 1529
      hash = _.omit(hash, "class");                                                                                    // 1530
      data.atts = hash;                                                                                                // 1531
    }                                                                                                                  // 1532
  } else if (type === "textarea") {                                                                                    // 1533
    if (typeof hash.maxlength === "undefined" && typeof max === "number") {                                            // 1534
      hash.maxlength = max;                                                                                            // 1535
    }                                                                                                                  // 1536
    data.cls = hash["class"] || "";                                                                                    // 1537
    hash = _.omit(hash, "class");                                                                                      // 1538
    data.atts = hash;                                                                                                  // 1539
    data.value = value;                                                                                                // 1540
  } else if (type === "contenteditable") {                                                                             // 1541
    if (typeof hash['data-maxlength'] === "undefined" && typeof max === "number") {                                    // 1542
      hash['data-maxlength'] = max;                                                                                    // 1543
    }                                                                                                                  // 1544
    data.atts = hash;                                                                                                  // 1545
    data.value = value;                                                                                                // 1546
  } else if (type === "boolean") {                                                                                     // 1547
    value = (value === "true") ? true : false;                                                                         // 1548
    var items = [                                                                                                      // 1549
      {                                                                                                                // 1550
        name: data.name,                                                                                               // 1551
        value: "false",                                                                                                // 1552
        checked: !value ? "checked" : "",                                                                              // 1553
        selected: !value ? "selected" : "",                                                                            // 1554
        label: falseLabel                                                                                              // 1555
      },                                                                                                               // 1556
      {                                                                                                                // 1557
        name: data.name,                                                                                               // 1558
        value: "true",                                                                                                 // 1559
        checked: value ? "checked" : "",                                                                               // 1560
        selected: value ? "selected" : "",                                                                             // 1561
        label: trueLabel                                                                                               // 1562
      }                                                                                                                // 1563
    ];                                                                                                                 // 1564
    if (radio) {                                                                                                       // 1565
      data.items = items;                                                                                              // 1566
      data.items[0].atts = hash;                                                                                       // 1567
      data.items[1].atts = hash;                                                                                       // 1568
    } else if (select) {                                                                                               // 1569
      data.items = items;                                                                                              // 1570
      data.cls = hash["class"] || "";                                                                                  // 1571
      hash = _.omit(hash, "class");                                                                                    // 1572
      data.atts = hash;                                                                                                // 1573
    } else {                                                                                                           // 1574
      //don't add required attribute to this one because some browsers assume that to mean that it must be checked, which is not what we mean by "required"
      delete hash.required;                                                                                            // 1576
      data.label = label;                                                                                              // 1577
      data.value = "true";                                                                                             // 1578
      data.checked = value ? "checked" : "";                                                                           // 1579
      data.atts = hash;                                                                                                // 1580
    }                                                                                                                  // 1581
  } else {                                                                                                             // 1582
    // All other input types                                                                                           // 1583
    switch (type) {                                                                                                    // 1584
      case "number":                                                                                                   // 1585
        if (typeof hash.max === "undefined" && typeof max === "number") {                                              // 1586
          hash.max = max;                                                                                              // 1587
        }                                                                                                              // 1588
        if (typeof hash.min === "undefined" && typeof min === "number") {                                              // 1589
          hash.min = min;                                                                                              // 1590
        }                                                                                                              // 1591
        if (typeof hash.step === "undefined" && defs.decimal) {                                                        // 1592
          hash.step = '0.01';                                                                                          // 1593
        }                                                                                                              // 1594
        break;                                                                                                         // 1595
      case "date":                                                                                                     // 1596
        if (typeof hash.max === "undefined" && max instanceof Date) {                                                  // 1597
          hash.max = Utility.dateToDateStringUTC(max);                                                                 // 1598
        }                                                                                                              // 1599
        if (typeof hash.min === "undefined" && min instanceof Date) {                                                  // 1600
          hash.min = Utility.dateToDateStringUTC(min);                                                                 // 1601
        }                                                                                                              // 1602
        break;                                                                                                         // 1603
      case "datetime":                                                                                                 // 1604
        if (typeof hash.max === "undefined" && max instanceof Date) {                                                  // 1605
          hash.max = Utility.dateToNormalizedForcedUtcGlobalDateAndTimeString(max);                                    // 1606
        }                                                                                                              // 1607
        if (typeof hash.min === "undefined" && min instanceof Date) {                                                  // 1608
          hash.min = Utility.dateToNormalizedForcedUtcGlobalDateAndTimeString(min);                                    // 1609
        }                                                                                                              // 1610
        break;                                                                                                         // 1611
      case "datetime-local":                                                                                           // 1612
        if (typeof hash.max === "undefined" && max instanceof Date) {                                                  // 1613
          hash.max = Utility.dateToNormalizedLocalDateAndTimeString(max, hash["data-offset"]);                         // 1614
        }                                                                                                              // 1615
        if (typeof hash.min === "undefined" && min instanceof Date) {                                                  // 1616
          hash.min = Utility.dateToNormalizedLocalDateAndTimeString(min, hash["data-offset"]);                         // 1617
        }                                                                                                              // 1618
        break;                                                                                                         // 1619
    }                                                                                                                  // 1620
                                                                                                                       // 1621
    if (typeof hash.maxlength === "undefined"                                                                          // 1622
            && typeof max === "number"                                                                                 // 1623
            && _.contains(["text", "email", "search", "password", "tel", "url"], type)                                 // 1624
            ) {                                                                                                        // 1625
      hash.maxlength = max;                                                                                            // 1626
    }                                                                                                                  // 1627
                                                                                                                       // 1628
    data.type = type;                                                                                                  // 1629
    data.value = value;                                                                                                // 1630
    data.cls = hash["class"] || "";                                                                                    // 1631
    hash = _.omit(hash, "class");                                                                                      // 1632
    data.atts = hash;                                                                                                  // 1633
  }                                                                                                                    // 1634
                                                                                                                       // 1635
  return data;                                                                                                         // 1636
}                                                                                                                      // 1637
                                                                                                                       // 1638
function getInputType(hash, defs, value) {                                                                             // 1639
  var schemaType = defs.type;                                                                                          // 1640
  var valHasLineBreaks = typeof value === "string" ? (value.indexOf("\n") !== -1) : false;                             // 1641
  var max = (typeof defs.max === "function") ? defs.max() : defs.max;                                                  // 1642
                                                                                                                       // 1643
  var type = "text";                                                                                                   // 1644
  if (hash.type) {                                                                                                     // 1645
    type = hash.type;                                                                                                  // 1646
  } else if (schemaType === String && defs.regEx === SimpleSchema.RegEx.Email) {                                       // 1647
    type = "email";                                                                                                    // 1648
  } else if (schemaType === String && defs.regEx === SimpleSchema.RegEx.Url) {                                         // 1649
    type = "url";                                                                                                      // 1650
  } else if (schemaType === String && (hash.rows || valHasLineBreaks || max >= 150)) {                                 // 1651
    type = "textarea";                                                                                                 // 1652
  } else if (schemaType === Number) {                                                                                  // 1653
    type = "number";                                                                                                   // 1654
  } else if (schemaType === Date) {                                                                                    // 1655
    type = "date";                                                                                                     // 1656
  } else if (schemaType === Boolean) {                                                                                 // 1657
    type = "boolean";                                                                                                  // 1658
  }                                                                                                                    // 1659
  return type;                                                                                                         // 1660
}                                                                                                                      // 1661
                                                                                                                       // 1662
function getInputTemplateType(atts, type, schemaType, expectsArray) {                                                  // 1663
  // Extract settings from attributes                                                                                  // 1664
  var radio = atts.radio;                                                                                              // 1665
  var select = atts.select;                                                                                            // 1666
  var noselect = atts.noselect;                                                                                        // 1667
  var selectOptions = atts.options;                                                                                    // 1668
                                                                                                                       // 1669
  // Determine which template to render                                                                                // 1670
  var templateType;                                                                                                    // 1671
  if (selectOptions) {                                                                                                 // 1672
    if (noselect) {                                                                                                    // 1673
      if (expectsArray) {                                                                                              // 1674
        templateType = "afCheckboxGroup";                                                                              // 1675
      } else {                                                                                                         // 1676
        templateType = "afRadioGroup";                                                                                 // 1677
      }                                                                                                                // 1678
    } else {                                                                                                           // 1679
      templateType = "afSelect";                                                                                       // 1680
    }                                                                                                                  // 1681
  } else if (type === "textarea") {                                                                                    // 1682
    templateType = "afTextarea";                                                                                       // 1683
  } else if (type === "contenteditable") {                                                                             // 1684
    templateType = "afContenteditable";                                                                                // 1685
  } else if (type === "boolean") {                                                                                     // 1686
    if (radio) {                                                                                                       // 1687
      templateType = "afRadioGroup";                                                                                   // 1688
    } else if (select) {                                                                                               // 1689
      templateType = "afSelect";                                                                                       // 1690
    } else {                                                                                                           // 1691
      templateType = "afCheckbox";                                                                                     // 1692
    }                                                                                                                  // 1693
  } else {                                                                                                             // 1694
    // All other input types                                                                                           // 1695
    templateType = "afInput";                                                                                          // 1696
  }                                                                                                                    // 1697
                                                                                                                       // 1698
  return templateType;                                                                                                 // 1699
}                                                                                                                      // 1700
                                                                                                                       // 1701
function _validateField(key, template, skipEmpty, onlyIfAlreadyInvalid) {                                              // 1702
  if (!template || template._notInDOM) {                                                                               // 1703
    return; //skip validation                                                                                          // 1704
  }                                                                                                                    // 1705
                                                                                                                       // 1706
  var context = template.data;                                                                                         // 1707
  var formId = context.id || defaultFormId;                                                                            // 1708
  var ss = Utility.getSimpleSchemaFromContext(context, formId);                                                        // 1709
                                                                                                                       // 1710
  if (onlyIfAlreadyInvalid && ss.namedContext(formId).isValid()) {                                                     // 1711
    return; //skip validation                                                                                          // 1712
  }                                                                                                                    // 1713
                                                                                                                       // 1714
  // Create a document based on all the values of all the inputs on the form                                           // 1715
  var form = getFormValues(template, formId, ss);                                                                      // 1716
                                                                                                                       // 1717
  // Clean and validate doc                                                                                            // 1718
  if (context.type === "update") {                                                                                     // 1719
                                                                                                                       // 1720
    // Skip validation if skipEmpty is true and the field we're validating                                             // 1721
    // has no value.                                                                                                   // 1722
    if (skipEmpty && !Utility.objAffectsKey(form.updateDoc, key))                                                      // 1723
      return; //skip validation                                                                                        // 1724
                                                                                                                       // 1725
    // getFormValues did some cleaning but didn't add auto values; add them now                                        // 1726
    ss.clean(form.updateDoc, {                                                                                         // 1727
      isModifier: true,                                                                                                // 1728
      filter: false,                                                                                                   // 1729
      autoConvert: false,                                                                                              // 1730
      extendAutoValueContext: {                                                                                        // 1731
        userId: (Meteor.userId && Meteor.userId()) || null,                                                            // 1732
        isInsert: false,                                                                                               // 1733
        isUpdate: true,                                                                                                // 1734
        isUpsert: false,                                                                                               // 1735
        isFromTrustedCode: false                                                                                       // 1736
      }                                                                                                                // 1737
    });                                                                                                                // 1738
    ss.namedContext(formId).validateOne(form.updateDoc, key, {                                                         // 1739
      modifier: true,                                                                                                  // 1740
      extendedCustomContext: {                                                                                         // 1741
        userId: (Meteor.userId && Meteor.userId()) || null,                                                            // 1742
        isInsert: false,                                                                                               // 1743
        isUpdate: true,                                                                                                // 1744
        isUpsert: false,                                                                                               // 1745
        isFromTrustedCode: false                                                                                       // 1746
      }                                                                                                                // 1747
    });                                                                                                                // 1748
  } else {                                                                                                             // 1749
                                                                                                                       // 1750
    // Skip validation if skipEmpty is true and the field we're validating                                             // 1751
    // has no value.                                                                                                   // 1752
    if (skipEmpty && !Utility.objAffectsKey(form.insertDoc, key))                                                      // 1753
      return; //skip validation                                                                                        // 1754
                                                                                                                       // 1755
    // getFormValues did some cleaning but didn't add auto values; add them now                                        // 1756
    ss.clean(form.insertDoc, {                                                                                         // 1757
      filter: false,                                                                                                   // 1758
      autoConvert: false,                                                                                              // 1759
      extendAutoValueContext: {                                                                                        // 1760
        userId: (Meteor.userId && Meteor.userId()) || null,                                                            // 1761
        isInsert: true,                                                                                                // 1762
        isUpdate: false,                                                                                               // 1763
        isUpsert: false,                                                                                               // 1764
        isFromTrustedCode: false                                                                                       // 1765
      }                                                                                                                // 1766
    });                                                                                                                // 1767
    ss.namedContext(formId).validateOne(form.insertDoc, key, {                                                         // 1768
      modifier: false,                                                                                                 // 1769
      extendedCustomContext: {                                                                                         // 1770
        userId: (Meteor.userId && Meteor.userId()) || null,                                                            // 1771
        isInsert: true,                                                                                                // 1772
        isUpdate: false,                                                                                               // 1773
        isUpsert: false,                                                                                               // 1774
        isFromTrustedCode: false                                                                                       // 1775
      }                                                                                                                // 1776
    });                                                                                                                // 1777
  }                                                                                                                    // 1778
}                                                                                                                      // 1779
                                                                                                                       // 1780
//throttling function that calls out to _validateField                                                                 // 1781
var vok = {}, tm = {};                                                                                                 // 1782
function validateField(key, template, skipEmpty, onlyIfAlreadyInvalid) {                                               // 1783
  if (vok[key] === false) {                                                                                            // 1784
    Meteor.clearTimeout(tm[key]);                                                                                      // 1785
    tm[key] = Meteor.setTimeout(function() {                                                                           // 1786
      vok[key] = true;                                                                                                 // 1787
      _validateField(key, template, skipEmpty, onlyIfAlreadyInvalid);                                                  // 1788
    }, 300);                                                                                                           // 1789
    return;                                                                                                            // 1790
  }                                                                                                                    // 1791
  vok[key] = false;                                                                                                    // 1792
  _validateField(key, template, skipEmpty, onlyIfAlreadyInvalid);                                                      // 1793
}                                                                                                                      // 1794
                                                                                                                       // 1795
// Returns schema keys that are direct children of the given schema key                                                // 1796
// XXX this could be a method on ss                                                                                    // 1797
function autoFormChildKeys(ss, name) {                                                                                 // 1798
  name = SimpleSchema._makeGeneric(name);                                                                              // 1799
  var prefix = name + ".";                                                                                             // 1800
                                                                                                                       // 1801
  var childKeys = [];                                                                                                  // 1802
  _.each(ss._schemaKeys, function (key) {                                                                              // 1803
    // If it's a direct child, add it to the list                                                                      // 1804
    if (key.indexOf(prefix) === 0) {                                                                                   // 1805
      var ending = key.slice(prefix.length);                                                                           // 1806
      if (ending.indexOf('.') === -1) {                                                                                // 1807
        childKeys.push(ending);                                                                                        // 1808
      }                                                                                                                // 1809
    }                                                                                                                  // 1810
  });                                                                                                                  // 1811
  return childKeys;                                                                                                    // 1812
}                                                                                                                      // 1813
                                                                                                                       // 1814
function updateTrackedFieldValue(formId, key, val) {                                                                   // 1815
  formValues[formId] = formValues[formId] || {};                                                                       // 1816
  formValues[formId][key] = formValues[formId][key] || {_deps: new Deps.Dependency};                                   // 1817
  formValues[formId][key]._val = val;                                                                                  // 1818
  formValues[formId][key]._deps.changed();                                                                             // 1819
}                                                                                                                      // 1820
                                                                                                                       // 1821
function getTrackedFieldValue(formId, key) {                                                                           // 1822
  formValues[formId] = formValues[formId] || {};                                                                       // 1823
  formValues[formId][key] = formValues[formId][key] || {_deps: new Deps.Dependency};                                   // 1824
  formValues[formId][key]._deps.depend();                                                                              // 1825
  return formValues[formId][key]._val;                                                                                 // 1826
}                                                                                                                      // 1827
                                                                                                                       // 1828
/*                                                                                                                     // 1829
 * Array Fields Helper Functions                                                                                       // 1830
 */                                                                                                                    // 1831
                                                                                                                       // 1832
function getMinMax(formId, name, overrideMinCount, overrideMaxCount) {                                                 // 1833
  var ss = formData[formId] && formData[formId].ss;                                                                    // 1834
  if (!ss) {                                                                                                           // 1835
    return {minCount: 0};                                                                                              // 1836
  }                                                                                                                    // 1837
  var defs = Utility.getDefs(ss, name);                                                                                // 1838
                                                                                                                       // 1839
  // minCount is set by the schema, but can be set higher on the field attribute                                       // 1840
  overrideMinCount = overrideMinCount || 0;                                                                            // 1841
  var minCount = defs.minCount || 0;                                                                                   // 1842
  minCount = (overrideMinCount > minCount) ? overrideMinCount : minCount;                                              // 1843
                                                                                                                       // 1844
  // maxCount is set by the schema, but can be set lower on the field attribute                                        // 1845
  overrideMaxCount = overrideMaxCount || Infinity;                                                                     // 1846
  var maxCount = defs.maxCount || Infinity;                                                                            // 1847
  maxCount = (overrideMaxCount < maxCount) ? overrideMaxCount : maxCount;                                              // 1848
                                                                                                                       // 1849
  return {minCount: minCount, maxCount: maxCount};                                                                     // 1850
}                                                                                                                      // 1851
                                                                                                                       // 1852
function arrayFieldCount(formId, name, overrideMinCount, overrideMaxCount) {                                           // 1853
  initArrayFieldCount(formId, name, overrideMinCount, overrideMaxCount);                                               // 1854
  arrayFields[formId][name].deps.depend();                                                                             // 1855
  return arrayFields[formId][name].count;                                                                              // 1856
}                                                                                                                      // 1857
                                                                                                                       // 1858
function initArrayFieldCount(formId, name, overrideMinCount, overrideMaxCount) {                                       // 1859
  var range = getMinMax(formId, name, overrideMinCount, overrideMaxCount);                                             // 1860
                                                                                                                       // 1861
  arrayFields[formId] = arrayFields[formId] || {};                                                                     // 1862
  arrayFields[formId][name] = arrayFields[formId][name] || {};                                                         // 1863
  arrayFields[formId][name].deps = arrayFields[formId][name].deps || new Deps.Dependency;                              // 1864
  arrayFields[formId][name].removedCount = arrayFields[formId][name].removedCount || 0;                                // 1865
  if (typeof arrayFields[formId][name].count !== "number") {                                                           // 1866
    arrayFields[formId][name].count = Math.max(1, range.minCount); //respect minCount from schema                      // 1867
    arrayFields[formId][name].deps.changed();                                                                          // 1868
  }                                                                                                                    // 1869
}                                                                                                                      // 1870
                                                                                                                       // 1871
function setArrayFieldCount(formId, name, count, overrideMinCount, overrideMaxCount) {                                 // 1872
  initArrayFieldCount(formId, name, overrideMinCount, overrideMaxCount);                                               // 1873
                                                                                                                       // 1874
  //respect minCount and maxCount from schema                                                                          // 1875
  var range = getMinMax(formId, name, overrideMinCount, overrideMaxCount);                                             // 1876
  if (range.maxCount) {                                                                                                // 1877
    count = Math.min(count, range.maxCount + arrayFields[formId][name].removedCount);                                  // 1878
  }                                                                                                                    // 1879
  count = Math.max(count, range.minCount + arrayFields[formId][name].removedCount);                                    // 1880
                                                                                                                       // 1881
  arrayFields[formId][name].count = count;                                                                             // 1882
  arrayFields[formId][name].deps.changed();                                                                            // 1883
}                                                                                                                      // 1884
                                                                                                                       // 1885
function addArrayField(formId, name, overrideMinCount, overrideMaxCount) {                                             // 1886
  initArrayFieldCount(formId, name, overrideMinCount, overrideMaxCount);                                               // 1887
  setArrayFieldCount(formId, name, arrayFields[formId][name].count + 1, overrideMinCount, overrideMaxCount);           // 1888
}                                                                                                                      // 1889
                                                                                                                       // 1890
function removeArrayField(formId, name, overrideMinCount, overrideMaxCount) {                                          // 1891
  initArrayFieldCount(formId, name, overrideMinCount, overrideMaxCount);                                               // 1892
  arrayFields[formId][name].removedCount++;                                                                            // 1893
  arrayFields[formId][name].deps.changed();                                                                            // 1894
}                                                                                                                      // 1895
                                                                                                                       // 1896
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.autoform = {
  AutoForm: AutoForm,
  Utility: Utility
};

})();

//# sourceMappingURL=798814cbe47112c9177046cfc09a3bcd2d5f56dc.map
