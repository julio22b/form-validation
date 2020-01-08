function confirmEmail() {
    const email = document.getElementById('email');
    const emailConfirm = document.getElementById('email-confirm');
    const p = document.getElementsByTagName('p')[1];

    if (email.value.toLowerCase() !== emailConfirm.value.toLowerCase()) {
        p.textContent = `emails don't match`;
        email.style.boxShadow = '0px 0px 3px red';
        emailConfirm.style.boxShadow = '0px 0px 3px red';
    } else {
        email.style.boxShadow = '0px 0px 3px green';
        emailConfirm.style.boxShadow = '0px 0px 3px green';
        p.textContent = 'email confirmed';
    }
}

function confirmZipCode() {
    const zipInput = document.getElementById('zip-code');
    const p = document.getElementsByTagName('p')[2];

    if (!zipInput.checkValidity()) {
        p.textContent = 'zip code is invalid';
        zipInput.style.boxShadow = '0 0 3px red';
    } else if (!zipInput.value) {
        zipInput.style.boxShadow = 'none';
        p.textContent = '';
    } else {
        p.textContent = '';
        zipInput.style.boxShadow = '0 0 3px green';
    }
}

function passwordCheck() {
    const password = document.getElementById('password');
    const p = document.getElementsByTagName('p')[3];

    if (!password.checkValidity()) {
        p.textContent = 'Password is too short';
        password.style.boxShadow = '0 0 3px red';
        return false;
    } else {
        p.textContent = '';
        password.style.boxShadow = '0 0 3px green';
        return true;
    }
}

function confirmPassword() {
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');
    const p = document.getElementsByTagName('p')[4];

    if (password.value === passwordConfirm.value) {
        p.textContent = 'password confirmed';
        password.style.boxShadow = '0 0 3px green';
        passwordConfirm.style.boxShadow = '0 0 3px green';
    } else {
        p.textContent = `passwords don't match`;
        password.style.boxShadow = '0 0 3px red';
        passwordConfirm.style.boxShadow = '0 0 3px red';
    }
}
