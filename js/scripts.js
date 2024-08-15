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


