(function(){
Template.__define__("memberHomePage", (function() {
  var self = this;
  var template = this;
  return [ HTML.H1({
    "class": "text-center"
  }, HTML.SMALL("Welcome ", function() {
    return Spacebars.mustache(self.lookup("currentMemberName"));
  }, "\n  ")), HTML.Raw('\n  <hr>\n  <div class="col-md-6 col-md-offset-3">\n    <div class="row text-center">\n      <h1><small>Member Area</small></h1>\n      <hr>\n      <p><a href="takePicture" class="btn-lg btn-default btn-block">\n        Take a Photo\n      </a></p>\n      <p><a href="scanQR" class="btn-lg btn-default btn-block">\n        Scan a QR Code\n      </a></p>\n      <p><a href="checkPoints" class="btn-lg btn-default btn-block">\n        Check Your Points\n      </a></p>\n      <h1><small>Community</small></h1>\n      <hr>\n      <p><a href="listEvents" class="btn-lg btn-default btn-block">\n        Current and Upcoming Events \n      </a></p>\n      <p><a href="landing" class="btn-lg btn-default btn-block">\n        Community\n      </a></p>\n      <p><a href="landing" class="btn-lg btn-default btn-block">\n        FAQ\n      </a></p>\n    </div>\n  </div>') ];
}));

})();
