import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 5),
  isSubmitButtonEnabled: Ember.computed.and('isEmailValid', 'isMessageValid')
});
