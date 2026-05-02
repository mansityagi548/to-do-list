import {
  inputValue,
  saveTostorage,
  renderHtml,
  list,
  saveTheme,
} from "./generate.js";

saveTheme(); // for restoring theme
renderHtml(); // this is for making the lis
saveTostorage(); // this is for storing

const theme = document.querySelector(".theme-toggle"); // theme btn
const task_input = document.querySelector("#task-input"); // the input where you write task
const clearBtn = document.querySelector(".clear-btn");
const allBtn = document.querySelector("#all");
let dragStartIndex;

// this to change the theme
theme.addEventListener("click", (e) => {
  document.body.classList.toggle("white-theme");

  if (document.body.classList.contains("white-theme")) {
    localStorage.setItem("themes", "lightTheme");
  } else {
    localStorage.setItem("themes", "darkTheme");
  }
});

// this is where we write task
task_input.addEventListener("change", () => {
  inputValue.push({
    task: task_input.value,
    completed: false,
  }); // this is for when you have writing it just then with this you can have the task
  saveTostorage();
  renderHtml();


  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".filter-btn").forEach((b) => {
    if (b.textContent === "All") b.classList.add("active");
  });
  task_input.value = ""; // for able to write again
});

// this for the delete btn
list.addEventListener("click", (e) => {
  if (e.target.closest(".delete-btn")) {
    const li = e.target.closest(".todo-item");
    const index = inputValue.findIndex((work) => {
      return work.task === li.querySelector(".task-text").textContent;
    });

    inputValue.splice(index, 1);
    saveTostorage();
    renderHtml();
  }
});



// this is for complete task
list.addEventListener("click", (e) => {
  if (e.target.closest(".circle")) {
    const li = e.target.closest(".todo-item");
    const check = e.target.closest(".circle");
    const index = inputValue.findIndex((work) => {
      return work.task === li.querySelector(".task-text").textContent;
    });

    inputValue[index].completed = !inputValue[index].completed;
    saveTostorage();
    renderHtml();
  }
});

clearBtn.addEventListener("click", () => {
  const remaining = inputValue.filter((work) => {
    return work.completed === false;
  });

  inputValue.splice(0, inputValue.length);
  inputValue.push(...remaining);
  saveTostorage();
  renderHtml();

  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".filter-btn").forEach((b) => {
    if (b.textContent === "All") b.classList.add("active");
  });
});




// this for when dragging starts
list.addEventListener("dragstart", (e) => {
  if (e.target.closest(".todo-item")) {
    const li = e.target.closest(".todo-item");
    dragStartIndex = Number(li.getAttribute("data-index"));
    li.classList.add("draggable");
  }
});

// this when dragging ends
list.addEventListener("dragend", (e) => {
  if (e.target.closest(".todo-item")) {
    const li = e.target.closest(".todo-item");
    li.classList.remove("draggable");
  }
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
});

list.addEventListener("drop", (e) => {
  const li = e.target.closest(".todo-item");
  const dragEnd = Number(li.getAttribute("data-index"));

  const dragElement = inputValue.splice(dragStartIndex, 1)[0];

  inputValue.splice(dragEnd, 0, dragElement);
  saveTostorage();
  renderHtml();
});
