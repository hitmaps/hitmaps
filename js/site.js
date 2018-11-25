$('[data-toggle="tooltip"]').tooltip();

// ReCAPTCHA
function verifyRecaptchaCallback(response) {
    $('input[data-recaptcha]').val(response).trigger('change');
}

function expiredRecaptchaCallback() {
    $('input[data-recaptcha]').val("").trigger('change');
}

//-- Initialize toastr properties
toastr.options = {
    progressBar: true,
    closeButton: true,
    positionClass: 'toast-top-full-width'
};