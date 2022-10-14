<script>
  // We import the TasksCollection to manipulate the tasks in the database.
  import { TasksCollection } from '../api/TasksCollection';

  // We import the <Task/> and <TaskForm/> svelte components.
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';

  // We set a flag to indicate whether checked tasks should be visible or not.
  let hideCompleted = false;
  // We create a handler to change the visibility of completed tasks via the flag,
  // which will be called in a button onClick handler.
  const setHideCompleted = value =>  {
    hideCompleted = value;
  }
  // We want to create a filter that we can pass to the database query,
  // to retrieve only tasks with isChecked "not equal" ($ne) to true,
  // indicating that these tasks are not yet completed,
  // effectively "hiding" the completed tasks which have isChecked === true.
  const hideCompletedFilter = { isChecked: { $ne: true } };

  // We use a svelte reactive statement called a "Tracker Statement"
  // when querying the database.
  // This re-runs whenever the query parameters change, to enable
  // hot reloading.
  // It also binds the array of task objects to the variable "tasks",
  // which we can iterate over in the <ul/> unordered list to render the tasks.
  // Reference: https://github.com/zodern/melte#tracker-statements
  $m:tasks = TasksCollection.find(
    // We pass the filter if hideCompleted flag is true,
    // otherwise we pass no filter to retrieve all tasks.
    // We sort by the creation time of the task, descending.
    hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }
  ).fetch() // We execute the query.
</script>

<div class="app">
  <!-- We define the heading element-->
  <header>
    <div class="app-bar">
      <div class="app-header">
        <h1>📝️ To Do List</h1>
      </div>
    </div>
  </header>
  <!-- We define the main app with the list and form.-->
  <div class="main">
    <!-- We render the form component which is defined in the TaskForm.svelte file.-->
    <TaskForm />
    <!-- We render a button to toggle the hideCompleted flag on click.-->
    <div class="filter">
      <button on:click={() => setHideCompleted(!hideCompleted)}>
        <!-- We change the button text so the toggle action is clear to the user in each state. -->
        {hideCompleted ? 'Show All' : 'Hide Completed'}
      </button>
    </div>
    <!-- We render the list of tasks. -->
    <ul class="tasks">
      <!-- We use Svelte syntax to iterate over each task and render each in its own <Task/> component. -->
      {#each tasks as task (task._id)}
        <!-- <Task/> is defined in Task.svelte. We pass the task object as a prop. -->
        <Task task={task} />
      {/each}
    </ul>
  </div>
</div>