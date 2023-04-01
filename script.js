let taskList = document.getElementById("task-list");
function createNewTask(str) {
    let newDiv = document.createElement("div");
    newDiv.className = "task-wraper";
    let newLabel = document.createElement("label");
    newLabel.className = "task";
    let newSpan = document.createElement("span");
    newSpan.className = "checkmark";
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox");
    let newP = document.createElement("p");
    newP.className = "text";
    newP.innerText = str;
    let newButton = document.createElement("button");
    newButton.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="1.3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20px" width="20px" ><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
    newButton.className = "remove-button";
    newLabel.appendChild(newInput);
    newLabel.appendChild(newSpan);
    newLabel.appendChild(newP);
    newLabel.appendChild(newButton);
    newDiv.appendChild(newLabel);
    taskList.appendChild(newDiv);
}

function addEventListenerToRemoveButton() {
    const tasks = taskList.querySelectorAll(".task-wraper");
    tasks.forEach(function (task) {
        const label = task.querySelector("label");
        const removeButton = label.querySelector("button");
        removeButton.addEventListener("click", function () {
            task.remove();
            saveTaskListToLocalStorage();
        });
    });
}

function addEventListenerToCheckbox() {
    const tasks = taskList.querySelectorAll(".task-wraper");
    tasks.forEach(function (task) {
        const label = task.querySelector("label");
        const input = label.querySelector("input");
        const p = label.querySelector("p");
        input.addEventListener("click", function () {
            if (input.checked) {
                p.style.textDecoration = "line-through";
            } else {
                p.style.textDecoration = "none";
            }
        });
    });
}

// switching theme
const themeButton = document.getElementById("theme");
isLightTheme = true;
themeButton.addEventListener("click", function () {
    const body = document.querySelector("body");
    if (isLightTheme) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        themeButton.innerHTML = `<img src="./images/sun.svg" id="sun-svg" version="1.0"  viewBox="0 0 1220.000000 1280.000000"/>`;
        isLightTheme = false;
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        themeButton.innerHTML = `<img src="./images/moon.png"
        hight = 20px
        width = 20px
    />`;
        isLightTheme = true;
    }
});

// adding new task
let newTaskInput = document.getElementById("new-task-input");
newTask = newTaskInput.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const newTaskText = newTaskInput.value;
    // clear the input after submit
    event.target.value = "";
    createNewTask(newTaskText);
    saveTaskListToLocalStorage();
});

function saveTaskListToLocalStorage() {
    localStorage.setItem("taskList", taskList.innerHTML);
    // addEventListenersToTasks();
    addEventListenerToRemoveButton();
    addEventListenerToCheckbox();
}
// Load the task list from local storage if available
const savedTaskList = localStorage.getItem("taskList");
if (savedTaskList) {
    taskList.innerHTML = savedTaskList;
}

// currentMonth = parseInt(date.slice(3, 5)) - 1;

// function addTaskForTheFirstDayOfMonth(task) {
//     firstDayOfMonth = new Date(2023, currentMonth, 1).toLocaleDateString();
//     if (date === firstDayOfMonth) {
//         createNewTask(task);
//     }
// }

// function addTaskForTheLastDayOfMonth(task) {
//     lastDayOfMonth = new Date(2023, currentMonth, 0).toLocaleDateString();
//     if (date === lastDayOfMonth) {
//         createNewTask(task);
//     }
// }

// addTaskForTheFirstDayOfMonth("give pills for the dog");
// addTaskForTheFirstDayOfMonth("change water filter");
// addTaskForTheLastDayOfMonth("transfer counter readings");

// addEventListenersToTasks();
addEventListenerToRemoveButton();
addEventListenerToCheckbox();
