export const list = document.querySelector(".todo-list"); // task list goes
const task_left = document.querySelector(".items-left"); //  how many
export const inputValue = JSON.parse(localStorage.getItem("tasks")) || []; // this to take from the local storage
const btn_filter = document.querySelectorAll(".filter-btn");


btn_filter.forEach((buton) => {
  buton.addEventListener("click", () => {
    active(buton);
    if (buton.textContent === "Active") renderHtml("active");
    else if (buton.textContent === "Completed") renderHtml("complete");
    else renderHtml("all");
  });
});

export function saveTostorage() {
  localStorage.setItem("tasks", JSON.stringify(inputValue));
} 


function active(btn) {
  btn_filter.forEach((buttons) => {
    buttons.classList.remove("active");
  });
  btn.classList.add("active");
}

// making list
export function renderHtml(filter = "all") {
  list.innerHTML = "";

  let filtered = inputValue;
  if (filter === "active")
    filtered = inputValue.filter((t) => {
      return !t.completed;
    });

  if (filter === "complete") {
    filtered = inputValue.filter((t) => {
      return t.completed;
    });
  }


  filtered.forEach((work, index) => {
    const li = document.createElement("li");
    li.setAttribute("draggable", "true");
    li.setAttribute("data-index", index);
    li.classList.add("todo-item");
    if (work.completed) li.classList.add("completed");
    li.innerHTML += `<div class="circle ${work.completed ? "checkmark" : ""}">
    <img src="assests/icon-check.svg" alt="">
    </div>
        <span class="task-text">${work.task}</span>
        <button class="delete-btn" aria-label="Delete task">
          <img src="assests/icon-cross.svg" alt="">
        </button>`;

    list.appendChild(li);
  });

  const taskLeft = inputValue.filter((task) => {
    return task.completed === false;
  });

  task_left.textContent = `${taskLeft.length} tasks left`;
}

export function saveTheme() {
  let themes = localStorage.getItem("themes");
  if (themes === "lightTheme") {
    document.body.classList.add("white-theme");
  }
}
