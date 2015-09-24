import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return this.store.findAll("dope");
  },

  actions: {

    delete(dope) {
      dope.destroyRecord();
      this.transitionTo('index');
    },

    save(params) {
     var newDope = this.store.createRecord('dope', params);
     newDope.save();
     this.transitionTo('index');
   },
  }
});
