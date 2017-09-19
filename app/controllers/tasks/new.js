import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function() {
      var title = this.get('title'),
          date = this.get('date'),
          description = this.get('description'),

          /* Create New Task */
          newTask = this.store.createRecord('task', {
            title,
            description,
            date: new Date(date)
          })

      // Save to Database
      newTask.save();

      // Clear Form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      })
    }
  }
});
