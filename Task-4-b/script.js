document.addEventListener("DOMContentLoaded", function ()
{
    const taskInput = document.getElementById("tasklist");
    const taskList = document.getElementById("task-list");
    const addTaskBtn = document.getElementById("add-task");

    function loadTasks()
    {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => addTaskToDOM(task));
    }

    function saveTasks()
    {
        const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTaskToDOM(task)
    {
        const li = document.createElement("li");
        li.textContent = task;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-task");
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    addTaskBtn.addEventListener("click", function()
    {
        const task = taskInput.value.trim();
        if (task)
        {
            addTaskToDOM(task);
            saveTasks();
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e)
    {
        if (e.target.classList.contains("delete-task"))
        {
            e.target.parentElement.remove();
            saveTasks();
        }
    });

    loadTasks();
    
});