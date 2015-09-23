import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return this.store.findAll("dope");
  },

  actions: {

    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    save(params) {
     debugger;
     var newPost = this.store.createRecord('dope', params);
     newPost.save();
     this.transitionTo('index');
   },
  }
});
