const form = document.getElementById('my-form');
let validate = false;
const username = document.getElementById('username');
const email = document.getElementById('email');
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

   //  if (!validate) {
   //     location.reload();
   //  }

});
const setError = (element, message) => {

   console.log("Error");
    validate = true;
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {

   console.log("Success");

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {

    validate = false;

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    

    if(usernameValue === '') {
        setError(username, 'Username is required');

    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    
};