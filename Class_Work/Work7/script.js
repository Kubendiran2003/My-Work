// Select DOM elements
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Event listener for Add button
addBtn.addEventListener('click', addTask);

// Event listener for Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});