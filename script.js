function updateTime() {
  const timeElement = document.getElementById("currentTime");
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById('contactForm')
addEventListener('submit',function(e){
  e.preventDefault();

  //Input Fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject')
  const message = document.getElementById('message')
  const successMessage = this.document.getElementById('sucessMessage');

  //Error display
  const erros = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    subject:document.getElementById('error-subject'),
    message:document.getElementById("error-message"),
  };

  //Reset Messages
    Object.values(errors).forEach(err => err.textContent = '');
    successMessage.textContent = '';

    let valid = true;

    if (name.value.trim() === ''){
      errors.name.textContent = 'Name is required';
      valid = false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
    errors.email.textContent = 'Enter a valid email';
    valid = false;
  }

    if (subject.value.trim() === '') {
    errors.subject.textContent = 'Subject is required';
    valid = false;
  }

    if (message.value.trim().length < 10) {
    errors.message.textContent = 'Message must be at least 10 characters';
    valid = false;
  }

    if (valid) {
    successMessage.textContent = '✅ Your message has been sent successfully!';
    document.getElementById('contactForm').reset();
  }


})