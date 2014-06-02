(function(){
Template.__define__("alerts", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "alerts row"
  }, "\n    ", UI.Each(function() {
    return Spacebars.call(self.lookup("alerts"));
  }, UI.block(function() {
    var self = this;
    return [ "\n      ", Spacebars.include(self.lookupTemplate("alert")), "\n    " ];
  })), "\n  ");
}));

Template.__define__("alert", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": [ "alert ", function() {
      return Spacebars.mustache(self.lookup("type"));
    } ]
  }, HTML.Raw('\n    <button type="button" class="close" data-dismiss="alert">&times;</button>\n    '), function() {
    return Spacebars.mustache(self.lookup("message"));
  }, "\n  ");
}));

})();
