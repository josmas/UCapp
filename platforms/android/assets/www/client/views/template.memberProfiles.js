(function(){
Template.__define__("memberProfiles", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<h1 class="text-center">Search for Existing Members</h1>\n    <hr>\n    <div class="vcenter">\n    <div class="col-md-6 col-md-offset-3">\n      <div class="input-group ">\n        <span class="input-group-btn">\n          <button class="btn btn-default btn-large" id="addMember">\n            Actions</button>\n        </span>\n        <input type="text" class="form-control" placeholder="Member Name" id="memberSearch"><br>\n      </div>\n    </div>\n  </div>\n  '), HTML.DIV({
    "class": "text-center row"
  }, "\n    ", Spacebars.include(self.lookupTemplate("results")), "\n  "), "\n  ", HTML.DIV({
    "class": "text-center row"
  }, "\n    ", Spacebars.With(function() {
    return Spacebars.call(self.lookup("member"));
  }, UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.DIV("Name: ", function() {
      return Spacebars.mustache(Spacebars.dot(self.lookup("profile"), "name"));
    }), "\n      ", HTML.DIV("Address: ", function() {
      return Spacebars.mustache(Spacebars.dot(self.lookup("profile"), "address"));
    }), "\n    " ];
  })), "\n  ") ];
}));

})();
