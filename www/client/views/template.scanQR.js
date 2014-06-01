(function(){
Template.__define__("scanQR", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "text-center"
  }, HTML.Raw("\n    <h1>Scan a QR Code</h1>\n    <hr>\n    <p>Currently the user will manually enter location and points for Demo purposes</p>\n    "), HTML.DIV({
    "class": "col-md-4 col-md-offset-4"
  }, HTML.Raw("\n      <!-- add more complex field, use options and UI helper to have select box -->\n      "), Spacebars.TemplateWith(function() {
    return {
      collection: Spacebars.call("Transactions"),
      id: Spacebars.call("insertTransactionForm"),
      type: Spacebars.call("insert")
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("autoForm"), UI.block(function() {
      var self = this;
      return [ "\n        ", HTML.FIELDSET("\n          ", HTML.LEGEND("Add points from Event"), "\n          ", Spacebars.TemplateWith(function() {
        return {
          name: Spacebars.call("eventID"),
          options: Spacebars.call(self.lookup("eventOptions"))
        };
      }, UI.block(function() {
        var self = this;
        return Spacebars.include(self.lookupTemplate("afFieldInput"));
      })), "\n        "), "\n        ", HTML.BUTTON({
        type: "submit",
        "class": "btn btn-default",
        id: "submit"
      }, "Submit"), "\n      " ];
    }));
  })), "\n    "), "\n  ");
}));

})();
