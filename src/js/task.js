import { cleanTextArea, closeModal } from "./modal";

window.onload = function() {
  if (JSON.parse(localStorage.getItem("tasks")) !== null) {
    printTasks();
  }
};

export const addTasks = () => {
  let selectPriority = document.getElementById("task-priority");
  let descriptionTxt = document.getElementById("task-description");
  let getImportance = selectPriority.options[selectPriority.selectedIndex];

  let info = {
    priority: selectPriority.value,
    description: descriptionTxt.value,
    importance: getImportance.dataset.importance
  };
  if (localStorage.getItem("tasks") === null) {
    let taskArr = [];
    taskArr.push(info);
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  } else {
    let getTasks = JSON.parse(localStorage.getItem("tasks"));
    getTasks.push(info);
    localStorage.setItem("tasks", JSON.stringify(getTasks));
  }
  cleanTextArea();
  closeModal();
  printTasks();
};

function printTasks() {
  let taskArray = JSON.parse(localStorage.getItem("tasks"));
  let taskContainer = document.getElementById("task-container");
  let singleTask;

  taskContainer.innerHTML = "";

  // Sort the array from high to low
  taskArray.sort((a, b) => {
    return parseInt(a.importance) - parseInt(b.importance);
  });

  taskArray.map((task, index) => {
    singleTask = `
    <div class="task-section-size single-task border-priority-${printColorPriority(
      task
    )}">
      <div class="custom-control custom-radio">
        <input type="radio" id="task-${index}" name="tasks" class="custom-control-input">
        <label class="custom-control-label label-priority-${printColorPriority(
          task
        )}" for="task-${index}">${task.description}</label>
      </div>
    </div>`;
    taskContainer.innerHTML += singleTask;
  });
}

function printColorPriority(task) {
  let color = "";
  if (task.priority === "high") {
    color = "high";
  }
  if (task.priority === "medium") {
    color = "medium";
  }
  if (task.priority === "low") {
    color = "low";
  }

  return color;
}

function removeTask() {}
