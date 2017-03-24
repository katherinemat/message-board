import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   // this.store.findAll('article').then(function(results) {
  //   //   return results.toArray().reverse();
  //   // });
  //   return this.store.findAll('article');
  // }
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
