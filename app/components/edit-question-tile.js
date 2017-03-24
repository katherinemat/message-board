import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    questionEditFormShow() {
      if(this.editQuestionForm) {
        this.set('editQuestionForm', false);
      } else {
        this.set('editQuestionForm', true);
      }
    },
    editQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text')
      };
      this.set('editQuestionForm', false);
      this.sendAction('editQuestion', question, params);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
      this.transitionTo('index');
    },
  }
});
