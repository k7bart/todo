const taskList = document.getElementById("task-list");
const input = document.getElementById("new-task-input");

let todos = JSON.parse(localStorage.getItem("todos")) ?? [];

function renderTodo(todo) {
    if (!todo.text) return;
    let todoElement = document.createElement("div");
    todoElement.className = "task";
    todoElement.innerHTML = `
            <input type="checkbox" ${todo.isComplete ? "checked" : ""} >
            <span class="checkmark"></span>
            <p class="text" contenteditable="true" spellcheck="false" style="text-decoration:${
                todo.isComplete ? "line-through" : "none"
            }"
            >${todo.text}</p>
            <button class="remove-button">
            <svg stroke="currentColor" fill="none" stroke-width="1.3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20px" width="20px" ><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
    `;
    taskList.appendChild(todoElement);
}

function initializeEventListeners() {
    taskList.addEventListener("click", function (event) {
        const clickedCheckmark = event.target.closest(".checkmark");
        const clickedRemoveButton = event.target.closest(".remove-button");

        if (clickedCheckmark) {
            const taskElement = clickedCheckmark.closest(".task");
            const textElement = taskElement.querySelector(".text");
            const todo = todos.find(
                (todo) => todo.text === textElement.innerText
            );

            const checkbox = taskElement.querySelector("input");
            checkbox.checked = !todo.isComplete;

            if (todo.isComplete) {
                textElement.style.textDecoration = "none";
            } else {
                textElement.style.textDecoration = "line-through";
            }

            todo.isComplete = !todo.isComplete;
            localStorage.setItem("todos", JSON.stringify(todos));
        }

        if (clickedRemoveButton) {
            todos = todos.filter(
                (todo) =>
                    todo.text !==
                    clickedRemoveButton.closest(".task").querySelector(".text")
                        .innerText
            );
            localStorage.setItem("todos", JSON.stringify(todos));
            clickedRemoveButton.closest(".task").remove();
        }
    });
}

// adding new task

newTask = input.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;
    event.preventDefault();

    let todo = { text: input.value, isComplete: false };

    renderTodo(todo);
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    // clear the input after submit
    event.target.value = "";
});

todos.map(renderTodo);
initializeEventListeners();
