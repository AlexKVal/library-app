import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  message: '',

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 5),
  isSubmitButtonEnabled: Ember.computed.and('isEmailValid', 'isMessageValid'),

  emailFeedbackClasses: Ember.computed('email', 'isEmailValid', function() {
    let classes = '';

    if (this.get('email').length > 0) {
      classes += 'has-feedback';

      if (this.get('isEmailValid')) classes += ' has-success';
      else classes += ' has-error';
    }

    return classes;
  }),
  messageFeedbackClasses: Ember.computed('message', 'isMessageValid', function() {
    let classes = '';

    if (this.get('message').length > 0) {
      classes += 'has-feedback';

      if (this.get('isMessageValid')) classes += ' has-success';
      else classes += ' has-error';
    }

    return classes;
  }),

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
