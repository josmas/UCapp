(function(){
Template.__define__("itemPictures", (function() {
  var self = this;
  var template = this;
  return [ HTML.DIV({
    "class": "text-center"
  }, HTML.Raw("\n    <h3><small>Please take front picture</small></h3>\n    "), UI.Each(function() {
    return Spacebars.dataMustache(self.lookup("images"), "Front");
  }, UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(self.lookup("url"));
      },
      alt: "an Image",
      width: "400",
      height: "400"
    }), "\n    " ];
  })), HTML.Raw('\n    <form role="form">\n      <div class="form-group">\n        <input id="itemPicture" class="center-block" type="file" accept="image/*" capture="camera"> \n      </div>\n    </form>\n    <button type="button" class="btn btn-large btn-danger" id="removeItem">\n      Remove\n    </button>\n  ')), HTML.Raw('\n  <hr>\n  <div class="row text-center">\n    <div class="col-md-3 col-md-offset-3">\n      <button class="btn btn-large btn-block btn-primary" id="addAnotherPicture">\n        Add Another Picture\n      </button>\n    </div>\n    <div class="col-md-3">\n      <button class="btn btn-large btn-block btn-success" id="doneItemPictures">\n        Done\n      </button>\n    </div>\n  </div>') ];
}));

})();
