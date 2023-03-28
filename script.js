let texts = document.getElementsByClassName("text");
let checkmarks = document.querySelectorAll(".checkmark");

for (let i = 0; i < checkmarks.length; i++) {
    checkmarks[i].addEventListener("click", function () {
        if (texts[i].style["text-decoration"] === "line-through") {
            texts[i].style["text-decoration"] = "none";
        } else {
            texts[i].style["text-decoration"] = "line-through";
        }
    });
}

let taskList = document.getElementById("task-list");
let removeButton = document.getElementsByClassName("remove");

for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", function () {
        taskList.removeChild(taskList.childNodes[i]);
    });
}

let newTaskInput = document.getElementById("new-task-input");

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

/*
newTaskInput.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;

    event.preventDefault();

    // const newTaskText = newTaskInput.value;

    // let newDiv = document.createElement("div");
    // newDiv.className = "task";
    // newDiv.id = "task";

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

    // clear the input after submit
    event.target.value = "";

    // let newLabel = document.createElement("label");
    // newLabel.className = "wraper";

    // let newSpan = document.createElement("span");
    // newSpan.className = "checkmark";

    // let newInput = document.createElement("input");
    // newInput.setAttribute("type", "checkbox");

    // let newP = document.createElement("p");
    // newP.className = "text";
    // newP.innerText = newTaskText;

    // let newButton = document.createElement("button");
    // newButton.innerText = "—";
    // newButton.className = "remove";

    // newLabel.appendChild(newInput);
    // newLabel.appendChild(newSpan);
    // newLabel.appendChild(newP);
    // newLabel.appendChild(newButton);

    // newDiv.appendChild(newLabel);

    // taskList.appendChild(newDiv);
});
*/
