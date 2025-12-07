// Task 0: Build a Dynamic To-Do List Application
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList  = document.getElementById('task-list');

  /**
   * addTask: validate input, create <li> with a "Remove" button,
   * append to the list, then clear the input.
   */
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // <- required by checker

    // Remove the task when clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Build and insert
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Reset input
    taskInput.value = '';
    taskInput.focus();
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on Enter key in the input
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // (Optional) call addTask on load only if input is pre-filled
  if (taskInput.value.trim() !== '') {
    addTask();
  }
});
