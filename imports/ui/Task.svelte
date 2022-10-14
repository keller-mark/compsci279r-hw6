<script>
  // We import the TasksCollection to be able to check and delte the task in the database.
  import { TasksCollection } from '../api/TasksCollection';

  // We obtain the task object from the task prop set by the parent component.
  export let task;

  // We define a handler that runs when clicking the task checkbox.
  const toggleChecked = () => {
    // Update the database task corresponding to this task's ID value.
    TasksCollection.update(task._id, {
      // Set the checked property to the opposite of its current value.
      $set: { isChecked: !task.isChecked }
    });
  };

  // We define a handler that runs when clicking the task delete button.
  const deleteThisTask = () => {
    // Delete the task from the database, identifying the task by its ID value.
    TasksCollection.remove(task._id);
  };
</script>

<li>
  <!-- Render a checkbox for marking the task as completed. -->
  <!-- Set the value to not-not-isChecked, handling the case when isChecked is null/undefined. -->
  <!-- Set its click handler to the toggleChecked function. -->
  <input
    type="checkbox"
    readonly
    checked={!!task.isChecked}
    on:click={toggleChecked}
  />
  <!-- Render the task name. -->
  <span>{ task.text }</span>
  <!-- Render a delete button, which calls the deleteThisTask handler on click. -->
  <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>