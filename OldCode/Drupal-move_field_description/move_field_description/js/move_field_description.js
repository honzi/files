;(function($) {
  Drupal.behaviors.move_field_description = {
    attach: function(context) {
      'use strict';

      function move_descriptions() {
        $('.description').each(function(index, element) {
          var allowed_classes = [
            'form-item',
            'text-format-wrapper',
          ];
          var proceed = false;
          var target = this.parentElement;

          // Ignore fields that don't have any of the allowed classes.
          for (var id in allowed_classes) {
            if ($(target).hasClass(allowed_classes[id])) {
              proceed = true;
              break;
            }
          }
          if (!proceed) {
            return true;
          }

          // Temporary solution for field_collection descriptions.
          if ($(target.parentElement.parentElement).hasClass('field-type-field-collection')) {
            $(this).detach().prependTo(target);
          }
          else {
            $(this).detach().insertAfter($(target).find('label').first());
          }
        });
      }

      move_descriptions();
      $(document).ajaxComplete(function() {
        move_descriptions();
      });
    },
  };
})(jQuery);
