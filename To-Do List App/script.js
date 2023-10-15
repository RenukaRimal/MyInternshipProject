let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        loadTasks();
    }
}

function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
            <i class="fas fa-edit edit-button" data-index="${index}"></i>
            <i class="fas ${task.completed ? 'fa-check-circle' : 'fa-circle'} toggle-button" data-index="${index}"></i>
            <i class="fas fa-trash-alt delete-button" data-index="${index}"></i>
        `;

        taskList.appendChild(listItem);
    });

    addListeners();
}

function addListeners() {
    const taskList = document.getElementById('task-list');

    taskList.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-index');

        if (e.target.classList.contains('edit-button')) {
            const newText = prompt('Edit the task:', tasks[index].text);
            if (newText !== null) {
                tasks[index].text = newText;
                loadTasks();
            }
        } else if (e.target.classList.contains('toggle-button')) {
            tasks[index].completed = !tasks[index].completed;
            loadTasks();
        } else if (e.target.classList.contains('delete-button')) {
            tasks.splice(index, 1);
            loadTasks();
        }
    });
}

document.getElementById('add-task').addEventListener('click', addTask);
loadTasks();