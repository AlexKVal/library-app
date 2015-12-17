import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: true,
  emailAddress: '',

  actualEmailAddress: function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }.property('emailAddress'),

  emailAddressChanged: function() {
    console.log('observer is called', this.get('emailAddress'));
  }.observes('emailAddress')
});
