let originalPassword = document.getElementById('password');
let confirmPassword = document.getElementById('password-confirm');

function checkPassword() {
    if (originalPassword.value === confirmPassword.value && 
            originalPassword.value !== '') {
        originalPassword.classList = 'password-match';
        confirmPassword.classList = 'password-match';
    } else {
        originalPassword.classList = 'error';
        confirmPassword.classList = 'error';
    }
}

originalPassword.addEventListener('change', function() {
    checkPassword();
});
confirmPassword.addEventListener('change', function() {
    checkPassword();
});