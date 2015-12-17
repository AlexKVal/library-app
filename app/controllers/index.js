import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isDisabled: Ember.computed.empty('emailAddress'),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  })
});
