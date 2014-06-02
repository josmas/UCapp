(function(){
Template.__define__("listRewards", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<h1 class="text-center">Rewards</h1>\n  <hr>\n  <br>\n  <!--Modal launched when Edit button below clicked -->\n  '), Spacebars.With(function() {
    return Spacebars.call(self.lookup("modalContext"));
  }, UI.block(function() {
    var self = this;
    return [ "\n  ", HTML.DIV({
      "class": "modal fade",
      id: "editModal"
    }, "\n    ", HTML.DIV({
      "class": "modal-dialog"
    }, "\n      ", HTML.DIV({
      "class": "modal-content"
    }, "\n        ", HTML.DIV({
      "class": "modal-header"
    }, "\n          ", HTML.BUTTON({
      type: "button",
      "class": "close",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }, "\n            ", HTML.CharRef({
      html: "&times;",
      str: "×"
    })), "\n          ", HTML.H4({
      "class": "modal-title text-center"
    }, "Edit Rewards"), "\n        "), "\n        ", HTML.DIV({
      "class": "modal-body"
    }, "\n        ", Spacebars.TemplateWith(function() {
      return {
        collection: Spacebars.call("Rewards"),
        doc: Spacebars.call(self.lookup("editingDoc")),
        id: Spacebars.call("updateRewardsForm"),
        type: Spacebars.call("update")
      };
    }, UI.block(function() {
      var self = this;
      return Spacebars.include(self.lookupTemplate("autoForm"), UI.block(function() {
        var self = this;
        return [ "\n          ", HTML.FIELDSET("\n            ", HTML.LEGEND("Update Event"), "\n            ", Spacebars.TemplateWith(function() {
          return {
            name: Spacebars.call("name")
          };
        }, UI.block(function() {
          var self = this;
          return Spacebars.include(self.lookupTemplate("afQuickField"));
        })), "\n            ", Spacebars.TemplateWith(function() {
          return {
            name: Spacebars.call("description")
          };
        }, UI.block(function() {
          var self = this;
          return Spacebars.include(self.lookupTemplate("afQuickField"));
        })), "\n            ", Spacebars.TemplateWith(function() {
          return {
            name: Spacebars.call("price")
          };
        }, UI.block(function() {
          var self = this;
          return Spacebars.include(self.lookupTemplate("afQuickField"));
        })), "\n          "), "\n          ", HTML.BUTTON({
          type: "submit",
          "class": "btn btn-default",
          id: "submit"
        }, "Submit"), "\n        " ];
      }));
    })), "\n        "), "\n        ", HTML.DIV({
      "class": "modal-footer"
    }, "\n          ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-default",
      "data-dismiss": "modal"
    }, "Close"), "\n        "), "\n      "), HTML.Comment(" /.modal-content "), "\n    "), HTML.Comment(" /.modal-dialog "), "\n  "), HTML.Comment(" /.modal "), "\n  " ];
  })), "\n\n  ", HTML.TABLE({
    "class": "table table-hover"
  }, HTML.Raw("\n    <thead>\n      <tr>\n        <th> Reward </th>\n        <th> Description </th>\n        <th> Price </th>\n        <th></th>\n      </tr>\n    </thead>\n    "), HTML.TBODY("\n    ", UI.Each(function() {
    return Spacebars.call(self.lookup("rewards"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.TR("\n      ", HTML.TD({
      "class": "eventView"
    }, function() {
      return Spacebars.mustache(self.lookup("name"));
    }), "\n      ", HTML.TD({
      "class": "eventView"
    }, function() {
      return Spacebars.mustache(self.lookup("description"));
    }), "\n      ", HTML.TD({
      "class": "eventView"
    }, function() {
      return Spacebars.mustache(self.lookup("price"));
    }), "\n      ", UI.If(function() {
      return Spacebars.dataMustache(self.lookup("isInRole"), "admin");
    }, UI.block(function() {
      var self = this;
      return [ "\n        ", HTML.TD(HTML.BUTTON({
        type: "button",
        "class": "btn btn-default editReward",
        "data-toggle": "modal",
        "data-target": "#editModal"
      }, "Edit")), "\n      " ];
    })), "\n    "), "\n    " ];
  })), "\n    "), "\n  ") ];
}));

})();
