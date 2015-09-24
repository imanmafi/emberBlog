import Ember from 'ember';

export default Ember.Component.extend({
  addCommentForm: false,
  actions: {
    showCommentForm() {
      this.set('addCommentForm', true);
    },
    addComment(dope) {
      var params = {
          text: this.get('text'),
          author: this.get('author'),
          dope: this.get('dope')
      }
      debugger;
      this.set('addCommentForm', false);
      this.sendAction('addComment', dope, params)
    }
  }
});
