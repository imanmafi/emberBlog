import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      dopes: this.store.findAll("dope"),
      comments: this.store.findAll("comment")
    });
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

   update(dope, params) {
     Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          dope.set(key,params[key]);
        }
      });
      dope.save();
      this.transitionTo('index');
   },

   addComment(dope, params) {
      var newComment = this.store.createRecord('comment', dope, params);
        //line 33 may not be dope.store, may be this.store instead??
        debugger;
      newComment.save();
      this.transitionTo('index');
   }
  }
});
