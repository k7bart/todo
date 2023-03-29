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

    newLabel.addEventListener("click", function (event) {
        if (event.target === newInput) {
            // handle checkbox click
            if (newInput.checked) {
                newP.style.textDecoration = "line-through";
            } else {
                newP.style.textDecoration = "none";
            }
        } else if (event.target === newButton) {
            // handle button click
            newDiv.remove();
        }
    });
}

createNewTask("wash the dishes");
createNewTask("walk the dog");
createNewTask("water plants");
createNewTask("bake bread");

let newTaskInput = document.getElementById("new-task-input");

newTask = newTaskInput.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;

    event.preventDefault();

    const newTaskText = newTaskInput.value;

    // clear the input after submit
    event.target.value = "";

    createNewTask(newTaskText);
});

// newTaskInput.addEventListener("keydown", function (event) {
//     if (event.key !== "Enter") return;

//     event.preventDefault();

//     taskList.innerHTML += `
//         <div class="task">
//             <label class="wraper">
//                 <input type="checkbox" />
//                 <span class="checkmark"></span>
//                 <p class="text">${event.target.value}</p>
//                 <button class="remove">—</button>
//             </label>
//         </div>
//     `;

//     event.target.value = "";
// });
