import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

// Where the app begins on the client-side.
Meteor.startup(() => {
  new App({
    // The target HTML element in ./main.html that Meteor will use to render the ToDo App.
    target: document.getElementById('app')
  });
});