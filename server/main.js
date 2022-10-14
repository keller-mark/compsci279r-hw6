import { Meteor } from 'meteor/meteor';
// Import the task collection to be able to add tasks and query tasks from the database.
import { TasksCollection } from '/imports/api/TasksCollection';

// Create a function which inserts new task object into the database, given a task name string.
const insertTask = taskText => TasksCollection.insert({ text: taskText });

// Define an initial set of tasks if the collection is empty,
// when the server starts up.
Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
    ].forEach(insertTask);
  }
});