(function(){
Template.__define__("showMemberRewards", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<h1 class="text-center">Rewards</h1>\n  <hr>\n  '), UI.Each(function() {
    return Spacebars.call(self.lookup("rewards"));
  }, UI.block(function() {
    var self = this;
    return [ "\n  ", HTML.DIV({
      "class": "col-sm-4"
    }, "\n    ", HTML.DIV({
      "class": "panel panel-default"
    }, "\n      ", HTML.DIV({
      "class": "panel-body"
    }, "\n        ", HTML.P("\n          ", HTML.STRONG("Price:"), "  ", function() {
      return Spacebars.mustache(self.lookup("price"));
    }, "\n        "), "\n        ", HTML.P(function() {
      return Spacebars.mustache(self.lookup("description"));
    }), "\n      "), "\n      ", HTML.DIV({
      "class": "panel-footer text-center"
    }, HTML.H3(function() {
      return Spacebars.mustache(self.lookup("name"));
    })), "\n    "), "\n  "), "\n  " ];
  })) ];
}));

})();
