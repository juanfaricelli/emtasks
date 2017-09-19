import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTask: function(id) {
      var title = this.get('model.title'),
          date = this.get('model.date'),
          description = this.get('model.description'),
          self = this;

      /* Update Task */
      this.store.findRecord('task', id)
      .then(function(task) {
        task.set('title', title);
        task.set('description', description);
        task.set('date', new Date(date));
        // Save to Database
        task.save();
        // Redirect
        self.transitionToRoute﻿('tasks');
      });
    }
  }
});
