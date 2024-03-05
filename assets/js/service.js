document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    
    var checkboxes = document.querySelectorAll('.single-items input[type="checkbox"]');
    var isChecked = false;

    // Check if any checkbox is checked
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    // If any checkbox is checked, redirect to the appropriate page
    if (isChecked) {
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                if (checkbox.parentNode.textContent.trim() === 'Tour guide job.') {
                    window.location.href = 'application-form.html';
                } else {
                    window.location.href = 'booking.html';
                }
            }
        });
    } else {
        // If no checkbox is checked, alert the user or handle it as needed
        alert('Please select a service.');
    }
});

const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
        console.log("hello")
        const appearance = { /* appearance */ };
        const options = { /* options */ };
        const elements = stripe.elements({ clientSecret, appearance });
        const paymentElement = elements.create('payment', options);
        paymentElement.mount('#payment-element');
      