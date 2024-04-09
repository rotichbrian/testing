const errorContainer = document.getElementById('errorContainer');
const errorMessage = document.getElementById('errorMessage');

function displayError(message) {
    errorMessage.textContent = message;
    errorContainer.style.display = 'block'; // Show the error container

    // Toggle visibility (blink) every 500ms (half a second)
    const blinkInterval = setInterval(() => {
        errorMessage.style.visibility = (errorMessage.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);

    // Clear the blinking interval after 5 seconds (5000ms)
    setTimeout(() => {
        clearInterval(blinkInterval);
        errorContainer.style.display = 'none'; // Hide the error container after blinking stops
    }, 5000); // Adjust the time as needed
}

// Example usage:
displayError("This is an error message.");
