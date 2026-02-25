const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");
const summary = document.getElementById("summary");

let tasks = [];

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAllTasks);

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push({
        text: taskText,
        done: false
    });

    // Sort tasks in ascending order
    tasks.sort((a, b) => a.text.localeCompare(b.text));

    renderTasks();

    // Clear input box
    taskInput.value = "";
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        li.style.cursor = "pointer";
        li.style.marginBottom = "8px";

        if (task.done) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
        }

        li.addEventListener("click", function() {
            toggleTask(index);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            deleteTask(index);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    updateSummary();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function clearAllTasks() {
    tasks = [];
    renderTasks();
}

function updateSummary() {
    const completed = tasks.filter(function(task) {
        return task.done;
    }).length;

    summary.textContent = "Total: " + tasks.length + " | Completed: " + completed;
}

updateSummary();
