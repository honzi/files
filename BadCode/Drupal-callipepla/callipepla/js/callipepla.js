;(function($) {
  Drupal.behaviors.callipepla = {
    attach: function(context) {
      'use strict';

      // Run Quail on every element.
      $('body').quail({
        complete: function(result) {
          window.console.log(
            '-----------------------',
            'callipepla: tests completed.',
            result.totals
          );
          for (var test in result.results) {
            if (result.results[test].elements.length > 0) {
              window.console.log(
                '-----------------------',
                'test "' + test + '" failed!',
                result.results[test]
              );
            }
          }
          window.console.log('-----------------------');
        },
        guidelines: 'wcag2a',
        jsonPath: '/sites/all/modules/contrib/callipepla/js',
        testFailed: function(test) {
          // Add CSS to error element.
          test.element.className += ' iterami-callipepla-error';
        },
      });
    },
  };
})(jQuery);

// Function to remove all error CSS.
function iterami_callipepla_clear() {
  $('.iterami-callipepla-error').each(function() {
    $(this).removeClass('iterami-callipepla-error');
  });
}
