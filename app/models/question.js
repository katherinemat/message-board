import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  text: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
