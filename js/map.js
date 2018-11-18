$(document).ready(function() {
    $('#edit-button').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        var previousEditState = parseInt($editMode.val());

        if (previousEditState === 0) {
            // Enable edit mode
            toastr["success"]('Editor enabled. Click anywhere to create a new node.');
            $editMode.val(1);
        } else {
            // Disable edit mode
            toastr["success"]('Editor disabled.');
            $editMode.val(0);
        }
    });
});