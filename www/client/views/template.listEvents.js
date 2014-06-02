(function(){
Template.__define__("listEvents", (function() {
  var self = this;
  var template = this;
  return UI.If(function() {
    return Spacebars.call(self.lookup("isEventIndex"));
  }, UI.block(function() {
    var self = this;
    return [ "\n  ", HTML.H1({
      "class": "text-center"
    }, "Current and Upcoming Events"), "\n  ", HTML.HR(), "\n  ", HTML.BR(), "\n  ", HTML.Comment("Modal launched when Edit button below clicked "), "\n  ", Spacebars.With(function() {
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
          id: Spacebars.call("updateEventsForm"),
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
      })), "\n        "), "\n        ", HTML.DIV({
        "class": "modal-footer"
      }, "\n          ", HTML.BUTTON({
        type: "button",
        "class": "btn btn-default",
        "data-dismiss": "modal"
      }, "Close"), "\n        "), "\n      "), HTML.Comment(" /.modal-content "), "\n    "), HTML.Comment(" /.modal-dialog "), "\n  "), HTML.Comment(" /.modal "), "\n  " ];
    })), "\n  ", HTML.TABLE({
      "class": "table table-hover"
    }, "\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", HTML.TH(" Name of Event "), "\n        ", HTML.TH(" Address "), "\n        ", HTML.TH(" URL "), "\n        ", HTML.TH(" Points "), "\n        ", HTML.TH(" Start Date "), "\n        ", HTML.TH(" End Date "), "\n        ", HTML.TH(), "\n      "), "\n    "), "\n    ", HTML.TBODY("\n    ", UI.Each(function() {
      return Spacebars.call(self.lookup("upcomingEvents"));
    }, UI.block(function() {
      var self = this;
      return [ "\n    ", HTML.TR("\n      ", HTML.TD({
        "class": "eventView"
      }, function() {
        return Spacebars.mustache(self.lookup("name"));
      }), "\n      ", HTML.TD({
        "class": "eventView"
      }, function() {
        return Spacebars.mustache(self.lookup("address"));
      }), "\n      ", HTML.TD({
        "class": "eventView"
      }, function() {
        return Spacebars.mustache(self.lookup("url"));
      }), "\n      ", HTML.TD({
        "class": "eventView"
      }, function() {
        return Spacebars.mustache(self.lookup("points"));
      }), "\n      ", HTML.TD({
        "class": "eventView"
      }, function() {
        return Spacebars.mustache(self.lookup("formatDate"), self.lookup("startDate"));
      }), "\n      ", HTML.TD({
        "class": "eventView"
      }, function() {
        return Spacebars.mustache(self.lookup("formatDate"), self.lookup("endDate"));
      }), "\n      ", UI.If(function() {
        return Spacebars.dataMustache(self.lookup("isInRole"), "admin");
      }, UI.block(function() {
        var self = this;
        return [ "\n       ", HTML.TD(HTML.BUTTON({
          type: "button",
          "class": "btn btn-default editEvent",
          "data-toggle": "modal",
          "data-target": "#editModal"
        }, "Edit")), "\n      " ];
      })), "\n    "), "\n    " ];
    })), "\n    "), "\n  "), "\n  " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n  		", Spacebars.With(function() {
      return Spacebars.call(self.lookup("eventView"));
    }, UI.block(function() {
      var self = this;
      return [ "\n  		", HTML.DIV({
        "class": "container",
        style: "margin:10px;"
      }, "\n	  		", HTML.DIV({
        "class": "row",
        style: "margin-bottom:10px;"
      }, "\n	  			", HTML.SPAN({
        "class": "col-md-12"
      }, "\n		  			", HTML.SPAN({
        "class": "btn btn-info back"
      }, "\n		  				", HTML.SPAN({
        "class": "glyphicon glyphicon-arrow-left"
      }), "\n		  				All Events\n		  			"), "\n		  		"), "\n	  		"), "\n	  		", HTML.DIV({
        "class": "row",
        style: "margin-bottom:10px;"
      }, "\n	  			", HTML.SPAN({
        "class": "col-md-7"
      }, "\n	  				", HTML.IFRAME({
        width: "500",
        height: "450",
        frameborder: "0",
        style: "border:0",
        src: [ "https://www.google.com/maps/embed/v1/place?key=AIzaSyA_ypBd-Tqf2AcLAoiEFLq9z-ZS4LXjAmY&q=", function() {
          return Spacebars.mustache(self.lookup("address"));
        } ]
      }, "\n					"), "\n	  			"), "\n	  			", HTML.SPAN({
        "class": "col-md-5"
      }, "\n	  				", HTML.H4(function() {
        return Spacebars.mustache(self.lookup("name"));
      }), "\n	  				", HTML.P(function() {
        return Spacebars.mustache(self.lookup("address"));
      }), "\n            ", HTML.P(function() {
        return Spacebars.mustache(self.lookup("url"));
      }), "\n	  				", HTML.P(function() {
        return Spacebars.mustache(self.lookup("points"));
      }), "\n	  				", HTML.P(function() {
        return Spacebars.mustache(self.lookup("formatDate"), self.lookup("startDate"));
      }, "- ", function() {
        return Spacebars.mustache(self.lookup("formatDate"), self.lookup("endDate"));
      }), "\n	  			"), "\n	  		"), "\n  		"), "\n		" ];
    })), "\n  " ];
  }));
}));

})();
