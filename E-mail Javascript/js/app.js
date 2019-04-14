// global variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');


// event listeners

eventListeners();

function eventListeners() {
     document.addEventListener('DOMContentLoaded', appInit);

     email.addEventListener('blur', validateField);
     subject.addEventListener('blur', validateField);
     message.addEventListener('blur', validateField);
     sendEmailForm.addEventListener('submit', sendEmail);
     resetBtn.addEventListener('click', resetForm);
}


function appInit() {
    
     sendBtn.disabled = true;
}

function sendEmail(e) {
     e.preventDefault();
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'block';
     const sendEmailImg = document.createElement('img');
     sendEmailImg.src = 'img/mail.gif';
     sendEmailImg.style.display = 'block';
setTimeout(()=> { 
          spinner.style.display = 'none';
          document.querySelector('#loaders').appendChild( sendEmailImg );

          setTimeout(function() {
               sendEmailForm.reset();
               sendEmailImg.remove();
          }, 5000);
     }, 3000 );

    
}

function validateField() {
     let errors;
     validateLength(this);

     if(this.type === 'email') {
          validateEmail(this);
     }
     errors = document.querySelectorAll('.error');
          if(email.value !== '' && subject.value !== '' && message.value !== '' ) {
          if(errors.length === 0) {
               sendBtn.disabled = false;
          }
     }
}
function validateLength(field) {
     if(field.value.length > 0 ) {
          field.style.borderBottomColor = 'green';
          field.classList.remove('error');
     } else {
          field.style.borderBottomColor = 'red';
          field.classList.add('error');
     }
}
function validateEmail(field) {
     let emailText = field.value;
     if(emailText.indexOf('@') !== -1) {
          field.style.borderBottomColor = 'green';
          field.classList.remove('error');
     } else {
          field.style.borderBottomColor = 'red';
          field.classList.add('error');
     }
}

function resetForm(e) {
      e.preventDefault();

     sendEmailForm.reset();
      sendBtn.disabled = true;

}