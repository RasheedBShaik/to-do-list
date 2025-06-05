const registerBtn = document.getElementById("registerBtn");
const account = document.getElementById("toDoList");
const form = document.getElementById("signUp");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // still needed to prevent real form submission
  account.style.display = "flex";
  form.style.display = "none";
});

function back() {
  account.style.display = "none";
  form.style.display = "flex";
}
const taskInput = document.getElementById("tdlinput");
const saveButton = document.getElementById("saveBtn");
const taskContainer = document.querySelector(".task");

function saveTask() {
  const task = taskInput.value.trim();
  if (task) {
    const taskDiv = document.createElement("div");
    taskDiv.textContent = task;

    // Create the X button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.cursor = "pointer";

    // Remove task when X is clicked
    removeBtn.addEventListener("click", () => {
      taskContainer.removeChild(taskDiv);
    });

    // Append X button to task div
    taskDiv.appendChild(removeBtn);

    // Append task div to container
    taskContainer.appendChild(taskDiv);

    taskInput.value = ""; // Clear input
  }
}

// Save on button click
saveButton.addEventListener("click", saveTask);

// Save on Enter key pressed inside input
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    saveTask();
  }
});
