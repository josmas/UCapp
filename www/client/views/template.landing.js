(function(){
Template.__define__("landing", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<div class="row">\n  <div class="col-md-4 col-md-offset-4">\n    <img class="img-responsive" src="images/ucb-logo-lg.jpg" alt="Union Capital Logo">\n    <br>\n    <p><small>\n      Giving back to people who have given back to their communities\n    </small></p>\n  </div>\n</div>\n'), HTML.DIV({
    "class": "row text-center"
  }, HTML.Raw("\n  <hr>\n  <br>\n  "), UI.If(function() {
    return Spacebars.call(self.lookup("isMember"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", UI.If(function() {
      return Spacebars.dataMustache(self.lookup("isInRole"), "admin");
    }, UI.block(function() {
      var self = this;
      return [ "\n      ", HTML.A({
        href: function() {
          return Spacebars.mustache(self.lookup("pathFor"), "adminHomePage");
        }
      }, "Admin Home Page"), "\n    " ];
    }), UI.block(function() {
      var self = this;
      return [ "\n      ", HTML.A({
        href: function() {
          return Spacebars.mustache(self.lookup("pathFor"), "memberHomePage");
        }
      }, "Member Home Page"), "\n    " ];
    })), "\n  " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.H3("Create User"), "\n    ", HTML.FORM({
      role: "form"
    }, "\n      ", HTML.DIV({
      "class": "form-group>"
    }, "\n        ", HTML.LABEL({
      "for": "userName"
    }, "User Name"), "\n        ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      id: "userName",
      placeholder: "Enter User"
    }), "\n      "), "\n      ", HTML.DIV({
      "class": "form-group>"
    }, "\n        ", HTML.LABEL({
      "for": "userAddress"
    }, "Address"), "\n        ", HTML.INPUT({
      type: "text",
      "class": "form-control",
      id: "userAddress",
      placeholder: "Enter Address"
    }), "\n      "), "\n      ", HTML.DIV({
      "class": "form-group>"
    }, "\n        ", HTML.LABEL({
      "for": "userEmail"
    }, "Email Address"), "\n        ", HTML.INPUT({
      type: "email",
      "class": "form-control",
      id: "userEmail",
      placeholder: "Enter Email"
    }), "\n      "), "\n      ", HTML.DIV({
      "class": "form-group>"
    }, "\n        ", HTML.LABEL({
      "for": "userPassword"
    }, "Password"), "\n        ", HTML.INPUT({
      type: "password",
      "class": "form-control",
      id: "userPassword",
      placeholder: "Enter Password"
    }), "\n      "), "\n      ", HTML.DIV({
      "class": "form-group>"
    }, "\n        ", HTML.LABEL({
      "for": "userPasswordConfirm"
    }, "Confirm Password"), "\n        ", HTML.INPUT({
      type: "password",
      "class": "form-control",
      id: "userPasswordConfirm",
      placeholder: "Enter Password Again"
    }), "\n      "), "\n      ", HTML.BUTTON({
      type: "submit",
      "class": "btn btn-default"
    }, "Submit"), "\n    "), "\n  " ];
  })), "\n") ];
}));

})();
