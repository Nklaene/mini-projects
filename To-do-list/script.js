// UI variables
const form = document.querySelector('form');
const taskList = document.querySelector('.task-list');
const clearButton = document.querySelector('.dark');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks);

    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearButton.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        const listItem = document.createElement('li');
        listItem.className = 'task-list-item';
        listItem.appendChild(document.createTextNode(task));

        const link = document.createElement('span');
        link.className = 'delete';
        link.innerHTML = '<span class="delete fas fa-times"></span>'
        listItem.appendChild(link);
        taskList.appendChild(listItem);
    })
}

function addTask(e) {
    if (taskInput.value.trim() === '') {
        alert('Input a task to be added');
    } else {

        const listItem = document.createElement('li');
        listItem.className = 'task-list-item';
        listItem.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('span');
        link.className = 'delete';
        link.innerHTML = '<span class="delete fas fa-times"></span>'
        listItem.appendChild(link);
        taskList.appendChild(listItem);

        addToLocalStorage(taskInput.value);

        taskInput.value = '';
    }



    e.preventDefault();

}

function addToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        if (confirm('Delete this task?')) {
            e.target.parentElement.parentElement.remove();
            removeFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
    if (confirm('This will remove all of your tasks!')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }

    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(e) {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.task-list-item').forEach(function (task) {
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}