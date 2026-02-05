const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = [];

addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;
    tasks.push({ id: Date.now(), text: text, completed: false });
    taskInput.value = "";
    renderTasks();
});

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) task.completed = !task.completed;
        return task;
    });
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function renderTasks(filter = "all") {
    taskList.innerHTML = "";
    let filteredTasks = tasks;
    if (filter === "completed") filteredTasks = tasks.filter(t => t.completed);
    else if (filter === "pending") filteredTasks = tasks.filter(t => !t.completed);

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "pending";
        const span = document.createElement("span");
        span.innerText = task.text;
        span.onclick = () => toggleTask(task.id);
        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = () => deleteTask(task.id);
        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
    completedCount.innerText = tasks.filter(t => t.completed).length;
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => renderTasks(btn.dataset.filter));
});
