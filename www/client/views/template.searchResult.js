(function(){
Template.__define__("searchResult", (function() {
  var self = this;
  var template = this;
  return HTML.A({
    "class": "list-group-item list-group-item-default memberNames"
  }, "\n  ", function() {
    return Spacebars.mustache(Spacebars.dot(self.lookup("profile"), "firstName"));
  }, " ", function() {
    return Spacebars.mustache(Spacebars.dot(self.lookup("profile"), "lastName"));
  });
}));

})();
