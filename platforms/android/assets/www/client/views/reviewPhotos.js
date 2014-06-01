(function(){//TODO: this is all copy and pasted code from memberProfiles
//should abstract this to a single "search members" template
Template.reviewPhotos.rendered = function() {
  $('#memberSearch').focus();
  Session.set("memberProfileSelected", false);
  Session.set('selectedMemberId', false);
};

Template.memberProfiles.helpers({  
  'currentMemberName': function() {
    memberId =  Session.get('currentMember');

    if(!_.isUndefined(memberId)) {
      return Meteor.users.findOne({_id: memberId}).fullName;
    }
    return '';
  },
  'member': function() {
    return Meteor.users.findOne(Session.get('selectedMemberId'));
  }
});

Template.memberProfiles.events({
  'keyup #memberSearch': function(e) {
    Session.set("searchQuery", e.currentTarget.value);
  },
  'click #addMember': function(e) {
    e.preventDefault();
    prevValue = Session.get('memberButtonClicked');
    Session.set("memberButtonClicked",!prevValue);
  },
  'click .memberNames': function(e) {
    Session.set('currentMember', this._id);
  }
});


})();
