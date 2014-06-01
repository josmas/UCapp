(function(){
Template.__define__("checkPoints", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<div class="text-center">\n    <h1><small>Activity History</small></h1>\n    <hr>\n    </div>\n    '), HTML.TABLE({
    "class": "table table-hover"
  }, HTML.Raw("\n    <thead>\n      <tr>\n        <th>Event Name</th>\n        <th>Points</th>\n        <th>Event Start Date</th>\n        <th>Event End Date</th>\n      </tr>\n    </thead>\n    "), HTML.TBODY("\n    ", UI.Each(function() {
    return Spacebars.call(self.lookup("activities"));
  }, UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.TR("\n        ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("eventName"));
    }), "\n        ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("eventPoints"));
    }), "\n        ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("formatDate"), self.lookup("eventStart"));
    }, " "), "\n        ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("formatDate"), self.lookup("eventEnd"));
    }, " "), "\n        ", HTML.TD({
      "class": "text-right"
    }, "\n          ", HTML.A({
      href: "#",
      "class": "btn btn-warning btn-xs"
    }, "Dispute"), "\n        "), "\n      "), "\n    " ];
  })), "\n    "), "\n  "), "\n  ", HTML.H3({
    "class": "text-center"
  }, "Total Points: ", function() {
    return Spacebars.mustache(self.lookup("totalPoints"));
  }) ];
}));

})();
