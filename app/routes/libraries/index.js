import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('library');
  },

  actions: {
    deleteLibrary(library) {
      if (confirm('Are you sure?')) {
        library.destroyRecord();
      }
    }
  }
});
