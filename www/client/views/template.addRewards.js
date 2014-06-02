(function(){
Template.__define__("addRewards", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<!--Modal launched when Edit button below clicked -->\n  "), HTML.DIV({
    "class": "modal fade",
    id: "addRewardsModal"
  }, "\n    ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n      ", HTML.DIV({
    "class": "modal-content"
  }, HTML.Raw('\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n            &times;</button>\n          <h4 class="modal-title text-center">Edit Rewards</h4>\n        </div>\n        '), HTML.DIV({
    "class": "modal-body"
  }, "\n        ", Spacebars.TemplateWith(function() {
    return {
      collection: Spacebars.call("Rewards"),
      id: Spacebars.call("insertRewardForm"),
      type: Spacebars.call("insert")
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("autoForm"), UI.block(function() {
      var self = this;
      return [ "\n          ", HTML.FIELDSET("\n            ", HTML.LEGEND("Update Reward"), "\n            ", Spacebars.TemplateWith(function() {
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
  })), "\n        "), HTML.Raw('\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        </div>\n      ')), HTML.Raw("<!-- /.modal-content -->\n    ")), HTML.Raw("<!-- /.modal-dialog -->\n  ")), HTML.Raw("<!-- /.modal -->\n  "), Spacebars.include(self.lookupTemplate("listRewards")), HTML.Raw('\n  <div class="row text-center">\n    <button type="button" class="btn btn-lg btn-default text-center" id="addEvent" data-toggle="modal" data-target="#addRewardsModal">Add Reward</button>\n  </div>') ];
}));

})();
