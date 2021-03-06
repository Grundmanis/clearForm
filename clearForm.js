/**
 * Clear-form: a jQuery plugin for form element clearing
 * Copyright 2016 Armand Grundmanis
 * Version 1.1;
 * @copyright Armand Grundmanis
 * @author agrundmanis@inbox.lv
 * @version 1.0
 * @requires jQuery v2.1.1 - http://jquery.com/
 */
(function ( $ ) {

    $.fn.clearForm = function( options ) {

        var settings = $.extend({
            exclude_names: []
        }, options);

        var form = $(this),
            selects = form.find('select'),
            textareas = form.find('textarea'),
            inputs = form.find('input');

        // Inputs
        $.each(inputs, function(k,v) {
            var input = $(v),
                name = input.attr('name');

            if (settings.exclude_names.length > 0) {

                if ($.inArray( name, settings.exclude_names) >= 0) {
                    return;
                }
            }

            input.val('');

            if (input.attr('type') == 'checkbox') {
                input.attr('checked', false);
            }

        });
        // Textarea
        $.each(textareas, function(k,v) {
            var textarea = $(v),
                name = textarea.attr('name');

            if (settings.exclude_names.length > 0) {

                if ($.inArray( name, settings.exclude_names) >= 0) {
                    return;
                }
            }

            textarea.val('');

        });

        // Selects
        $.each(selects, function(k,v) {
            var select = $(v),
                name = select.attr('name');

            if (settings.exclude_names.length > 0) {

                if ($.inArray( name, settings.exclude_names) >= 0) {
                    return false;
                }
            }

            select.val(select.find('option:first').val())

        });

        return true;

    };

}( jQuery ));
