document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput').value;
    const notesInput = document.getElementById('notesInput').value;
    const dueDateInput = document.getElementById('dueDateInput').value;

    if (taskInput === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.createElement('li');
    taskList.innerHTML = `
        <div>
            <input type="checkbox" class="taskCheckbox"> <!-- Checkbox for completing the task -->
            <strong>${taskInput}</strong><br>
            <span>${notesInput}</span><br>
            <span>Due: ${dueDateInput}</span><br>
            <button class="deleteBtn">Delete</button> <!-- Delete button -->
        </div>
    `;

    taskList.querySelector('.taskCheckbox').addEventListener('change', function () {
        if (this.checked) {
            taskList.style.textDecoration = 'line-through'; 
            taskList.style.color = '#a1a1a1'; 
            explodeConfetti(); 
        } else {
            taskList.style.textDecoration = 'none'; 
            taskList.style.color = ''; 
        }
    });

    taskList.querySelector('.deleteBtn').addEventListener('click', function () {
        taskList.remove(); 
    });

 
    document.getElementById('taskList').appendChild(taskList);


    document.getElementById('taskInput').value = '';
    document.getElementById('notesInput').value = '';
    document.getElementById('dueDateInput').value = '';
});

function explodeConfetti() {
    const duration = 3 * 1000; 
    const animationEnd = Date.now() + duration;

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        // Launch confetti
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            startVelocity: 25,
            decay: 0.9,
            scalar: 1.2,
            colors: ['#ff0a00', '#ff8b00', '#ffed00', '#00eaff', '#0036ff']
        });
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            startVelocity: 25,
            decay: 0.9,
            scalar: 1.2,
            colors: ['#ff0a00', '#ff8b00', '#ffed00', '#00eaff', '#0036ff']
        });
    }, 250);
}

