import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  message: '',

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 5),
  isSubmitButtonEnabled: Ember.computed.and('isEmailValid', 'isMessageValid'),

  responseMessage: '',
  actions: {
    sendMessage() {
      let msg = `Message has been sent to: ${this.get('email')}`;
      console.log(msg);
      this.set('responseMessage', msg);
      this.set('email', '');
      this.set('message', '');
    }
  }
});
