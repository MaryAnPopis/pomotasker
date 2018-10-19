// Css files
import "./css/reset.css";
import "./css/litera.bootswatch.css";
import "./css/main.css";

import { startPomodoro, stopTimer } from "./js/pomodoro-app";
import { addTasks } from "./js/task";

// Pomodoro starts with the click of the start button
document.getElementById("start-btn").addEventListener("click", startPomodoro);

// Pomodoro stop with the click of the pause button
document.getElementById("stop-btn").addEventListener("click", stopTimer);

// Adds a new task
document.getElementById("btn-add").addEventListener("click", addTasks);
