(function(){
Template.__define__("layout", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "container"
  }, "\n    ", Spacebars.include(self.lookupTemplate("errors")), "\n    ", HTML.DIV({
    id: "main",
    "class": "row"
  }, "\n      ", HTML.NAV({
    "class": "navbar navbar-default",
    role: "navigation"
  }, "\n        ", HTML.DIV({
    "class": "container-fluid"
  }, HTML.Raw('\n          <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n              <span class="sr-only">Toggle navigation</span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="/">Home</a>\n          </div>\n          '), HTML.DIV({
    "class": "collapse navbar-collapse",
    id: "bs-example-vabar-collapse-1"
  }, "\n            ", HTML.UL({
    "class": "nav navbar-nav"
  }, HTML.Raw('\n              <!-- <li><a href="/orders">Orders</a></li> -->\n              '), HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(self.lookup("pathFor"), "scanQR");
    }
  }, "Enter Event Code")), "\n              ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(self.lookup("pathFor"), "checkPoints");
    }
  }, "View Your Points")), "\n              ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(self.lookup("pathFor"), "listEvents");
    }
  }, "View Upcoming Events")), "\n            "), HTML.Raw('\n            <ul class="nav navbar-nav navbar-left">\n            </ul>\n            '), HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n              ", Spacebars.include(self.lookupTemplate("loginButtons")), "\n            "), "\n          "), "\n        "), "\n      "), "\n      \n      ", Spacebars.include(self.lookupTemplate("yield")), "\n    "), "\n  ");
}));

})();
