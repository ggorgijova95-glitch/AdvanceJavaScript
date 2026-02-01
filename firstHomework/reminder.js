/*# Homework 1
## Reminder App
Tasks:
- Create inputs for title, priority, color, description
- Create buttons to add and show reminders
- Store reminders in an array
- Display reminders in a table
- Title color should match the reminder color
🤖 AI Assistance:
- Ask AI how to structure objects
- Ask AI how to generate tables dynamically
✅ Validation:
- Are reminders stored correctly?
- Does the table render properly?
- Are colors applied as expected?*/
// Get references to DOM elements
// Get elements

// Get elements
const titleInput = document.getElementById('title');
const priorityInput = document.getElementById('priority');
const colorInput = document.getElementById('color');
const descriptionInput = document.getElementById('description');
const addButton = document.getElementById('addReminder');
const showButton = document.getElementById('showReminders');
const remindersTable = document.getElementById('remindersTable');

// Array to store reminders
const reminders = [];

// Add reminder
addButton.addEventListener('click', function () {
    const title = titleInput.value.trim();
    const priority = Number(priorityInput.value);
    const color = colorInput.value;
    const description = descriptionInput.value.trim();

    // Validation
    if (!title || !description) {
        alert('Please fill in all fields.');
        return;
    }

    if (isNaN(priority) || priority < 1 || priority > 5) {
        alert('Priority must be a number between 1 and 5.');
        return;
    }

    // Create reminder object
    const reminder = {
        title: title,
        priority: priority,
        color: color,
        description: description
    };

    reminders.push(reminder);

    // Clear inputs
    titleInput.value = '';
    priorityInput.value = '';
    colorInput.value = '#000000';
    descriptionInput.value = '';

    alert('Reminder added!');
});

// Show reminders
showButton.addEventListener('click', function () {
    if (reminders.length === 0) {
        alert('No reminders yet!');
        return;
    }

    // Clear table
    remindersTable.innerHTML = '';

    // Table styling
    remindersTable.style.border = '1px solid black';
    remindersTable.style.borderCollapse = 'collapse';
    remindersTable.style.width = '100%';

    // Header row
    let headerRow = remindersTable.insertRow();
    headerRow.innerHTML = `
        <th style="border:1px solid black; padding:8px;">Title</th>
        <th style="border:1px solid black; padding:8px;">Priority</th>
        <th style="border:1px solid black; padding:8px;">Color</th>
        <th style="border:1px solid black; padding:8px;">Description</th>
    `;

    // Data rows
    reminders.forEach(reminder => {
        let row = remindersTable.insertRow();
        row.innerHTML = `
            <td style="border:1px solid black; padding:8px; color:${reminder.color}; font-weight:bold;">
                ${reminder.title}
            </td>
            <td style="border:1px solid black; padding:8px;">
                ${reminder.priority}
            </td>
            <td style="border:1px solid black; background-color:${reminder.color}; width:50px;"></td>
            <td style="border:1px solid black; padding:8px;">
                ${reminder.description}
            </td>
        `;
    });
});
