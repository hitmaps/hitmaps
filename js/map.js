$(document).ready(function() {
    var EDIT_MODES = {
        OFF: 0,
        ITEMS: 1,
        LEDGES: 2
    };

    $('#edit-button').click(function() {
        $('.edit-menu').show();
        $('#accordion').hide();
        $('[data-toggle="tooltip"]').tooltip('hide');
    });

    $('[data-editor="items"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.ITEMS);
        toastr["info"]('Click anywhere to create a new node.');
        $('.editor-enabled').show().find('h3').text('ADD / REMOVE ITEMS');
        $('.edit-menu').hide();
    });

    $('[data-editor="ledges"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.LEDGES);
        toastr["info"]('Use the buttons below to create / delete ledges.');
        $('.editor-enabled').show().find('h3').text('ADD / REMOVE LEDGES');
        $('.edit-menu').hide();
        $('.ledges-menu').show();
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