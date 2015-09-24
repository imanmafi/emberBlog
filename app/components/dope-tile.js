import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function(){
      this.set('isImageShowing', true);
    },

    imageHide: function(){
      this.set('isImageShowing', false);
    },
    update(dope, params) {
      this.sendAction('update', dope, params);
    },
    delete: function(dope) {
      this.sendAction('delete', dope);
    }

  }
});
