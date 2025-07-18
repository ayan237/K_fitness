// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const navList = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul li a');
  const toggleBtn = document.querySelector('.nav-toggle');
  const body = document.body;

  // Function to toggle the menu
  const toggleMenu = () => {
    navList.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    
    // Prevent body scrolling when menu is active
    if (navList.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  };

  // Event listener for the hamburger button
  toggleBtn.addEventListener('click', toggleMenu);

  // Event listeners for each nav link to close the menu on click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
});
// Add this to the end of script.js

// Logic for the equipment page photo gallery
document.addEventListener('DOMContentLoaded', () => {
  const triggerBtn = document.getElementById('gallery-trigger');
  const photoGallery = document.getElementById('full-photo-gallery');

  if (triggerBtn && photoGallery) {
    triggerBtn.addEventListener('click', () => {
      // Show the hidden gallery
      photoGallery.classList.remove('hidden');
      
      // Hide the trigger button itself
      triggerBtn.style.display = 'none';

      // Scroll down to the newly visible gallery
      photoGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});
// Add this to the end of script.js

// Lightbox functionality for equipment images
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("image-modal");
  if (!modal) return; // Do nothing if modal isn't on the page

  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close-btn");
  const equipmentImages = document.querySelectorAll('.equipment-card img');

  // Loop through all images and add the click event
  equipmentImages.forEach(img => {
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  });

  // Function to close the modal
  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Close the modal when the 'x' is clicked
  closeBtn.onclick = closeModal;

  // Close the modal when clicking outside the image
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }
});
// Add this to the end of your script.js file

document.addEventListener('DOMContentLoaded', () => {
  // Find the form on the page
  const whatsappForm = document.getElementById('whatsapp-form');

  // If the form exists on this page, add the submit event listener
  if (whatsappForm) {
    whatsappForm.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the values from the form fields
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // The owner's WhatsApp number (including country code, no + or spaces)
      const whatsappNumber = '919890284347';

      // Format the message for WhatsApp
      // Using asterisks for BOLD and underscores for ITALICS in WhatsApp
      const formattedMessage = `
New Inquiry from K-Fitness Website:
-----------------------------------
*Name:* ${name}
*Email:* ${email}
*Message:*
${message}
      `;

      // Create the WhatsApp link
      // encodeURIComponent makes sure special characters work correctly
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage.trim())}`;

      // Redirect the user to WhatsApp
      window.open(whatsappUrl, '_blank');
    });
  }
});