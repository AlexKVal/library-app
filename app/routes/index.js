import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('invitation');
  },

  actions: {
    sendInvitation(newInvitation) {
      newInvitation.save().then((invitation) => {
        const msg = `Thank you! We've just saved your email address: ${invitation.get('email')}`;
        this.controller.set('responseMessage', msg);

        this.controller.set('model', this.store.createRecord('invitation'));
      });
    },

    willTransition() {
      const model = this.controller.get('model');
      if(model.get('isNew')) {
        model.destroyRecord();
      }
      this.controller.set('responseMessage', '');
    }
  }
});
