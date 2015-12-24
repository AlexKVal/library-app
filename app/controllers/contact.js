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
      const newContact = this.get('model');
      newContact.email = this.get('email');
      newContact.message = this.get('message');

      newContact.save().then((contact) => {
        const msg = `Message has been sent to: ${contact.email}`;
        this.set('responseMessage', msg);
        this.set('email', '');
        this.set('message', '');
      });
    }
  }
});
