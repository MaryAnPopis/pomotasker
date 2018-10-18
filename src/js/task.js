document.getElementById("btn-add").addEventListener("click", addTasks);
window.onload = function() {
  if (JSON.parse(localStorage.getItem("tasks")) !== null) {
    getTasks();
  }
};

function addTasks() {
  let selectPriority = document.getElementById("task-priority").value;
  let descriptionTxt = document.getElementById("task-description");
  let info = {
    priority: selectPriority,
    description: descriptionTxt.value
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
  getTasks();
}

function getTasks() {
  let taskArr = JSON.parse(localStorage.getItem("tasks"));
  let taskContainer = document.getElementById("task-container");
  let singleTask;

  taskContainer.innerHTML = "";
  taskArr.map(task => {
    singleTask = `
    <div class="task-section-size single-task ">
    <div class="${printColorPriority(task)} priority"></div>
     ${task.description}
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

function remove() {}
