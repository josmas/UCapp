(function(){
Template.__define__("loginPage", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<div class="col-md-4 col-md-offset-4">\n    <h3>Login Page</h3>\n    <form role="form">\n      <div class="form-group>">\n        <label for="userEmail" class="sr-only">User Email</label>\n        <input type="email" class="form-control" id="userEmail" placeholder="Enter Email">\n      </div>\n      <div class="form-group>">\n        <label for="userPassword" class="sr-only">Password</label>\n        <br>\n        <input type="password" class="form-control" id="userPassword" placeholder="Enter Password">\n      </div>\n      <hr>\n      <button type="submit" class="btn btn-default" id="loginSubmit">Submit</button>\n    </form>\n  </div>');
}));

})();
