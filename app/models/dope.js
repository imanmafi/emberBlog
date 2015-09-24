import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr(),
  photo: DS.attr(),
  strain: DS.attr(),
  text: DS.attr(),
  thc: DS.attr(),
  type: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
});
