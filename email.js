(function () {
    emailjs.init("9yED97tSOlTVKhcQi");  // Replace with your actual User ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_v9dsm6h', 'template_4cud1cw', this)  // Replace with actual Service ID and Template ID
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message, please try again later.');
        });
});
