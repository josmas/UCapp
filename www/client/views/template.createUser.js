(function(){
Template.__define__("createUser", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<div class="col-md-4 col-md-offset-4">\n    <h3>Create A User Account</h3>\n    <form role="form">\n      <br>\n      <div class="form-group>">\n        <label for="firsName" class="sr-only">First Name</label>\n        <input type="text" class="form-control" id="firstName" placeholder="Enter First Name">\n      </div>\n      <br>\n      <div class="form-group>">\n        <label for="lastName" class="sr-only">Last Name</label>\n        <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name">\n      </div>\n      <br>\n      <div class="form-group>">\n        <label for="userStreet" class="sr-only">Street Address</label>\n        <input type="text" class="form-control" id="userStreet" placeholder="Enter Street">\n      </div>\n      <br>\n      <div class="form-group>">\n        <label for="userCity" class="sr-only">City</label>\n        <input type="text" class="form-control" id="userCity" placeholder="Enter City">\n      </div>\n      <br>\n      <div class="form-group>">\n        <label for="userState" class="sr-only">State</label>\n        <input type="text" class="form-control" id="userState" placeholder="Enter State">\n      </div>\n      <br>\n      <div class="form-group>">\n        <label for="userEmail" class="sr-only">Email Address</label>\n        <input type="email" class="form-control" id="userEmail" placeholder="Enter Email">\n      </div>\n      <br>\n      <div class="form-group>">\n        <label for="userPassword" class="sr-only">Password</label>\n        <input type="password" class="form-control" id="userPassword" placeholder="Enter Password">\n      </div>\n      <br>\n      <div class="form-group>">\n        <label for="userPasswordConfirm" class="sr-only">Confirm Password</label>\n        <input type="password" class="form-control" id="userPasswordConfirm" placeholder="Enter Password Again">\n      </div>\n      <hr>\n      <button type="submit" class="btn btn-default" id="createNewUser">Submit</button>\n    </form>\n  </div>');
}));

})();
