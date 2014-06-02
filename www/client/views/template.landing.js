(function(){
Template.__define__("landing", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<div class="row">\n  <div class="col-md-4 col-md-offset-4">\n    <img class="img-responsive" src="images/ucb-logo-lg.jpg" alt="Union Capital Logo">\n    <br>\n    <p><small>\n      Giving back to people who have given back to their communities\n    </small></p>\n  </div>\n</div>\n<hr>\n<br>\n'), HTML.DIV({
    "class": "row text-center"
  }, "\n  ", UI.If(function() {
    return Spacebars.dataMustache(self.lookup("loginState"), "landingPage");
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-lg btn-default",
      id: "login"
    }, "Login"), "\n    ", HTML.BR(), "\n    ", HTML.BR(), "\n    ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-lg btn-default",
      id: "signUp"
    }, "Sign Up"), "\n  " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n    ", UI.If(function() {
      return Spacebars.dataMustache(self.lookup("loginState"), "loginPage");
    }, UI.block(function() {
      var self = this;
      return [ "\n      ", Spacebars.include(self.lookupTemplate("loginPage")), "\n    " ];
    }), UI.block(function() {
      var self = this;
      return [ "\n      ", Spacebars.include(self.lookupTemplate("createUser")), "\n    " ];
    })), "\n  " ];
  })), "\n") ];
}));

})();
