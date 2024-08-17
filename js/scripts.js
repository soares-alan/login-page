// Placeholder
document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.inputBx input');

    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            if (this.value === '') {
                if (this.type === 'text') {
                    this.placeholder = 'Enter Username';
                } else if (this.type === 'password') {
                    this.placeholder = 'Enter Password';
                }
            }
        });

        input.addEventListener('blur', function () {
            if (this.value === '') {
                this.placeholder = '';
            }
        });

        input.addEventListener('input', function () {
            if (this.value !== '') {
                this.placeholder = '';
            }
        });
    });
});

// Reveal Icon
function togglePassword() {
    var passwordField = document.getElementById("password");
    var passwordFieldType = passwordField.getAttribute("type");
    var toggleIcon = document.querySelector(".toggle-password");

    if (passwordFieldType === "password") {
        passwordField.setAttribute("type", "text");
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.setAttribute("type", "password");
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}