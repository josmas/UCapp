(function(){
Template.__define__("takePicture", (function() {
  var self = this;
  var template = this;
  return [ HTML.DIV({
    "class": "text-center"
  }, HTML.Raw("\n    <h3><small>Please submit picture</small></h3>\n    "), UI.Each(function() {
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
  })), HTML.Raw('\n    <form role="form">\n      <div class="form-group">\n        <input id="photoInputFront" class="center-block" type="file" accept="image/*" capture="camera"> \n      </div>\n    </form>\n    <button type="button" class="btn btn-large btn-danger" id="removeFront">Remove</button>\n  ')), HTML.Raw('\n  <hr>\n  <div class="col-md-4 col-md-offset-4">\n    <button class="btn btn-large btn-block btn-success" id="reviewOrder">Done</button>\n  </div>') ];
}));

})();
