$(document).ready(function() {
    $('#edit-button').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        var previousEditState = parseInt($editMode.val());

        if (previousEditState === 0) {
            // Enable edit mode
            toastr["info"]('Editor enabled. Click anywhere to create a new node.');
            $editMode.val(1);
            $('.editor-enabled').show();
            $('[data-toggle="tooltip"]').tooltip('hide');
        } else {
            // Disable edit mode
            toastr["info"]('Editor disabled.');
            $editMode.val(0);
            $('.editor-enabled').hide();
            $('[data-toggle="tooltip"]').tooltip('hide');
        }
    });
});