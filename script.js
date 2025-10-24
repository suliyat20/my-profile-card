// ✅ Run code only after the page has loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOM fully loaded');

  // ✅ TIME DISPLAY (optional)
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    function updateTime() {
      timeElement.textContent = new Date().toLocaleTimeString();
    }
    updateTime();
    setInterval(updateTime, 1000);
  }

  // ✅ CONTACT FORM VALIDATION
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const errors = {
      name: document.getElementById('error-name'),
      email: document.getElementById('error-email'),
      subject: document.getElementById('error-subject'),
      message: document.getElementById('error-message')
    };
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('✅ Contact form submitted');

      // Clear old messages
      Object.values(errors).forEach(err => err.textContent = '');
      if (successMessage) successMessage.textContent = '';

      // Get input values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      let valid = true;

      if (!name) {
        errors.name.textContent = 'Name is required';
        valid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email) {
        errors.email.textContent = 'Email is required';
        valid = false;
      } else if (!emailPattern.test(email)) {
        errors.email.textContent = 'Enter a valid email';
        valid = false;
      }

      if (!subject) {
        errors.subject.textContent = 'Subject is required';
        valid = false;
      }

      if (!message) {
        errors.message.textContent = 'Message cannot be empty';
        valid = false;
      } else if (message.length < 10) {
        errors.message.textContent = 'Message must be at least 10 characters';
        valid = false;
      }

      if (valid && successMessage) {
        successMessage.textContent = '✅ Your message has been sent successfully!';
        contactForm.reset();
      }
    });
  } else {
    console.log('⚠️ No contact form on this page — skipping form script');
  }
});
