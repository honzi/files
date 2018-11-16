;(function($) {
  Drupal.behaviors.disable_window_alert = {
    attach: function(context) {
      'use strict';

      window.alert = function(){
        return false;
      };
    },
  };
})(jQuery);
