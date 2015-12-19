import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),

  isSubmitButtonEnabled: true
});
