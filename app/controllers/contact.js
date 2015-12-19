import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  message: '',

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 5),
  isSubmitButtonEnabled: Ember.computed.and('isEmailValid', 'isMessageValid')
});
