(function(){
Template.__define__("addCommunityEvents", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<!--Modal launched when Edit button below clicked -->\n  "), HTML.DIV({
    "class": "modal fade",
    id: "addEventModal"
  }, "\n    ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-content"
  }, HTML.Raw('\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n            &times;</button>\n          <h4 class="modal-title text-center">Edit Events</h4>\n        </div>\n        '), HTML.DIV({
    "class": "modal-body"
  }, "\n        ", Spacebars.TemplateWith(function() {
    return {
      collection: Spacebars.call("Events"),
      id: Spacebars.call("insertEventsForm"),
      type: Spacebars.call("insert")
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
          name: Spacebars.call("url")
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
  })), "\n        "), HTML.Raw('\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        </div>\n      ')), HTML.Raw("<!-- /.modal-content -->\n    ")), HTML.Raw("<!-- /.modal-dialog -->\n  ")), HTML.Raw("<!-- /.modal -->\n  "), UI.Unless(function() {
    return Spacebars.call(self.lookup("showMapClicked"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", Spacebars.include(self.lookupTemplate("listEvents")), "\n    ", HTML.DIV({
      "class": "row text-center"
    }, "\n      ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-lg btn-default text-center",
      id: "addEvent",
      "data-toggle": "modal",
      "data-target": "#addEventModal"
    }, "Add Event"), "\n      ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-lg btn-default text-center",
      id: "showMap"
    }, "\n        Show Events on Map"), "\n    "), "\n    ", HTML.BR(), HTML.BR(), "\n  " ];
  })), "\n  ", UI.If(function() {
    return Spacebars.call(self.lookup("showMapClicked"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.DIV({
      "class": "text-center row"
    }, "\n      ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-danger text-center",
      id: "hideMap"
    }, "Hide Map"), "\n    "), "\n    ", Spacebars.include(self.lookupTemplate("communityNeeds")), "\n  " ];
  })) ];
}));

})();
