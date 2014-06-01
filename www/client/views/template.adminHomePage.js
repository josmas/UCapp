(function(){
Template.__define__("adminHomePage", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<h1 class="text-center"><small>Welcome Admin</small></h1>\n  <hr>\n  '), HTML.DIV({
    "class": "col-md-6 col-md-offset-3"
  }, "\n    ", HTML.DIV({
    "class": "row text-center"
  }, HTML.Raw("\n      <h1><small>Member Settings</small></h1>\n      <hr>\n      "), HTML.P(HTML.A({
    href: function() {
      return Spacebars.mustache(self.lookup("pathFor"), "memberProfiles");
    },
    "class": "btn-lg btn-default btn-block"
  }, "Member Profiles\n      ")), HTML.Raw('\n      <p><a href="reviewPhotos" class="btn-lg btn-default btn-block">\n          Review Member Photos\n      </a></p>\n      <p><a href="itemPictures" class="btn-lg btn-default btn-block">\n          Update Rewards and Points\n      </a></p>\n      <h1><small>Community</small></h1>\n      <hr>\n      <p><a href="addCommunityEvents" class="btn-lg btn-default btn-block">\n          Add, Modify, and View Community Events \n      </a></p>\n      <p><a href="landing" class="btn-lg btn-default btn-block">\n          Manage Group Activities\n      </a></p>\n    ')), "\n  ") ];
}));

})();
