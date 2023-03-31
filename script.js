let taskList = document.getElementById("task-list");

function createNewTask(str) {
    let newDiv = document.createElement("div");
    newDiv.className = "task";

    let newLabel = document.createElement("label");
    newLabel.className = "wraper";

    let newSpan = document.createElement("span");
    newSpan.className = "checkmark";

    let newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox");

    let newP = document.createElement("p");
    newP.className = "text";
    newP.innerText = str;

    let newButton = document.createElement("button");
    newButton.innerText = "—";
    newButton.className = "remove";

    newLabel.appendChild(newInput);
    newLabel.appendChild(newSpan);
    newLabel.appendChild(newP);
    newLabel.appendChild(newButton);

    newDiv.appendChild(newLabel);

    taskList.appendChild(newDiv);
}

function addEventListenersToTasks() {
    const tasks = taskList.querySelectorAll(".task");
    tasks.forEach(function (task) {
        const label = task.querySelector("label");
        const input = label.querySelector("input");
        const p = label.querySelector("p");
        const button = label.querySelector("button");

        label.addEventListener("click", function (event) {
            if (event.target === input) {
                // handle checkbox click
                if (input.checked) {
                    p.style.textDecoration = "line-through";
                } else {
                    p.style.textDecoration = "none";
                }
            } else if (event.target === button) {
                // handle button click
                task.remove();
                saveTaskListToLocalStorage();
            }
        });
    });
}

// how to rewrite the code with using classList.toggle?

const themeButton = document.getElementById("theme");

isLightTheme = true;

themeButton.addEventListener("click", function () {
    const body = document.querySelector("body");
    const container = document.getElementById("container");
    const newTaskInput = document.getElementById("new-task-input");

    if (isLightTheme) {
        body.classList.add("dark-theme");
        themeButton.innerText = "🌞";
        isLightTheme = false;
    } else {
        body.classList.remove("dark-theme");
        themeButton.innerText = "🌜";
        isLightTheme = true;
    }
});

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
    addEventListenersToTasks();
}

// Load the task list from local storage if available
const savedTaskList = localStorage.getItem("taskList");
if (savedTaskList) {
    taskList.innerHTML = savedTaskList;
}

localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));

const savedTheme = localStorage.getItem("isLightTheme");

if (savedTheme) {
    isLightTheme = savedTheme;
}

addEventListenersToTasks();

/*
newTaskInput.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;
    event.preventDefault();
    taskList.innerHTML += `
        <div class="task">
            <label class="wraper">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <p class="text">${event.target.value}</p>
                <button class="remove">—</button>
            </label>
        </div>
    `;
    event.target.value = "";
});
*/
