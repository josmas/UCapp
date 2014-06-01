(function(){
Template.__define__("addCustomerForm", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<form class="form-inline" role="form">\n    <div class="form-group">\n      <label class="sr-only" for="emailInput">Email address</label>\n      <input type="email" class="form-control" id="emailInput" placeholder="Enter email">\n    </div>\n    <div class="form-group">\n      <label class="sr-only" for="firstName">First Name</label>\n      <input type="text" class="form-control" id="firstName" placeholder="Enter first name">\n    </div>\n    <div class="form-group">\n      <label class="sr-only" for="lastName">Last Name</label>\n      <input type="text" class="form-control" id="lastName" placeholder="Enter last name">\n    </div>\n    <button type="submit" class="btn btn-success" id="createNewCustomer">Create New Customer</button>\n  </form>');
}));

})();
