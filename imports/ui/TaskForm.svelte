<script>
  // We import the TasksCollection to be able to create tasks in the database.
  import { TasksCollection } from '../api/TasksCollection';

  // We set up a variable to bind to the value of the input element.
  let newTask = '';

  // We create a form submission handler to create the task in the database.
  const handleSubmit = () => {
    // Insert a task object into the collection.
    TasksCollection.insert({
      // Set the task text.
      text: newTask,
      // Use the current date/time as the creation date for the task.
      createdAt: new Date(),
    });

    // Clear the new task form.
    newTask = '';
  }
</script>
<!-- Render the new task form. -->
<form class="task-form" on:submit|preventDefault={handleSubmit}>
  <!-- Render the input element for the task name. -->
  <input
    type="text"
    name="text"
    placeholder="Type to add new tasks"
    bind:value={newTask}
  />
  <!-- Render the button for submitting the form. -->
  <button type="submit">Add Task</button>
</form>