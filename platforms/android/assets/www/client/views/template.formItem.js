(function(){
Template.__define__("formItem", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "row"
  }, "\n    ", HTML.DIV({
    "class": "text-center col-xs-6 col-xs-offset-3 input-group"
  }, "\n      ", HTML.SPAN({
    "class": "input-group-addon"
  }, function() {
    return Spacebars.mustache(self.lookup("item"));
  }), "\n      ", HTML.INPUT({
    type: function() {
      return Spacebars.mustache(self.lookup("type"));
    },
    "class": "form-control measurements",
    placeholder: function() {
      return Spacebars.mustache(self.lookup("item"));
    },
    id: function() {
      return Spacebars.mustache(self.lookup("_id"));
    }
  }), "\n      ", HTML.SPAN({
    "class": "input-group-addon"
  }, function() {
    return Spacebars.mustache(self.lookup("customerMeasurement"), self.lookup("item"));
  }), "\n    "), "\n  ");
}));

})();
