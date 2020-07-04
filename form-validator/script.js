const form = document.querySelector('#signup')

form.addEventListener('submit', e => {

    e.preventDefault();
    checkEmail(form.email.value);
    checkUsername(form.username.value);
    checkPassword(form.password.value);
    checkPasswordMatch(form.password.value, form.passwordRepeat.value);

})

// could abstract these all into a single function that takes two parameters: regex and field, but this is a small project so performance is not much of a factor

function checkEmail(email) {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (email.match(regex)) {
        form.email.classList.add('success');
    } else {
        form.email.classList.remove('success');
        form.email.classList.add('error');
    }
}

function checkUsername(username) {
    if(username.match(/[a-zA-Z]{6,12}/)){
        form.username.classList.add('success');
    } else {
        form.username.classList.remove('success');
        form.username.classList.add('error');
    }
}

function checkPassword(password) {
    if(password.match(/[a-zA-Z]{6,12}/)){
        form.password.classList.add('success');
    } else {
        form.password.classList.add('error');
        form.password.classList.remove('success');
    }
}

function checkPasswordMatch(pass1, pass2) {
    if (pass1 === pass2) {
        form.passwordRepeat.classList.add('success');
    } else {
        form.passwordRepeat.classList.remove('success');
        form.passwordRepeat.classList.add('error');
    }
}