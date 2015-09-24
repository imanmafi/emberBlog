import Ember from 'ember';

export default Ember.Component.extend({
  addNewDope: false,
  actions: {
    dopeFormShow(){
      this.set('addNewDope', true);
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
      this.set('addNewDope', false);
      this.sendAction('save', params);
    }
  }
});
