
// Get the textarea element
let textarea = document.getElementById('myTextarea');

// Check if there's a saved value in local storage
let savedValue = localStorage.getItem('autosave_textarea');
// console.log(savedValue);

// Set the textarea value to the saved value, if any
if (savedValue) {
    textarea.value = savedValue;
}

// Add an event listener to the textarea for input changes
textarea.addEventListener('input', function () {
    // Save the current value to local storage
    localStorage.setItem('autosave_textarea', textarea.value);
});
