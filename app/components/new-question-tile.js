import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,
  actions: {
    questionFormShow() {
      if(this.newQuestionForm) {
        this.set('newQuestionForm', false);
      } else {
        this.set('newQuestionForm', true);
      }
    },
    saveQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text')
      };
      this.set('newQuestionForm', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
