document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const services = formData.get('services');
    const message = formData.get('message');
  
    // Prepare the email message
    const emailMessage = `Dear ${name},\n\nThank you for your booking. Here are the details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nServices: ${services}\nMessage: ${message}\n\nWe look forward to welcoming you.\n\nBest regards,\nYour Company`;
  
    // Make an API request to your server or email service provider's API
    fetch('/send-confirmation-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: email,
        subject: 'Booking Confirmation',
        message: emailMessage
      })
    })
      .then(response => {
        if (response.ok) {
          console.log('Confirmation email sent successfully.');
          // Perform any additional actions or show a success message to the user
        } else {
          console.error('Error sending confirmation email.');
          // Handle the error or show an error message to the user
        }
      })
      .catch(error => {
        console.error('Error sending confirmation email:', error);
        // Handle the error or show an error message to the user
      });
  });