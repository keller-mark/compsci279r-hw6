import { Mongo } from 'meteor/mongo';

// This creates a new collection in the MongoDB database called 'tasks'
// which we will use to perform CRUD actions on task objects.
export const TasksCollection = new Mongo.Collection('tasks');

// We export this TasksCollection variable because it has methods for these CRUD actions
// that we can use in the client-side.