import Ember from 'ember';

export default Ember.Component.extend({
  updateDope: false,

  actions: {
    showUpdateForm() {
      this.set('updateDope', true);
    },
    update(dope) {
      var params = {
        city: this.get('city'),
        photo: this.get('photo'),
        strain: this.get('strain'),
        text: this.get('text'),
        thc: this.get('thc'),
        type: this.get('type'),

      };
      this.set('updateDope', false);
      this.sendAction('update', dope, params);
    },
  }
});
