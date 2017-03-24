import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // this.store.findAll('article').then(function(results) {
    //   return results.toArray().reverse();
    // });
    return this.store.findAll('article');
  }
});
