import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow(){
      this.set('addNewPost', true);
    },

    save(){
      var params = {
        city: this.get('city'),
        photo: this.get('photo'),
        strain: this.get('strain'),
        text: this.get('text'),
        thc: this.get('thc'),
        type: this.get('type')

      };
      this.set('addNewPost', false),
      this.sendAction('save', params);
    }
  }
});
