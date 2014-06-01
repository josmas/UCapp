(function(){
Template.__define__("review", (function() {
  var self = this;
  var template = this;
  return [ HTML.DIV({
    "class": "row"
  }, "\n    ", HTML.DIV({
    "class": "col-xs-6 col-xs-offset-3"
  }, "\n      ", function() {
    return Spacebars.makeRaw(Spacebars.mustache(self.lookup("emailText")));
  }, "\n    "), "\n  "), HTML.Raw('\n  <div class="row">\n    <h3 class="text-center">Review and send orders</h3>\n    <button type="submit" id="sendEmail" class="center-block btn btn-primary btn-large">\n      Send Order\n    </button>\n  </div>') ];
}));

})();
