document.addEventListener('DOMContentLoaded', () => {
    // Image Slider
    const imageSlider = document.getElementById('image-slider');
    const images = ['image1.jpg', 'image2.jpg']; // Add more image filenames as needed

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imageSlider.appendChild(imgElement);
    });

    // Booking Form
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add form validation logic here
        alert('Booking submitted!'); // Replace with actual form submission logic
    });
});
