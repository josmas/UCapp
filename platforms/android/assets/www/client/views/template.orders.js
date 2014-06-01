(function(){
Template.__define__("orders", (function() {
  var self = this;
  var template = this;
  return [ HTML.TABLE({
    "class": "table table-hover"
  }, HTML.Raw("\n    <thead>\n      <tr>\n        <th>Customer Name</th>\n        <th>Order Date</th>\n        <th>Item Type</th>\n      </tr>\n    </thead>\n    "), HTML.TBODY("\n      ", UI.Each(function() {
    return Spacebars.call(self.lookup("activeOrder"));
  }, UI.block(function() {
    var self = this;
    return [ "\n        ", HTML.TR({
      "class": "orderRow default",
      id: function() {
        return Spacebars.mustache(self.lookup("_id"));
      }
    }, "\n          ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("customerName"));
    }), "\n          ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("orderDate"));
    }), "\n          ", HTML.TD(function() {
      return Spacebars.mustache(self.lookup("itemType"));
    }), "\n          ", HTML.TD(HTML.BUTTON({
      type: "button",
      "class": "btn btn-default expand"
    }, "\n              Expand\n          ")), "\n        "), "\n        ", UI.If(function() {
      return Spacebars.dataMustache(self.lookup("isOrdered"), Spacebars.dot(self.lookup("."), "_id"));
    }, UI.block(function() {
      var self = this;
      return [ "\n        ", HTML.DIV({
        "class": "row"
      }, "\n          ", HTML.DIV({
        "class": "col-md-4"
      }, "\n          ", function() {
        return Spacebars.makeRaw(Spacebars.mustache(self.lookup("getMeasurements"), Spacebars.dot(self.lookup("."), "_id")));
      }, "\n          "), "\n          ", HTML.DIV({
        "class": "col-md-4"
      }, "\n          ", function() {
        return Spacebars.makeRaw(Spacebars.mustache(self.lookup("getStyleChoices"), Spacebars.dot(self.lookup("."), "_id")));
      }, "\n        "), "\n        "), "\n        " ];
    })), "\n      " ];
  })), "\n    "), "\n  "), HTML.Raw('\n    <hr>\n    <form role="form">\n    <div class="form-group">\n      <label for="targetEmail">Supplier\'s Email Address</label>\n      <input type="email" class="form-control" id="targetEmail" placeholder="Enter email">\n      </div>\n    </form>\n    <button class="btn btn-lg btn-primary" id="reviewOrder">Review Order</button>') ];
}));

})();
