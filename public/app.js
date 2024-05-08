document.addEventListener('DOMContentLoaded', function() {
    // Get the mode toggle button by its ID
    const modeToggle = document.getElementById('modeButton');

    // Function to toggle dark/light mode
    function toggleDarkLightMode() {
        const body = document.body;
        // Check if the 'dark-mode' class is currently on the body
        const isDarkMode = body.classList.contains('darkMode');

        if (isDarkMode) {
            // If in dark mode, switch to light mode
            body.classList.remove('darkMode'); // Remove dark mode class
            body.classList.add('lightMode'); // Optional: add light mode class if you have specific light mode styles
            modeToggle.textContent = "Switch to Dark Mode"; // Update button text
            // Optional: Update other elements or styles as needed
        } else {
            // If in light mode, switch to dark mode
            body.classList.add('darkMode'); // Add dark mode class
            body.classList.remove('lightMode'); // Optional: remove light mode class if previously added
            modeToggle.textContent = "Switch to Light Mode"; // Update button text
        }
    }

    // Attach the event listener to the toggle button
    modeToggle.addEventListener('click', toggleDarkLightMode);
});
