function search() {
    // Get the checked checkboxes
    const bookingCheckbox = document.getElementById("booking-checkbox");
    const calculatorCheckbox = document.getElementById("calculator-checkbox");
    const accommodationCheckbox = document.getElementById("accommodation-checkbox");
    const tourguideCheckbox = document.getElementById("tourguide-checkbox");

    // Create an array to store the selected options
    const selectedOptions = [];

    // Add the selected options to the array
    if (bookingCheckbox.checked) {
        selectedOptions.push("booking");
    }
    if (calculatorCheckbox.checked) {
        selectedOptions.push("calculator");
    }
    if (accommodationCheckbox.checked) {
        selectedOptions.push("accommodation");
    }
    if (tourguideCheckbox.checked) {
        selectedOptions.push("tourguide");
    }

    // Generate the URL based on the selected options
    let url = "";
    if (selectedOptions.length === 1) {
        url = selectedOptions[0] + ".html";
    } else if (selectedOptions.length > 1) {
        url = "combined.html?" + selectedOptions.join("&");
    }

    // Redirect the user to the appropriate page
    window.location.href = url;
}