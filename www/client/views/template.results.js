(function(){
Template.__define__("results", (function() {
  var self = this;
  var template = this;
  return [ UI.If(function() {
    return Spacebars.call(self.lookup("searchResults"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.DIV({
      "class": "row list-group col-xs-4 col-xs-offset-4"
    }, "\n      ", HTML.UL("\n      ", UI.Each(function() {
      return Spacebars.call(self.lookup("searchResults"));
    }, UI.block(function() {
      var self = this;
      return [ "\n        ", Spacebars.include(self.lookupTemplate("searchResult")), "\n      " ];
    })), "\n      "), "\n    "), "\n  " ];
  })), "\n  ", UI.If(function() {
    return Spacebars.call(self.lookup("addCustomerClicked"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", UI.Unless(function() {
      return Spacebars.call(self.lookup("searchResults"));
    }, UI.block(function() {
      var self = this;
      return [ "\n      ", HTML.DIV({
        "class": "row"
      }, "\n        ", Spacebars.include(self.lookupTemplate("addCustomerForm")), "\n      "), "\n    " ];
    })), "\n  " ];
  })) ];
}));

})();
