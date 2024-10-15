// Select elements
const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  const taskText = newTaskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button for each task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Append delete button to the list item
  li.appendChild(deleteBtn);

  // Append the new list item to the task list
  taskList.appendChild(li);

  // Clear the input
  newTaskInput.value = "";
}

// Event listener for add task button
addTaskBtn.addEventListener("click", addTask);

newTaskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
