if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
        if (permission !== "granted") {
            alert("Please allow notifications for this app to work properly.");
        }
    });
}

// Array to store scheduled timeout IDs
let timeoutIds = [];

function add() {
    // Get form data
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Validate form inputs
    if (!title || !description || !date || !time) {
        alert("All fields are required.");
        return;
    }

    // Combine date and time into a single string and create a Date object
    const dateTimeString = `${date} ${time}`;
    const scheduledTime = new Date(dateTimeString);
    const currentTime = new Date();

    // Check if the scheduled time is in the future
    if (scheduledTime <= currentTime) {
        alert("The scheduled time must be in the future.");
        return;
    }

    // Add the reminder to the table
    addReminderToTable(title, description, dateTimeString);

    // Calculate the delay in milliseconds
    const delay = scheduledTime - currentTime;

    // Schedule the notification and sound alert
    const timeoutId = setTimeout(() => {
        // Play sound and show notification at the same time
        triggerNotification(title, description);
    }, delay);

    // Store the timeout ID for future reference
    timeoutIds.push(timeoutId);
}

function triggerNotification(title, description) {
    // Play sound
    document.getElementById("notificationSound").play();

    // Show notification
    if (Notification.permission === "granted") {
        new Notification(title, {
            body: description,
            requireInteraction: true, // Keeps the notification on screen until interacted with
        });
    } else {
        alert(`Reminder: ${title}\n${description}`);
    }
}

function addReminderToTable(title, description, dateTimeString) {
    const tableBody = document.getElementById("reminderTableBody");

    // Create a new row
    const row = tableBody.insertRow();

    // Insert cells for the new row
    const titleCell = row.insertCell(0);
    const descriptionCell = row.insertCell(1);
    const dateTimeCell = row.insertCell(2);
    const actionCell = row.insertCell(3);

    // Fill cells with data
    titleCell.textContent = title;
    descriptionCell.textContent = description;
    dateTimeCell.textContent = dateTimeString;

    // Create a delete button and append it to the action cell
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteReminder(row);
    actionCell.appendChild(deleteButton);
}

function deleteReminder(row) {
    const index = row.rowIndex - 1; // Adjust for the table header row
    clearTimeout(timeoutIds[index]); // Clear the associated timeout
    timeoutIds.splice(index, 1); // Remove the timeout ID from the array
    row.remove(); // Remove the row from the table
}
