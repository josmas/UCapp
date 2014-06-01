(function(){
Template.__define__("addCommunityEvents", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("listEvents")), HTML.Raw('\n  <button type="button" class="btn btn-lg btn-default text-center" id="addEvent">Add Event</button>\n  <button type="button" class="btn btn-lg btn-default text-center" id="showMap">Show Map</button>\n  <br><br>\n  '), UI.If(function() {
    return Spacebars.call(self.lookup("addEventClicked"));
  }, UI.block(function() {
    var self = this;
    return [ "\n  ", HTML.DIV({
      "class": "col-md-4 col-md-offset-4"
    }, "\n    ", Spacebars.TemplateWith(function() {
      return {
        collection: Spacebars.call("Events"),
        id: Spacebars.call("insertEventsForm"),
        type: Spacebars.call("insert")
      };
    }, UI.block(function() {
      var self = this;
      return Spacebars.include(self.lookupTemplate("quickForm"));
    })), "\n    ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-danger",
      id: "cancelEvent"
    }, "Cancel Event"), "\n  "), "\n  " ];
  })), "\n  ", UI.If(function() {
    return Spacebars.call(self.lookup("showMapClicked"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.BUTTON({
      type: "button",
      "class": "btn btn-danger",
      id: "hideMap"
    }, "Hide Map"), "\n    ", Spacebars.include(self.lookupTemplate("communityNeeds")), "\n  " ];
  })) ];
}));

})();
