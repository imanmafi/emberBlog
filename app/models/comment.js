import DS from 'ember-data';

export default DS.Model.extend({
  dope: DS.belongsTo('dope', {async: true}),
  text: DS.attr(),
  author: DS.attr(),
});
