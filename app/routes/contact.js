import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    sendMessage(newContact) {

      newContact.save().then((contact) => {
        const msg = `Message has been sent to: ${contact.get('email')}`;
        this.controller.set('responseMessage', msg);

        this.controller.set('model', this.store.createRecord('contact'));
      });
    },

    willTransition() {
      let model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
      this.controller.set('responseMessage', '');
    }
  }
});
