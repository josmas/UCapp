(function(){
Template.__define__("listEvents", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<h1 class="text-center">Current and Upcoming Events</h1>\n  <hr>\n  <br>\n  <!--Modal launched when Edit button below clicked -->\n  '), Spacebars.With(function() {
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
    }, "Edit Events"), "\n        "), "\n        ", HTML.DIV({
      "class": "modal-body"
    }, "\n        ", Spacebars.TemplateWith(function() {
      return {
        collection: Spacebars.call("Events"),
        doc: Spacebars.call(self.lookup("editingDoc")),
        id: Spacebars.call("updatEventsForm"),
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
            name: Spacebars.call("address")
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
            name: Spacebars.call("active")
          };
        }, UI.block(function() {
          var self = this;
          return Spacebars.include(self.lookupTemplate("afQuickField"));
        })), "\n            ", Spacebars.TemplateWith(function() {
          return {
            name: Spacebars.call("startDate")
          };
        }, UI.block(function() {
          var self = this;
          return Spacebars.include(self.lookupTemplate("afQuickField"));
        })), "\n            ", Spacebars.TemplateWith(function() {
          return {
            name: Spacebars.call("endDate")
          };
        }, UI.block(function() {
          var self = this;
          return Spacebars.include(self.lookupTemplate("afQuickField"));
        })), "\n            ", Spacebars.TemplateWith(function() {
          return {
            name: Spacebars.call("points")
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
  })), "\n  ", HTML.TABLE({
    "class": "table table-hover"
  }, HTML.Raw("\n    <thead>\n      <tr>\n        <th> Name of Event </th>\n        <th> Address </th>\n        <th> Points </th>\n        <th>Start Date </th>\n        <th> End Date </th>\n      </tr>\n    </thead>\n    "), HTML.TBODY("\n    ", UI.Each(function() {
    return Spacebars.call(self.lookup("communityEvents"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.TR("\n      ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("name"));
    }), "\n      ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("address"));
    }), "\n      ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("points"));
    }), "\n      ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("formatDate"), self.lookup("startDate"));
    }), "\n      ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("formatDate"), self.lookup("endDate"));
    }), "\n      ", HTML.TD(HTML.BUTTON({
      type: "button",
      "class": "btn btn-default editEvent",
      "data-toggle": "modal",
      "data-target": "#editModal"
    }, "Edit")), "\n    "), "\n    " ];
  })), "\n    "), "\n  ") ];
}));

})();
