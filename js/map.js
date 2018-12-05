$(document).ready(function() {
    $('#edit-button').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        var previousEditState = parseInt($editMode.val());

        if (previousEditState === 0) {
            // Enable edit mode
            toastr["info"]('Editor enabled. Click anywhere to create a new node.');
            $editMode.val(1);
            $('.editor-enabled').show();
            $('#accordion').hide();
            $('.edit-menu').show();
            $('[data-toggle="tooltip"]').tooltip('hide');
        } else {
            // Disable edit mode
            toastr["info"]('Editor disabled.');
            $editMode.val(0);
            $('.editor-enabled').hide();
            $('#accordion').show();
            $('.edit-menu').hide();
            $('[data-toggle="tooltip"]').tooltip('hide');
        }
    });

    $('.search-box').find('select').change(function() {
        if (this.value === "") {
            return;
        }

        $('.search-box').find('.bootstrap-select').addClass('item-selected').end()
            .find('#clear-search').show();
    });

    $('#clear-search').click(function() {
        $('.search-box').find('.bootstrap-select').removeClass('item-selected').end()
            .find('#clear-search').hide().end()
            .find('select').selectpicker('val', -1);

        $('.search-box').find('select').trigger('change');
    })
});