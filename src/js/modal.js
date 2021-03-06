const modal = document.getElementById("modal-task");
const btnAddTask = document.getElementById("btn-modal");
const btnClose = document.getElementsByClassName("close")[0];
btnAddTask.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function openModal() {
  modal.style.display = "block";
}

export function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
    cleanTextArea();
  }
}

export const cleanTextArea = () => {
  let descriptionTxt = document.getElementById("task-description");
  descriptionTxt.value = "";
};
