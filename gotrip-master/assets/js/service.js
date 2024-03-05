function search() {
    // Retrieve the checkbox elements
    var checkboxes = document.querySelectorAll('.single-items input[type="checkbox"]');

    // Initialize an empty array to store the selected device
    var selectedServices = [];

    // Loop through the checkboxes and check if they are checked
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            // Add the label text (service name) to the selectedServices array
            selectedServices.push(checkbox.parentElement.textContent.trim());
        }
    });

    if (selectedServices.length > 2) {
        window.location.href = "index.html"; 
        // Redirect to a different HTML page for more than two selected services
        } else {
        var destinationURLs = {
            "Booking information.": "index.html",
            "Cost calculator.": "about.html"
        };

        // Redirect to the determined destination URLs
        selectedServices.forEach(function (service) {
            if (destinationURLs.hasOwnProperty(service)) {
                window.location.href = destinationURLs[service];
            }
        });
    }
}