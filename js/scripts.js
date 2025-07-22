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

// Background Animation
const container = document.querySelector('.span-container');
const spanCount = 500;
const spans = [];

for (let i = 0; i < spanCount; i++) {
    const span = document.createElement('span');
    spans.push(span);
    container.appendChild(span);

    let fadeTimeout;

    span.addEventListener('mouseenter', function () {
        // Cancela fade se o mouse voltar rapidamente
        if (fadeTimeout) clearTimeout(fadeTimeout);
        span.style.background = '#85FF00';
        span.style.transition = 'background 0.1s';
        span.style.boxShadow = '0 0 12px 4px #85FF00';
    });

    span.addEventListener('mouseleave', function () {
        // Começa o fade-out suave
        let opacity = 1;
        span.style.transition = 'background 0.3s, box-shadow 0.3s';
        function fade() {
            opacity -= 0.08;
            if (opacity > 0) {
                span.style.background = `rgba(133,255,0,${opacity})`;
                span.style.boxShadow = `0 0 12px 4px rgba(133,255,0,${opacity})`;
                fadeTimeout = setTimeout(fade, 16);
            } else {
                span.style.background = '';
                span.style.boxShadow = '';
            }
        }
        fade();
    });
}