$(document).ready(function() {
    $('#password').on('input', function() {
        var password = $(this).val();
        var strength = 0;

        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

        if (strength === 0) {
            $('#password-strength').removeClass().addClass('weak').text('Weak');
        } else if (strength < 5) {
            $('#password-strength').removeClass().addClass('medium').text('Medium');
        } else {
            $('#password-strength').removeClass().addClass('strong').text('Strong');
        }

        let feedback = '<ul>';
        feedback += (password.length >= 8) ? '<li>Password is at least 8 characters long.</li>' : '<li>Password should be at least 8 characters long.</li>';
        feedback += (/[a-z]/.test(password)) ? '<li>Contains lowercase letters.</li>' : '<li>Should contain lowercase letters.</li>';
        feedback += (/[A-Z]/.test(password)) ? '<li>Contains uppercase letters.</li>' : '<li>Should contain uppercase letters.</li>';
        feedback += (/\d/.test(password)) ? '<li>Contains numbers.</li>' : '<li>Should contain numbers.</li>';
        feedback += (/[!@#$%^&*(),.?":{}|<>]/.test(password)) ? '<li>Contains special characters.</li>' : '<li>Should contain special characters.</li>';
        feedback += '</ul>';

        $('#password-feedback').html(feedback);
    });
});
