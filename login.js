function showForm(formType) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginButton = document.querySelector('.tab-button.active');
    const registerButton = document.querySelector('.tab-button:not(.active)');

    if (formType === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginButton.classList.add('active');
        registerButton.classList.remove('active');
    } else if (formType === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        loginButton.classList.remove('active');
        registerButton.classList.add('active');
    }
}
