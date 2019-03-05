$(document).ready(function() {
    var EDIT_MODES = {
        OFF: 0,
        ITEMS: 1,
        LEDGES: 2,
        FOLIAGE: 3,
        DISGUISES: 4
    };

    $('#edit-button').click(function() {
        var $editMenu = $('.edit-menu');
        if ($editMenu.is(':visible')) {
            $editMenu.hide();
            $('#accordion').show();
        } else {
            $editMenu.show();
            $('#accordion').hide();
        }
        $('[data-toggle="tooltip"]').tooltip('hide');
    });

    $('[data-editor="items"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.ITEMS);
        $('.editor-enabled').show().find('h3').text('ADD / REMOVE ITEMS');
        $('.edit-menu').hide();
        $('.items-menu').show();
        $('#edit-button').hide();
    });

    $('[data-item="cancel"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.OFF);
        $('.edit-menu').show();
        $('.items-menu').hide();
        $('.editor-enabled').hide();
        $('#edit-button').show();
    });

    $('[data-editor="ledges"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.LEDGES);
        $('.editor-enabled').show().find('h3').text('ADD / REMOVE LEDGES');
        $('.edit-menu').hide();
        $('.ledges-menu').show();
        $('#edit-button').hide();
    });

    $('[data-ledge="cancel"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.OFF);
        $('.edit-menu').show();
        $('.ledges-menu').hide();
        $('.editor-enabled').hide();
        $('#edit-button').show();
    });

    $('[data-editor="foliage"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.FOLIAGE);
        $('.editor-enabled').show().find('h3').text('ADD / REMOVE FOLIAGE');
        $('.edit-menu').hide();
        $('.foliage-menu').show();
        $('#edit-button').hide();
    });

    $('[data-foliage="cancel"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.OFF);
        $('.edit-menu').show();
        $('.foliage-menu').hide();
        $('.editor-enabled').hide();
        $('#edit-button').show();
    });

    $('[data-editor="disguises"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.DISGUISES);
        $('.editor-enabled').show().find('h3').text('MANAGE DISGUISE AREAS');
        $('.edit-menu').hide();
        $('.disguise-trespassing-menu').show();
        $('#edit-button').hide();
    });

    $('[data-disguise="cancel"]').click(function() {
        var $editMode = $('input[type="hidden"][name="edit-mode"]');
        $editMode.val(EDIT_MODES.OFF);
        $('.edit-menu').show();
        $('.disguise-trespassing-menu').hide();
        $('.editor-enabled').hide();
        $('#edit-button').show();
    });

    $('.search-box[data-search="items"]').find('select').change(function() {
        if (this.value === "") {
            return;
        }

        $('.search-box[data-search="items"]').find('.bootstrap-select').addClass('item-selected').end()
            .find('#clear-search').show();
    });

    $('#clear-search').click(function() {
        var $itemsSearch = $('.search-box[data-search="items"]');
        $itemsSearch.find('.bootstrap-select').removeClass('item-selected').end()
            .find('#clear-search').hide().end()
            .find('select').selectpicker('val', -1);

        $itemsSearch.find('select').trigger('change');
    });

    $('.search-box[data-search="disguises"]').find('select').change(function() {
        if (this.value === "") {
            return;
        }

        $('.search-box[data-search="disguises"]').find('.bootstrap-select').addClass('item-selected').end()
            .find('#clear-disguise-search').show();
    });

    $('#clear-disguise-search').click(function() {
        var $disguisesSearch = $('.search-box[data-search="disguises"]');
        $disguisesSearch.find('.bootstrap-select').removeClass('item-selected').end()
            .find('#clear-disguise-search').hide().end()
            .find('select').selectpicker('val', -1);

        $disguisesSearch.find('select').trigger('change');
    });

    $('[data-disguise-id]').click(function() {
        $('[data-disguise-id]').removeClass('selected');
        $(this).addClass('selected');

        if ($(this).attr('data-disguise-id') === 'NONE') {
            $('.disguise-text').text('Disguises');
        } else {
            $('.disguise-text').text($(this).find('p.disguise-info').text());
        }
        $('#header-disguises').find('.name').click();

        $('select[name="disguise-menu-dropdown"]').selectpicker('val', $(this).attr('data-disguise-id'));

        updateNodeLayerState();
    })
});

if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, pos) {
            pos = !pos || pos < 0 ? 0 : +pos;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}